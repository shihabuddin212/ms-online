require("dotenv").config();

const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const { readDB, writeDB } = require("../models/dbHelper");

async function setAdmin() {
    const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;
    const name = process.env.ADMIN_NAME?.trim() || "Ms Online Administrator";

    if (!email || !password) {
        throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set for this command.");
    }
    if (password.length < 12) {
        throw new Error("ADMIN_PASSWORD must be at least 12 characters long.");
    }

    await connectDB();
    const db = await readDB();
    db.admins = db.admins || [];
    const passwordHash = await bcrypt.hash(password, 12);
    const index = db.admins.findIndex((admin) => admin.email?.toLowerCase() === email);
    const admin = {
        id: index >= 0 ? db.admins[index].id : String(Date.now()),
        name,
        email,
        password: passwordHash,
        role: "super_admin",
        isActive: true,
        createdAt: index >= 0 ? db.admins[index].createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    if (index >= 0) db.admins[index] = admin;
    else db.admins.push(admin);

    await writeDB(db);
    console.log(`Super admin ${index >= 0 ? "updated" : "created"}: ${email}`);
}

setAdmin().catch((error) => {
    console.error(`Admin setup failed: ${error.message}`);
    process.exitCode = 1;
});
