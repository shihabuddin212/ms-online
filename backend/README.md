# Ms Online ISP REST API — Backend Service

A high-performance, container-ready, production-grade **Node.js, Express.js & MongoDB** REST API backend for the Ms Online dynamic Internet Service Provider (ISP) website.

---

## 🏗️ Architecture & Folder Structure

We follow a clean, modular MVC controller-routing architecture separating models, controllers, and middlewares:

```text
backend/
├── src/
│   ├── config/
│   │   ├── db.js                 # MongoDB connection wrapper
│   │   └── registerAdmin.js      # Admin seeding CLI script
│   ├── controllers/
│   │   ├── auth.controller.js    # JWT admin auth controller
│   │   ├── blog.controller.js    # Blog post database CRUD controller
│   │   ├── package.controller.js # Multi-service package CRUD controller
│   │   └── upload.controller.js  # Multipart file handler wrapper
│   ├── middleware/
│   │   ├── auth.middleware.js    # Route-guarding JWT auth middleware
│   │   └── upload.middleware.js  # Multer setup (Disk storage, filter & limit)
│   ├── models/
│   │   ├── Admin.model.js        # Admin Schema & bcrypt password methods
│   │   ├── Blog.model.js         # Blog schema & slug pre-validators
│   │   └── Package.model.js      # Global Package schema for all modules
│   ├── routes/
│   │   ├── auth.routes.js        # Authentication route mappings
│   │   ├── blog.routes.js        # Blog API endpoints
│   │   ├── package.routes.js     # Service package route mappings
│   │   └── upload.routes.js      # File upload endpoint
│   ├── app.js                    # Express app configurations & CORS headers
│   └── server.js                 # HTTP listener entrypoint & bootstrapper
├── uploads/                      # Local storage partition for uploaded images
├── .env                          # Local service configurations
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Requirements
Ensure you have **Node.js** (v18 or higher) and a running instance of **MongoDB** locally (`mongodb://127.0.0.1:27017/ms_online_db`).

### 2. Configuration (`.env`)
The project comes preconfigured with local environment variables. Adjust `.env` as required:
```ini
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ms_online_db
JWT_SECRET=ms_online_super_secret_jwt_key_2026
JWT_EXPIRES_IN=2h
FRONTEND_URL=http://localhost:3000
```

### 3. Install & Seed Admin
Install dependencies and run the administration seeder to initialize the database:
```bash
# Install dependencies
npm install

# Demo Admin credentials:
# Email: admin@msonline.com
# Password: Admin@123
```

