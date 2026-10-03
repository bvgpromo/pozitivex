import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "pricing.json");

export async function GET() {
  try {
    const file = await fs.readFile(dataFile, "utf-8");
    const data = JSON.parse(file);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read pricing data" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    await fs.writeFile(dataFile, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save pricing data" }, { status: 500 });
  }
}
