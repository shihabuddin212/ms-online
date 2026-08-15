# Ms Online production deployment guide

This guide deploys the repository to an Ubuntu VPS with the public website at `https://www.msonlinebd.com`. Nginx handles HTTPS and forwards website requests to Next.js on `127.0.0.1:3000` and API, uploads, and admin requests to Express on `127.0.0.1:5000`. The two Node processes are managed by PM2 and restart automatically after a crash or server reboot.

## Before starting

- Use Ubuntu 22.04 or 24.04 LTS, with a public IPv4 address, at least 2 GB RAM, and SSH access.
- In the domain registrar DNS panel, create these records before requesting SSL:

| Type | Host | Value |
| --- | --- | --- |
| `A` | `@` | Your VPS public IPv4 address |
| `A` | `www` | Your VPS public IPv4 address |

- Wait for DNS propagation, then verify from the VPS (replace `SERVER_IP`):

```bash
dig +short msonlinebd.com
dig +short www.msonlinebd.com
curl -4 ifconfig.me
```

The two `dig` results must equal the server IP. Do not continue to Certbot until they do.

## 1. Push this project to GitHub

From the project root on your Windows computer, review the files first. The included `.gitignore` deliberately keeps `.env`, logs, dependencies, build output, and runtime uploads out of Git.

```powershell
cd "C:\Users\Admin\Desktop\Ms Onlinebd - Copy"
git status
git add .
git commit -m "Prepare Ms Online for production deployment"
git branch -M main
git remote add origin https://github.com/shihabuddin212/ms-online.git
git push -u origin main
```

If `origin` already exists, replace the `git remote add` line with:

```powershell
git remote set-url origin https://github.com/shihabuddin212/ms-online.git
```

If the push is rejected because the GitHub repository contains a README or another first commit, merge that remote history, resolve any conflict, then push:

```powershell
git fetch origin main
git merge origin/main --allow-unrelated-histories
git push -u origin main
```

Use a GitHub Personal Access Token or SSH key when GitHub asks for authentication; never put a token in source code or an `.env` file committed to Git.

## 2. Prepare Ubuntu

