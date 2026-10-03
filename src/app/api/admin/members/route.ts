import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'members.json');

function read() {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function write(data: any) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  return NextResponse.json(read());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = read();
    const newItem = {
      ...body,
      id: body.id || String(Date.now()),
      verified: body.verified !== undefined ? body.verified : true,
      avatarColor: body.avatarColor || 'from-blue-600 to-sky-500'
    };
    items.unshift(newItem);
    write(items);
    return NextResponse.json(newItem, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
