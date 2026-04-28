import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type BookRequest = {
  name?: string;
  email?: string;
  phone?: string;
  concern?: string;
  preferredTime?: string;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookRequest;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const concern = (body.concern || "General Query").trim();
    const preferredTime = (body.preferredTime || "Not specified").trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.BOOKING_TO_EMAIL;
    const fromEmail = process.env.BOOKING_FROM_EMAIL || user;

    if (!host || !user || !pass || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          message:
            "Email service is not configured. Please set SMTP_HOST, SMTP_USER, SMTP_PASS, BOOKING_TO_EMAIL, and BOOKING_FROM_EMAIL.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `New Booking Request - ${name}`,
      replyTo: email,
      text: [
        "New booking request received",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Concern: ${concern}`,
        `Preferred Time: ${preferredTime}`,
      ].join("\n"),
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Concern:</strong> ${escapeHtml(concern)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>
      `,
    });

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: "Booking Request Received - Burlington Clinic",
      replyTo: toEmail,
      text: [
        `Hi ${name},`,
        "",
        "Thank you for your booking request. We have received your details and our team will contact you shortly.",
        "",
        "Submitted details:",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Concern: ${concern}`,
        `Preferred Time: ${preferredTime}`,
        "",
        "If you need immediate assistance, please call or WhatsApp us.",
      ].join("\n"),
      html: `
        <h2>Booking Request Received</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thank you for your booking request. We have received your details and our team will contact you shortly.</p>
        <p><strong>Submitted details:</strong></p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Concern:</strong> ${escapeHtml(concern)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>
      `,
    });

    return NextResponse.json({
      message: "Thank you. Your callback request has been submitted.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to submit request right now. Please try again." },
      { status: 500 }
    );
  }
}
