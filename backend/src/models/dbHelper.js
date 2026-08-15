const fs = require("fs/promises");
const path = require("path");

const DATA_DIR = process.env.DATA_DIR
    ? path.resolve(process.env.DATA_DIR)
    : path.join(__dirname, "..", "..");
const DB_PATH = path.join(DATA_DIR, "db.json");

const readDB = async () => {
    try {
        const data = await fs.readFile(DB_PATH, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        return {
            admins: [],
            packages: [],
            blog: [],
            billPay: {},
            contact: {},
            coverageAreas: [],
            wifiZones: [],
        };
    }
};

const writeDB = async (data) => {
    // Write then rename so an interrupted process never leaves a half-written DB.
    await fs.mkdir(DATA_DIR, { recursive: true });
    const tempPath = `${DB_PATH}.${process.pid}.${Date.now()}.tmp`;
    await fs.writeFile(tempPath, JSON.stringify(data, null, 2), "utf-8");
    await fs.rename(tempPath, DB_PATH);
};

module.exports = { readDB, writeDB, DB_PATH, DATA_DIR };