### 4. Run Development Server
Start the Express API engine using Nodemon for automatic hot reloads:
```bash
npm run dev
```
The server will boot up at [http://localhost:5000](http://localhost:5000).

---

## 🗄️ Database Schemas (Mongoose)

### 1. Admin Model (`src/models/Admin.model.js`)
Handles secure administrative records:
- **`name`**: String, required.
- **`email`**: String, unique, lowercase.
- **`password`**: String, hashed via `bcrypt.hash` (pre-save hook).
- **`role`**: Enum (`super_admin`, `editor`), default: `editor`.

### 2. Package Model (`src/models/Package.model.js`)
A single unified template supporting 8 different service filters:
- **`service`**: Enum (`home-internet`, `corporate`, `sme`, `ip-phone`, `cloud-pabx`, `iot`, `domain`, `wifi-zone`).
- **`name`**: String, required.
- **`price`**: String, required (e.g. `500 Tk/month`).
- **`speed`**: String (optional for non-speed modules).
- **`features`**: Array of text keys (e.g. `["24/7 support", "BDIX connected"]`).
- **`image`**: String (relative public path).
- **`isActive`**: Boolean (used to toggle package active/inactive switch).

### 3. Blog Model (`src/models/Blog.model.js`)
Manages news and article publications:
- **`title`**: String, required.
- **`slug`**: String, unique (auto-validated and generated from Title).
- **`content`**: String, required.
- **`thumbnail`**: String (relative public path).
- **`isPublished`**: Boolean, default: `false`.

---

## 🌐 API Route Endpoint Specifications

All administrative endpoints (POST, PUT, DELETE) require a bearer token sent in the Authorization header: `Authorization: Bearer <your_jwt_token>`.

### Authentication Routes
- **`POST /api/auth/register-admin`** - Register a new editor/admin user account.
- **`POST /api/auth/login`** - Validate credentials and receive JWT. Returns:
  ```json
  {
      "success": true,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "data": { "name": "Admin", "email": "admin@msonline.com", "role": "super_admin" }
  }
  ```
- **`GET /api/auth/me`** - Returns the authenticated profile validation payload. (Requires JWT).

### Multi-service Package CRUD Routes
- **`GET /api/:service/packages`** - Get active packages by service key (e.g. `/api/home-internet/packages`). Append `?all=true` to preview inactive ones.
- **`POST /api/:service/packages`** - Add a new package under the service directory. (Requires JWT).
- **`PUT /api/packages/:id`** - Edit details, price, or toggle active status of package. (Requires JWT).
- **`DELETE /api/packages/:id`** - Permanently remove package. (Requires JWT).

### Blog CRUD Routes
- **`GET /api/blog`** - Returns all published blog posts. Append `?all=true` to view unpublished drafts.
- **`GET /api/blog/:slug`** - Retrieve full details of a specific blog posting.
- **`POST /api/blog`** - Write a new blog draft or published post. (Requires JWT).
- **`PUT /api/blog/:id`** - Edit draft content, title, or publish status. (Requires JWT).
- **`DELETE /api/blog/:id`** - Delete blog post. (Requires JWT).

### Multipart File Uploads
- **`POST /api/upload`** - Upload image binaries (multipart/form-data with key `file`). (Requires JWT). Returns:
  ```json
  {
      "success": true,
      "message": "Image uploaded successfully",
      "url": "http://localhost:5000/uploads/1723145672101-image.png"
  }
  ```

---

## 🖥️ Ubuntu VPS Deployment Guide (A to Z Step-by-Step)

Follow this professional guide to deploy both the **Express Backend (Port 5000)** and the **Next.js Frontend (Port 3000)** on your Ubuntu VPS server, secure it with SSL, and configure Nginx as a reverse proxy.

### 🌟 Prerequisites & Domain Setup
1. Point your domain or subdomain to the VPS IP address:
   - `yourdomain.com` (A Record → `VPS_IP`)
   - `api.yourdomain.com` (A Record → `VPS_IP`)

---

### Step 1: Update & Install System Dependencies
Login into your Ubuntu VPS via SSH and install required setup packages:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx certbot python3-certbot-nginx
```

Install **Node.js LTS (v20+)** using NodeSource:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Install **PM2 globally** to manage Node processes in the background:
```bash
sudo npm install -y pm2 -g
```

---

### Step 2: Clone the Project Repository
Create the target application folder and clone your repository (or upload via SFTP):
```bash
sudo mkdir -p /var/www/ms-onlinebd
sudo chown -R $USER:$USER /var/www/ms-onlinebd
cd /var/www/ms-onlinebd

# Clone your project repo here:
git clone <YOUR_GIT_REPOSITORY_URL> .
```

---

### Step 3: Configure Environment Variables & Permissions
Because the backend app uses a local filesystem `db.json` database and accepts dynamic image uploads, you must grant read/write permissions to Node:
```bash
cd /var/www/ms-onlinebd/backend
# Create uploads folder if not exists
mkdir -p uploads
# Ensure appropriate folder permissions
chmod -R 775 uploads db.json 2>/dev/null
```

Create and configure your production backend `.env` variables:
```bash
nano .env
```
Paste and modify the variables accordingly:
```ini
PORT=5000
JWT_SECRET=ms_online_super_secret_jwt_key_2026
JWT_EXPIRES_IN=24h
FRONTEND_URL=https://yourdomain.com
```

---

### Step 4: Launch Backend with PM2
Install backend dependencies and spin up the Express API server:
```bash
npm install
pm2 start src/server.js --name "ms-online-backend"
pm2 save
```

---

### Step 5: Build & Run Next.js Frontend
Now navigate to your frontend directory, configure production environmental settings pointing to your domain API, compile Turbopack assets, and spin it up under PM2:
```bash
cd /var/www/ms-onlinebd/frontend
nano .env.local
```
Add the production API endpoint:
```ini
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

Build the repository bundle:
```bash
npm install
npm run build
```

Launch the frontend NextJS server with PM2 mapping port 3000:
```bash
pm2 start npm --name "ms-online-frontend" -- start
pm2 save
pm2 startup
```

Verify your PM2 process statuses:
```bash
pm2 list
```
You should see:
- `ms-online-backend` online
- `ms-online-frontend` online

---

### Step 6: Configure Nginx as a Reverse Proxy
Nginx will route requests from ports 80/443 (HTTP/HTTPS) to your running Node endpoints on localhost ports 5000 and 3000.

Create an Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/ms-onlinebd
```

Paste the following configurations (replacing domain names with yours):
```nginx
# 1. Frontend Proxy mapping
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve uploads static directory from backend directly (Optional/Performance)
    location /uploads/ {
        alias /var/www/ms-onlinebd/backend/uploads/;
        access_log off;
        expires max;
    }
}

# 2. Backend API Proxy mapping
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the configuration and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/ms-onlinebd /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### Step 7: Secure the Deployment with SSL (Certbot)
Run Certbot to request Let's Encrypt certificates and update Nginx configs to HTTPS automatically:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com
```
Follow prompts, choose option to redirect HTTP to HTTPS automatically.

---

### 🛡️ Check Server Health Logs Anytime
View live system application outputs or process logs:
```bash
# View backend outputs
pm2 logs ms-online-backend

# View frontend outputs
pm2 logs ms-online-frontend
```
Now navigate to `https://yourdomain.com/admin/login` to access the Admin Panel securely.

