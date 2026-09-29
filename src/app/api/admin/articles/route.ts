import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "articles.json");

export async function GET(req: NextRequest) {
  const file = await fs.readFile(dataFile, "utf-8");
  const articles = JSON.parse(file);
  return NextResponse.json(articles);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const file = await fs.readFile(dataFile, "utf-8");
  const articles = JSON.parse(file);
  const newArticle = { id: Date.now().toString(), ...body };
  articles.push(newArticle);
  await fs.writeFile(dataFile, JSON.stringify(articles, null, 2), "utf-8");
  return NextResponse.json(newArticle, { status: 201 });
}
