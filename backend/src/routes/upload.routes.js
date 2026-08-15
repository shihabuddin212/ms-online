const express = require("express");
const { uploadImage } = require("../controllers/upload.controller");
const { protect } = require("../middleware/auth.middleware");
const uploadInstance = require("../middleware/upload.middleware");

const router = express.Router();

// Route is protected via JWT to keep image hosting secure
router.post("/", protect, uploadInstance.single("file"), uploadImage);

module.exports = router;
