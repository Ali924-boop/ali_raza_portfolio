import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Display name + email
  replyTo: email, // yahan user ka email daal do
  to: process.env.EMAIL_TO,
  subject: `New Message from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
});


    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
