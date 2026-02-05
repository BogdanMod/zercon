import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  console.log("[lead]", {
    name: payload?.name,
    contact: payload?.contact,
    message: payload?.message,
    consent: payload?.consent,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
