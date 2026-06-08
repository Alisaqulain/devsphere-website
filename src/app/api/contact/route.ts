import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(10),
});

function getSmtpPass() {
  return (process.env.SMTP_PASS || "").replace(/\s+/g, "");
}

function getFromAddress() {
  const user = process.env.SMTP_USER;
  if (!user) return undefined;

  const from = process.env.SMTP_FROM?.trim();
  if (!from) return `"DevSphere Solutions" <${user}>`;

  // Gmail requires the authenticated account unless "Send mail as" alias is configured.
  const fromEmail = from.match(/<([^>]+)>/)?.[1] || from;
  if (fromEmail.toLowerCase() !== user.toLowerCase()) {
    return `"DevSphere Solutions" <${user}>`;
  }

  return from;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const contactEmail = process.env.CONTACT_EMAIL || "devsspheresolutions@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = getSmtpPass();

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        "[Contact API] SMTP not configured — lead logged only. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local (local) or hosting env vars (production)."
      );
      console.log("[Contact Lead]", { ...data, receivedAt: new Date().toISOString() });
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured on this server. Please contact us on WhatsApp or email directly.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      requireTLS: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.verify();

    const cc =
      smtpUser.toLowerCase() !== contactEmail.toLowerCase() ? smtpUser : undefined;

    const info = await transporter.sendMail({
      from: getFromAddress(),
      to: contactEmail,
      cc,
      replyTo: data.email,
      subject: `New Project Enquiry from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Project Type: ${data.projectType}
Budget: ${data.budget || "N/A"}

Message:
${data.message}
      `.trim(),
      html: `
        <h2>New Project Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log(
      "[Contact API] Email sent:",
      info.messageId,
      "→",
      contactEmail,
      cc ? `(cc: ${cc})` : ""
    );

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 });
    }

    const message = error instanceof Error ? error.message : "Unknown error";
    const isAuthError =
      message.includes("535") ||
      message.includes("BadCredentials") ||
      message.includes("EAUTH") ||
      message.includes("Invalid login");

    if (isAuthError) {
      console.error(
        "[Contact API] Gmail SMTP auth failed. Generate a new App Password for",
        process.env.SMTP_USER,
        "→ https://myaccount.google.com/apppasswords"
      );
    } else {
      console.error("[Contact API] Failed to send email:", message);
    }

    return NextResponse.json(
      {
        error: isAuthError
          ? "Email service is temporarily unavailable. Please WhatsApp us or email devsspheresolutions@gmail.com directly."
          : "Failed to send message. Please try WhatsApp or email us directly at devsspheresolutions@gmail.com",
      },
      { status: 500 }
    );
  }
}
