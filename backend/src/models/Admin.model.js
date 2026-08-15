const { readDB, writeDB } = require("./dbHelper");
const bcrypt = require("bcryptjs");

class AdminModel {
    static async findOne({ email }) {
        const db = await readDB();
        const admin = db.admins.find(a => a.email.toLowerCase() === email.toLowerCase());
        if (!admin) return null;

        // Return admin instance with matching methods
        return {
            ...admin,
            matchPassword: async function (enteredPassword) {
                return await bcrypt.compare(enteredPassword, this.password);
            }
        };
    }

    static async findById(id) {
        const db = await readDB();
        const admin = db.admins.find(a => String(a.id) === String(id));
        if (!admin) return null;

        // Return instance without password unless requested
        const { password, ...safeAdmin } = admin;
        return safeAdmin;
    }

    static async create(data) {
        const db = await readDB();

        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const newAdmin = {
            id: String(Date.now()),
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: data.role || "editor",
            isActive: true,
            createdAt: new Date().toISOString()
        };

        db.admins.push(newAdmin);
        await writeDB(db);

        const { password, ...safeAdmin } = newAdmin;
        return safeAdmin;
    }
}

module.exports = AdminModel;
