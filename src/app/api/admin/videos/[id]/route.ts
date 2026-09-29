import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "videos.json");

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const body = await req.json();
  const file = await fs.readFile(dataFile, "utf-8");
  const videos = JSON.parse(file);
  const index = videos.findIndex((v: any) => v.id === id);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  videos[index] = { ...videos[index], ...body };
  await fs.writeFile(dataFile, JSON.stringify(videos, null, 2), "utf-8");
  return NextResponse.json(videos[index]);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const file = await fs.readFile(dataFile, "utf-8");
  let videos = JSON.parse(file);
  const lengthBefore = videos.length;
  videos = videos.filter((v: any) => v.id !== id);
  if (videos.length === lengthBefore) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await fs.writeFile(dataFile, JSON.stringify(videos, null, 2), "utf-8");
  return NextResponse.json({ success: true });
}
