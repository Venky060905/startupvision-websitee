import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Buffer } from "buffer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const fullName = form.get("fullName") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const position = form.get("position") as string;
    const coverLetterMessage = form.get("coverLetterMessage") as string;

    const resume = form.get("resume") as File | null;
    const coverLetter = form.get("coverLetterFile") as File | null;

    console.log("FILES RECEIVED:", {
      resume: resume?.name || null,
      coverLetter: coverLetter?.name || null,
    });

    console.log("FIELDS RECEIVED:", {
      fullName, email, phone, position, coverLetterMessage
    });

    async function fileToAttachment(file: File | null) {
      if (!file) return null;
      return {
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer())
      };
    }

    const attachments = [];
    const resumeAttachment = await fileToAttachment(resume);
    const coverAttachment = await fileToAttachment(coverLetter);
    if (resumeAttachment) attachments.push(resumeAttachment);
    if (coverAttachment) attachments.push(coverAttachment);

    // FIXED TRANSPORTER
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"StartupVision Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Application – ${position}`,
      text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Position: ${position}

Cover Letter:
${coverLetterMessage}
      `,
      attachments,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("ERROR SENDING EMAIL:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
