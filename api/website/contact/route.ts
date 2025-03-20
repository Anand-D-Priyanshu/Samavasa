// app/api/contact/route.ts
import { NextResponse } from "next/server";

import Contact from "@/lib/models/contact_form"; // Import the Contact model
import nodemailer from "nodemailer";
import { ConnectDB } from "@/lib/config/db.config";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  await ConnectDB(); // Connect to MongoDB

  try {
    // Save contact data to the database
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Nodemailer configuration for sending email
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "llewellyn29@ethereal.email",
        pass: "Fu81ZRk8jd8Savxm45",
      },
    });

    const mailOptions = {
      from: email,
      to: "your-email@example.com", // Your email address
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent and data saved successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving data or sending email:", error);
    return NextResponse.json(
      { message: "Failed to save data or send email." },
      { status: 500 },
    );
  }
}
