const { readDB, writeDB } = require("../models/dbHelper");

const COLLECTION_BY_TYPE = {
    coverage: "coverageAreas",
    wifi: "wifiZones",
};

const getCollectionName = (type) => COLLECTION_BY_TYPE[type];

exports.getLocations = async (req, res, next) => {
    try {
        const collectionName = getCollectionName(req.params.type);
        if (!collectionName) {
            return res.status(400).json({ success: false, error: "Invalid location type" });
        }

        const db = await readDB();
        const locations = [...(db[collectionName] || [])].sort((a, b) => {
            const orderDifference = (a.sortOrder || 0) - (b.sortOrder || 0);
            return orderDifference || String(a.name).localeCompare(String(b.name));
        });

        res.status(200).json({ success: true, count: locations.length, data: locations });
    } catch (error) {
        next(error);
    }
};

exports.createLocation = async (req, res, next) => {
    try {
        const collectionName = getCollectionName(req.params.type);
        if (!collectionName) {
            return res.status(400).json({ success: false, error: "Invalid location type" });
        }

        const name = String(req.body.name || "").trim();
        if (!name) {
            return res.status(400).json({ success: false, error: "Location name is required" });
        }

        const db = await readDB();
        if (!Array.isArray(db[collectionName])) db[collectionName] = [];

        const duplicate = db[collectionName].some((item) => item.name.toLowerCase() === name.toLowerCase());
        if (duplicate) {
            return res.status(400).json({ success: false, error: "This location already exists" });
        }

        const location = {
            id: String(Date.now()),
            name,
            sortOrder: Number(req.body.sortOrder) || db[collectionName].length + 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        db[collectionName].push(location);
        await writeDB(db);
        res.status(201).json({ success: true, data: location });
    } catch (error) {
        next(error);
    }
};

exports.updateLocation = async (req, res, next) => {
    try {
        const collectionName = getCollectionName(req.params.type);
        if (!collectionName) {
            return res.status(400).json({ success: false, error: "Invalid location type" });
        }

        const name = String(req.body.name || "").trim();
        if (!name) {
            return res.status(400).json({ success: false, error: "Location name is required" });
        }

        const db = await readDB();
        const locations = db[collectionName] || [];
        const index = locations.findIndex((item) => String(item.id) === String(req.params.id));
        if (index === -1) {
            return res.status(404).json({ success: false, error: "Location not found" });
        }

        const duplicate = locations.some((item, itemIndex) => itemIndex !== index && item.name.toLowerCase() === name.toLowerCase());
        if (duplicate) {
            return res.status(400).json({ success: false, error: "This location already exists" });
        }

        locations[index] = {
            ...locations[index],
            name,
            sortOrder: Number(req.body.sortOrder) || locations[index].sortOrder || index + 1,
            updatedAt: new Date().toISOString(),
        };
        db[collectionName] = locations;
        await writeDB(db);

        res.status(200).json({ success: true, data: locations[index] });
    } catch (error) {
        next(error);
    }
};

exports.deleteLocation = async (req, res, next) => {
    try {
        const collectionName = getCollectionName(req.params.type);
        if (!collectionName) {
            return res.status(400).json({ success: false, error: "Invalid location type" });
        }

        const db = await readDB();
        const locations = db[collectionName] || [];
        const index = locations.findIndex((item) => String(item.id) === String(req.params.id));
        if (index === -1) {
            return res.status(404).json({ success: false, error: "Location not found" });
        }

        locations.splice(index, 1);
        db[collectionName] = locations;
        await writeDB(db);
        res.status(200).json({ success: true, message: "Location deleted" });
    } catch (error) {
        next(error);
    }
};
