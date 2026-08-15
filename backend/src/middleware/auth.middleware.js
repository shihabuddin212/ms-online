const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");

const protect = async (req, res, next) => {
    let token;

    // Check Authorization header: "Bearer <token>"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            error: "Access denied. No token provided.",
        });
    }

    try {
        // Verify token and decode payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the admin document to request
        // NOTE: Admin.findById() already strips the password field internally
        req.admin = await Admin.findById(decoded.id);

        if (!req.admin || !req.admin.isActive) {
            return res.status(401).json({
                success: false,
                error: "Admin account not found or has been deactivated.",
            });
        }

        next();
    } catch (error) {
        console.error("[Auth Middleware Error]", error.message);
        return res.status(401).json({
            success: false,
            error: "Invalid or expired token. Please log in again.",
        });
    }
};

/* ─── Super-admin only guard ─── */
const superAdminOnly = (req, res, next) => {
    if (req.admin?.role !== "super_admin") {
        return res.status(403).json({
            success: false,
            error: "Access forbidden. Super Admin privileges required.",
        });
    }
    next();
};

module.exports = { protect, superAdminOnly };
