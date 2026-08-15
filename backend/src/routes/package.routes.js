const express = require("express");
const {
    getPackages,
    createPackage,
    updatePackage,
    deletePackage,
} = require("../controllers/package.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

// Publicly access service package list
router.get("/:service/packages", getPackages);

// Protected routes to manage package items
router.post("/:service/packages", protect, createPackage);
router.put("/packages/:id", protect, updatePackage);
router.delete("/packages/:id", protect, deletePackage);

module.exports = router;
