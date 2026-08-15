const express = require("express");
const {
    getLocations,
    createLocation,
    updateLocation,
    deleteLocation,
} = require("../controllers/location.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

// Public lists used by the website.
router.get("/:type", getLocations);

// Admin CRUD operations.
router.post("/:type", protect, createLocation);
router.put("/:type/:id", protect, updateLocation);
router.delete("/:type/:id", protect, deleteLocation);

module.exports = router;
