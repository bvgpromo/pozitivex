import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "videos.json");

export async function GET() {
  const file = await fs.readFile(dataFile, "utf-8");
  const videos = JSON.parse(file);
  return NextResponse.json(videos);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const file = await fs.readFile(dataFile, "utf-8");
  const videos = JSON.parse(file);
  const newVideo = { id: Date.now().toString(), ...body };
  videos.push(newVideo);
  await fs.writeFile(dataFile, JSON.stringify(videos, null, 2), "utf-8");
  return NextResponse.json(newVideo, { status: 201 });
}
