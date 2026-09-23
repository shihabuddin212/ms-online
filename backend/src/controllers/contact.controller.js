const { readDB, writeDB } = require("../models/dbHelper");

/* ══════════════════════════════════════
   GET /api/contact/subjects
   Public: Get all active subject categories
══════════════════════════════════════ */
exports.getSubjects = async (req, res, next) => {
    try {
        const db = await readDB();
        const subjects = db.contactSubjects || [];
        res.status(200).json({ success: true, data: subjects });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   POST /api/contact/subjects
   Admin: Add a new subject category
══════════════════════════════════════ */
exports.createSubject = async (req, res, next) => {
    try {
        const db = await readDB();
        if (!db.contactSubjects) db.contactSubjects = [];
        const { label, value } = req.body;
        if (!label || !value) {
            return res.status(400).json({ success: false, error: "Label and value are required" });
        }
        const exists = db.contactSubjects.find(s => s.value === value);
        if (exists) {
            return res.status(400).json({ success: false, error: "Subject with this value already exists" });
        }
        const newSubject = {
            id: String(Date.now()),
            label: label.trim(),
            value: value.trim().toLowerCase().replace(/\s+/g, "-"),
            createdAt: new Date().toISOString()
        };
        db.contactSubjects.push(newSubject);
        await writeDB(db);
        res.status(201).json({ success: true, data: newSubject });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   DELETE /api/contact/subjects/:id
   Admin: Remove a subject category
══════════════════════════════════════ */
exports.deleteSubject = async (req, res, next) => {
    try {
        const db = await readDB();
        const { id } = req.params;
        const idx = (db.contactSubjects || []).findIndex(s => s.id === id);
        if (idx === -1) {
            return res.status(404).json({ success: false, error: "Subject not found" });
        }
        db.contactSubjects.splice(idx, 1);
        await writeDB(db);
        res.status(200).json({ success: true, message: "Subject deleted" });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   POST /api/contact/messages
   Public: Submit a contact inquiry
══════════════════════════════════════ */
exports.submitMessage = async (req, res, next) => {
    try {
        const db = await readDB();
        if (!db.contact) db.contact = {};
        if (!db.contact.inquiries) db.contact.inquiries = [];

        const { name, email, phone, subject, message, package: pkgName } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: "Name, email and message are required" });
        }

        const newMsg = {
            id: String(Date.now()),
            name: name.trim(),
            email: email.trim(),
            phone: (phone || "").trim(),
            subject: subject || "general",
            package: (pkgName || "").trim(),
            message: message.trim(),
            status: "unread",
            adminNote: "",
            createdAt: new Date().toISOString()
        };

        db.contact.inquiries.push(newMsg);
        await writeDB(db);
        res.status(201).json({ success: true, message: "Message submitted successfully", data: newMsg });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   GET /api/contact/messages
   Admin: Get all inquiry messages
══════════════════════════════════════ */
exports.getMessages = async (req, res, next) => {
    try {
        const db = await readDB();
        const inquiries = (db.contact?.inquiries || []).slice().reverse();
        res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   PUT /api/contact/messages/:id
   Admin: Update message status or add note
══════════════════════════════════════ */
exports.updateMessage = async (req, res, next) => {
    try {
        const db = await readDB();
        const { id } = req.params;
        const inquiries = db.contact?.inquiries || [];
        const idx = inquiries.findIndex(m => m.id === id);
        if (idx === -1) {
            return res.status(404).json({ success: false, error: "Message not found" });
        }
        const updated = {
            ...inquiries[idx],
            ...req.body,
            id,
            updatedAt: new Date().toISOString()
        };
        db.contact.inquiries[idx] = updated;
        await writeDB(db);
        res.status(200).json({ success: true, data: updated });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   DELETE /api/contact/messages/:id
   Admin: Delete a message
══════════════════════════════════════ */
exports.deleteMessage = async (req, res, next) => {
    try {
        const db = await readDB();
        const { id } = req.params;
        const inquiries = db.contact?.inquiries || [];
        const idx = inquiries.findIndex(m => m.id === id);
        if (idx === -1) {
            return res.status(404).json({ success: false, error: "Message not found" });
        }
        db.contact.inquiries.splice(idx, 1);
        await writeDB(db);
        res.status(200).json({ success: true, message: "Message deleted" });
    } catch (error) {
        next(error);
    }
};
