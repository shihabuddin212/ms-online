const fs = require("fs/promises");
const path = require("path");

const DATA_DIR = process.env.DATA_DIR
    ? path.resolve(process.env.DATA_DIR)
    : path.join(__dirname, "..", "..");
const DB_PATH = path.join(DATA_DIR, "db.json");

const connectDB = async () => {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        // Ensure db.json exists
        try {
            await fs.access(DB_PATH);
        } catch {
            const initialData = {
                admins: [
                    {
                        id: "1",
                        name: "Ms Online Administrator",
                        email: "admin@msonline.com",
                        // Hashed password for 'Admin@123'
                        password: "$2a$12$yP3UAashzjpAfY7ef.W/PedyPD7sVbfFnNA8NCS5TD9FGA1V12jsW",
                        role: "super_admin",
                        isActive: true
                    }
                ],
                packages: [],
                blog: [],
                billPay: { textInfo: "", updatedDate: "" },
                contact: { email: "noc@msonlinebd.com", phone: "09639116116", inquiries: [] }
            };
            await fs.writeFile(DB_PATH, JSON.stringify(initialData, null, 2), "utf-8");
        }
        console.log(`✅  Local Document JSON Database initialized at:\n    ${DB_PATH}`);
    } catch (error) {
        console.error(`❌  DB Initialization failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
