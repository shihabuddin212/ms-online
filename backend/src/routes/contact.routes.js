const express = require("express");
const router = express.Router();
const {
    getSubjects,
    createSubject,
    deleteSubject,
    submitMessage,
    getMessages,
    updateMessage,
    deleteMessage,
} = require("../controllers/contact.controller");
const { protect } = require("../middleware/auth.middleware");

// Public routes
router.get("/subjects", getSubjects);
router.post("/messages", submitMessage);

// Admin protected routes
router.post("/subjects", protect, createSubject);
router.delete("/subjects/:id", protect, deleteSubject);
router.get("/messages", protect, getMessages);
router.put("/messages/:id", protect, updateMessage);
router.delete("/messages/:id", protect, deleteMessage);

module.exports = router;
