import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file received." }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename
        const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");
        const filepath = path.join(process.cwd(), "public/uploads", filename);

        await writeFile(filepath, buffer);

        return NextResponse.json({ url: `/uploads/${filename}`, success: true });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "File upload failed." }, { status: 500 });
    }
}
