import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'homepage.json');

export async function GET() {
  try {
    if (!fs.existsSync(file)) return NextResponse.json({});
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    fs.writeFileSync(file, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true, data: body });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
