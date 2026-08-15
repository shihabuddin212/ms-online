const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const uploadRoutes = require("./routes/upload.routes");
const packageRoutes = require("./routes/package.routes");
const blogRoutes = require("./routes/blog.routes");
const contactRoutes = require("./routes/contact.routes");
const adminPanelRoutes = require("./routes/adminPanel.routes");
const locationRoutes = require("./routes/location.routes");

const dataDir = process.env.DATA_DIR
    ? path.resolve(process.env.DATA_DIR)
    : path.join(__dirname, "..", "..");

const app = express();

app.set("trust proxy", 1);

const allowedOrigins = new Set([
    "http://localhost:3000",
    "http://localhost:3001",
    "https://msonlinebd.com",
    "https://www.msonlinebd.com",
    ...(process.env.FRONTEND_URL || "").split(","),
    ...(process.env.ALLOWED_ORIGINS || "").split(","),
].map((origin) => origin.trim()).filter(Boolean));

app.use(cors({
    origin(origin, callback) {
        // Requests without Origin are health checks or server-to-server calls.
        if (!origin || allowedOrigins.has(origin)) return callback(null, true);
        const error = new Error("Origin is not allowed by CORS");
        error.statusCode = 403;
        return callback(error);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
});

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/uploads", express.static(path.join(dataDir, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", packageRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/locations", locationRoutes);
app.use("/admin", adminPanelRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({ ok: true, service: "ms-online-backend" });
});

app.get("/", (req, res) => {
    res.redirect("/admin/login");
});

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(`[ERROR] ${status} — ${message}`);
    res.status(status).json({
        success: false,
        error: status >= 500 && process.env.NODE_ENV === "production"
            ? "Internal Server Error"
            : message,
    });
});

module.exports = app;
