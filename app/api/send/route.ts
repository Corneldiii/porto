import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    replyTo : body.from,
    to: "aldianocta178@gmail.com",
    subject: body.subject,
    html: body.message,
  });

  return NextResponse.json({ success: true });
}
