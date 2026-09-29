// @ts-ignore
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "pages.json");

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const body = await req.json();
  const file = await fs.readFile(dataFile, "utf-8");
  const pages = JSON.parse(file);
  const index = pages.findIndex((p: any) => p.slug === slug);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  pages[index] = { ...pages[index], ...body };
  await fs.writeFile(dataFile, JSON.stringify(pages, null, 2), "utf-8");
  return NextResponse.json(pages[index]);
}

export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const file = await fs.readFile(dataFile, "utf-8");
  let pages = JSON.parse(file);
  const lengthBefore = pages.length;
  pages = pages.filter((p: any) => p.slug !== slug);
  if (pages.length === lengthBefore) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await fs.writeFile(dataFile, JSON.stringify(pages, null, 2), "utf-8");
  return NextResponse.json({ success: true });
}
