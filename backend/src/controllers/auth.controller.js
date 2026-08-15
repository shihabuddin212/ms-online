const Admin = require("../models/Admin.model");
const jwt = require("jsonwebtoken");

// Generate JWT Helper
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "2h",
    });
};

/* ══════════════════════════════════════
   POST /api/auth/register-admin
   Register local accounts (Editor/Super Admin)
══════════════════════════════════════ */
exports.registerAdmin = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, error: "Name, email and password are required" });
        }

        // Check if email already registered
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ success: false, error: "Email is already registered" });
        }

        // Create new admin
        const admin = await Admin.create({
            name,
            email,
            password,
            role: role === "super_admin" ? "super_admin" : "editor",
        });

        // Generate Token using id from JSON model
        const token = generateToken(admin.id);

        res.status(201).json({
            success: true,
            message: "Administrator registered successfully",
            token,
            data: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   POST /api/auth/login
   Standard credential validation
══════════════════════════════════════ */
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Please enter email and password" });
        }

        // Retrieve admin record (custom JSON model includes password by default for matching)
        const admin = await Admin.findOne({ email });
        if (!admin || !admin.isActive) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }

        // Check password match
        const isMatch = await admin.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }

        // Generate Token using id field from JSON model
        const token = generateToken(admin.id);

        res.status(200).json({
            success: true,
            message: "Authenticated successfully",
            token,
            data: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   GET /api/auth/me
   Return active validated login metadata
══════════════════════════════════════ */
exports.getMe = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: req.admin,
        });
    } catch (error) {
        next(error);
    }
};
