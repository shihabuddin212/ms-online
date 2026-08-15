const express = require("express");
const { login, registerAdmin, getMe } = require("../controllers/auth.controller");
const { protect, superAdminOnly } = require("../middleware/auth.middleware");

const router = express.Router();

// Never expose account creation publicly; an authenticated super admin creates editors.
router.post("/register-admin", protect, superAdminOnly, registerAdmin);
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
