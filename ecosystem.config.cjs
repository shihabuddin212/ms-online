module.exports = {
  apps: [
    {
      name: "ms-online-api",
      cwd: "./backend",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
      env: { NODE_ENV: "production" },
    },
    {
      name: "ms-online-web",
      cwd: "./frontend",
      script: "./node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      instances: 1,
      autorestart: true,
      max_memory_restart: "500M",
      env: { NODE_ENV: "production" },
    },
  ],
};
