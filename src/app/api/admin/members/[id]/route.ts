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

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const items = read();
    const idx = items.findIndex((x: any) => String(x.id) === String(id));
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    items[idx] = { ...items[idx], ...body, id };
    write(items);
    return NextResponse.json(items[idx]);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    let items = read();
    items = items.filter((x: any) => String(x.id) !== String(id));
    write(items);
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
