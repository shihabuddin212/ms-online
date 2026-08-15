const Package = require("../models/Package.model");

// Verify that the requested service parameter is valid
const VALID_SERVICES = [
    "home-internet",
    "corporate",
    "sme",
    "ip-phone",
    "cloud-pabx",
    "iot",
    "wifi-zone",
];

/* ══════════════════════════════════════
   GET /api/:service/packages
   Fetch all packages for a specified service
══════════════════════════════════════ */
exports.getPackages = async (req, res, next) => {
    try {
        const { service } = req.params;

        if (!VALID_SERVICES.includes(service)) {
            return res.status(400).json({ success: false, error: "Invalid service module specified" });
        }

        // By default, public API fetches only active packages. Admin requests can fetch all.
        const query = { service };
        if (!req.query.all) {
            query.isActive = true;
        }

        const packages = await Package.find(query).sort({ sortOrder: 1, createdAt: -1 });

        res.status(200).json({
            success: true,
            count: packages.length,
            data: packages,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   POST /api/:service/packages
   Create a new package under a service
══════════════════════════════════════ */
exports.createPackage = async (req, res, next) => {
    try {
        const { service } = req.params;

        if (!VALID_SERVICES.includes(service)) {
            return res.status(400).json({ success: false, error: "Invalid service module specified" });
        }

        const packageData = { ...req.body, service };
        const newPackage = await Package.create(packageData);

        res.status(201).json({
            success: true,
            message: "Package created successfully",
            data: newPackage,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   PUT /api/packages/:id
   Update a specific package by its unique ID
══════════════════════════════════════ */
exports.updatePackage = async (req, res, next) => {
    try {
        const { id } = req.params;

        let packageItem = await Package.findById(id);

        if (!packageItem) {
            return res.status(404).json({ success: false, error: "Package item not found" });
        }

        // Do not allow modification of the service category via update endpoint
        delete req.body.service;

        packageItem = await Package.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            message: "Package updated successfully",
            data: packageItem,
        });
    } catch (error) {
        next(error);
    }
};

/* ══════════════════════════════════════
   DELETE /api/packages/:id
   Remove a package completely from MongoDB
══════════════════════════════════════ */
exports.deletePackage = async (req, res, next) => {
    try {
        const { id } = req.params;

        const packageItem = await Package.findById(id);

        if (!packageItem) {
            return res.status(404).json({ success: false, error: "Package item not found" });
        }

        await packageItem.deleteOne();

        res.status(200).json({
            success: true,
            message: "Package removed successfully",
        });
    } catch (error) {
        next(error);
    }
};
