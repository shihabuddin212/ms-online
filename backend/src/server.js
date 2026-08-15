require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
let server;

connectDB().then(() => {
    server = app.listen(PORT, HOST, () => {
        console.log(`Ms Online API running on http://${HOST}:${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
}).catch((error) => {
    console.error("API startup failed:", error);
    process.exit(1);
});

const shutdown = (signal) => {
    console.log(`${signal} received: closing API server`);
    if (!server) return process.exit(0);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10_000).unref();
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
