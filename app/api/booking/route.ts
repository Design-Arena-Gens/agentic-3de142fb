import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // In a real app, save to database or send email.
  // For demo, return success with echo.
  return NextResponse.json({ ok: true, received: data }, { status: 200 });
}