Connect to the server and install the required system packages. Run as a sudo-capable non-root user.

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx certbot python3-certbot-nginx curl build-essential
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
sudo npm install -g pm2
```

Configure the firewall. Keep your current SSH port open if you changed it from 22.

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## 3. Clone, install, and configure the application

Choose a deployment directory and clone the repository:

```bash
sudo mkdir -p /var/www
sudo chown "$USER":"$USER" /var/www
cd /var/www
git clone https://github.com/shihabuddin212/ms-online.git ms-online
cd /var/www/ms-online
```

Create a persistent data directory. CMS data and uploads live here, outside the Git checkout, so a future `git pull` cannot overwrite them.

```bash
sudo install -d -m 750 -o "$USER" -g "$USER" /var/lib/ms-online/uploads
test -f /var/lib/ms-online/db.json || cp backend/db.json /var/lib/ms-online/db.json
```

Create the backend environment file. Generate the JWT secret on the server; do not reuse the example value.

```bash
cp backend/.env.example backend/.env
JWT_SECRET_VALUE="$(openssl rand -hex 32)"
sed -i "s/replace_with_a_long_random_secret/$JWT_SECRET_VALUE/" backend/.env
nano backend/.env
```

Confirm that `backend/.env` has these production values:

```ini
NODE_ENV=production
PORT=5000
HOST=127.0.0.1
DATA_DIR=/var/lib/ms-online
PUBLIC_BASE_URL=https://www.msonlinebd.com
JWT_SECRET=<the generated secret>
JWT_EXPIRES_IN=2h
FRONTEND_URL=https://www.msonlinebd.com
ALLOWED_ORIGINS=https://msonlinebd.com,https://www.msonlinebd.com
```

Create the frontend build environment. `NEXT_PUBLIC_API_URL` is compiled into browser JavaScript, so this file must exist before every production build. `API_INTERNAL_URL` remains private to the VPS.

```bash
cp frontend/.env.example frontend/.env.production
nano frontend/.env.production
```

It should contain:

```ini
API_INTERNAL_URL=http://127.0.0.1:5000
NEXT_PUBLIC_API_URL=https://www.msonlinebd.com
```

Install exact dependency versions and build the frontend:

```bash
cd /var/www/ms-online/backend && npm ci
cd /var/www/ms-online/frontend && npm ci && npm run build
```

Replace the insecure development administrator before exposing the website. This command creates or updates the named account as a super admin in `/var/lib/ms-online/db.json`; the password is not stored in shell history.

```bash
cd /var/www/ms-online/backend
read -rp "Admin email: " ADMIN_EMAIL
read -rp "Admin name: " ADMIN_NAME
read -rsp "Admin password (12+ characters): " ADMIN_PASSWORD; echo
export ADMIN_EMAIL ADMIN_NAME ADMIN_PASSWORD
npm run admin:set
unset ADMIN_PASSWORD
```

## 4. Start with PM2 and verify locally

Start both applications using the included PM2 definition, save the process list, and enable startup after reboot:

```bash
cd /var/www/ms-online
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd -u "$USER" --hp "$HOME"
```

Run the final command printed by `pm2 startup`, then check both services:

```bash
pm2 status
pm2 logs --lines 100
curl -fsS http://127.0.0.1:5000/health
curl -I http://127.0.0.1:3000
```

Expected health response: `{"ok":true,"service":"ms-online-backend"}`. If a process is not online, inspect `pm2 logs ms-online-api` or `pm2 logs ms-online-web` before continuing.

## 5. Configure Nginx

Create `/etc/nginx/sites-available/msonlinebd.com`:

```bash
sudo nano /etc/nginx/sites-available/msonlinebd.com
```

Paste this configuration exactly:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name msonlinebd.com www.msonlinebd.com;

    client_max_body_size 6m;

    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /uploads/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /admin/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and validate Nginx before reload:

```bash
sudo ln -s /etc/nginx/sites-available/msonlinebd.com /etc/nginx/sites-enabled/msonlinebd.com
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
curl -I http://www.msonlinebd.com
```

## 6. Add SSL and force HTTPS

Once both DNS records resolve to this VPS and HTTP works, issue the certificate:

```bash
sudo certbot --nginx -d msonlinebd.com -d www.msonlinebd.com --redirect -m your-email@example.com --agree-tos --no-eff-email
sudo certbot renew --dry-run
```

Certbot automatically installs certificate renewal. Verify the live site and both application paths:

```bash
curl -I https://www.msonlinebd.com
curl -fsS https://www.msonlinebd.com/api/health
curl -I https://www.msonlinebd.com/admin/login
```

## 7. Safe updates after a GitHub push

Before every update, back up the persistent CMS data and uploads. Then pull source code, install locked dependencies, rebuild, restart, and perform a health check.

```bash
cd /var/www/ms-online
BACKUP_DIR="/var/backups/ms-online/$(date +%F-%H%M%S)"
sudo install -d -m 750 "$BACKUP_DIR"
sudo cp /var/lib/ms-online/db.json "$BACKUP_DIR/"
sudo cp -a /var/lib/ms-online/uploads "$BACKUP_DIR/"

git pull --ff-only origin main
cd backend && npm ci
cd ../frontend && npm ci && npm run build
cd ..
pm2 reload ecosystem.config.cjs --update-env
curl -fsS http://127.0.0.1:5000/health
curl -I https://www.msonlinebd.com
```

If the deployment fails, restore source code to the previous commit and restart:

```bash
cd /var/www/ms-online
git log --oneline -5
git reset --hard <previous-known-good-commit>
cd backend && npm ci
cd ../frontend && npm ci && npm run build
cd .. && pm2 reload ecosystem.config.cjs --update-env
```

The persistent `/var/lib/ms-online` data is not modified by this rollback. Restore it from the timestamped backup only if CMS data itself is the problem.

## Operational checks

Use these commands when troubleshooting:

```bash
pm2 status
pm2 logs ms-online-api --lines 100
pm2 logs ms-online-web --lines 100
sudo nginx -t
sudo systemctl status nginx --no-pager
sudo certbot certificates
df -h
free -h
```

Keep Ubuntu security updates current, rotate the JWT secret only with a planned logout window, make off-server backups of `/var/lib/ms-online`, and never expose ports 3000 or 5000 publicly. Only Nginx ports 80 and 443 should be reachable from the internet.
