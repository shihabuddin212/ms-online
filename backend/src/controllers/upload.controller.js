/* ══════════════════════════════════════
   POST /api/upload
   Returns hosted image absolute link
══════════════════════════════════════ */
exports.uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            error: "No file uploaded. Please attach an image file.",
        });
    }

    // Build the public accessible asset URL
    const baseUrl = (process.env.PUBLIC_BASE_URL || `${req.protocol}://${req.get("host")}`).replace(/\/$/, "");
    const publicUrl = `${baseUrl}/uploads/${req.file.filename}`;

    res.status(200).json({
        success: true,
        message: "Image uploaded successfully",
        filename: req.file.filename,
        url: publicUrl,
    });
};
