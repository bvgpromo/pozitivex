// @ts-nocheck
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "articles.json");

export async function GET(req: NextRequest, context: any) {
  const params = await context.params;
  const id = params?.id;
  try {
    const file = await fs.readFile(dataFile, "utf-8");
    const articles = JSON.parse(file);
    const article = articles.find((a: any) => a.id === id);
    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: any) {
  const params = await context.params;
  const id = params?.id;

  const body = await req.json();
  const file = await fs.readFile(dataFile, "utf-8");
  const articles = JSON.parse(file);
  const index = articles.findIndex((a: any) => a.id === id);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  articles[index] = { ...articles[index], ...body };
  await fs.writeFile(dataFile, JSON.stringify(articles, null, 2), "utf-8");
  return NextResponse.json(articles[index]);
}

export async function DELETE(req: NextRequest, context: any) {
  const params = await context.params;
  const id = params?.id;

  const file = await fs.readFile(dataFile, "utf-8");
  let articles = JSON.parse(file);
  const lengthBefore = articles.length;
  articles = articles.filter((a: any) => a.id !== id);
  if (articles.length === lengthBefore) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await fs.writeFile(dataFile, JSON.stringify(articles, null, 2), "utf-8");
  return NextResponse.json({ success: true });
}
