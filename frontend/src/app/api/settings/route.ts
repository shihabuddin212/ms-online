import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data.json");

// Define a default structure so if the file is missing it doesn't crash
const defaultData = {
    homeInternet: {
        title: "Best Home Internet Packages",
        description: "Choose the best package for your family",
        packages: [
            { id: 1, name: "Economy", speed: "10 Mbps", price: "500 Tk", features: ["1 Real IP", "24/7 Support"] }
        ]
    },
    blog: [],
    corporate: {},
    sme: {},
    ipPhone: {},
    cloudPabx: {},
    iot: {},
    domain: {},
    wifiZone: {},
    billPay: {},
    contact: {}
};

async function getDb() {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch {
        // If file doesn't exist, create it with default data
        await writeFile(DATA_FILE, JSON.stringify(defaultData, null, 4));
        return defaultData;
    }
}

export async function GET() {
    const data = await getDb();
    return NextResponse.json(data);
}

export async function POST(req: Request) {
    try {
        const updates = await req.json();
        const currentData = await getDb();

        // Merge updates
        const newData = { ...currentData, ...updates };

        await writeFile(DATA_FILE, JSON.stringify(newData, null, 4));
        return NextResponse.json({ success: true, data: newData });
    } catch (error) {
        console.error("Database write error:", error);
        return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
    }
}
