import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "pages.json");

export async function GET() {
  const file = await fs.readFile(dataFile, "utf-8");
  const pages = JSON.parse(file);
  return NextResponse.json(pages);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const file = await fs.readFile(dataFile, "utf-8");
  const pages = JSON.parse(file);
  const newPage = { slug: body.slug || Date.now().toString(), ...body };
  pages.push(newPage);
  await fs.writeFile(dataFile, JSON.stringify(pages, null, 2), "utf-8");
  return NextResponse.json(newPage, { status: 201 });
}
