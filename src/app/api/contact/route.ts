import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

// Sender must be on a Resend-verified domain. This project's Resend account
// must have `argarage.uk` verified as its (free-tier) domain. Override the
// full "Name <addr>" via RESEND_FROM if needed.
const FROM_ADDRESS =
  process.env.RESEND_FROM ?? `AR Garage Bookings <${siteConfig.email}>`;

type ContactPayload = {
  name?: string;
  phone?: string;
  reg?: string;
  service?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const reg = body.reg?.trim();
  const service = body.service?.trim() || "Not specified";
  const message = body.message?.trim() || "";

  if (!name || !phone || !reg) {
    return NextResponse.json(
      { error: "Name, phone and vehicle reg are required." },
      { status: 400 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Vehicle reg", reg.toUpperCase()],
    ["Service", service],
    ["Message", message || "—"],
  ];

  const html = `
    <div style="font-family: -apple-system, Segoe UI, sans-serif; color: #111;">
      <h2 style="margin: 0 0 16px;">New booking request</h2>
      <table style="border-collapse: collapse; font-size: 14px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 6px 16px 6px 0; font-weight: 600; vertical-align: top;">${label}</td>
            <td style="padding: 6px 0;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [siteConfig.email],
      subject: `Booking request — ${name} (${reg.toUpperCase()})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please call or WhatsApp us instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
