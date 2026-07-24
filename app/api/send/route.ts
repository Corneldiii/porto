import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server not configured for email" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { from, subject, message } = body;

    if (!from || !message) {
      return NextResponse.json({ error: "Email dan pesan required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      replyTo: from,
      to: "aldianocta178@gmail.com",
      subject: subject || `Portfolio Contact from ${from}`,
      html: `<p><strong>From:</strong> ${from}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Gagal mengirim pesan" }, { status: 500 });
  }
}
