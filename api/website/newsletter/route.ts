// /app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { ConnectDB } from "@/lib/config/db.config";

// Define a Mongoose schema for the newsletter email
const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

// Handle POST request to save email
export async function POST(request: Request) {
  const { email } = await request.json();

  // Connect to the database
  await ConnectDB(); // This connects MongoDB

  // Check if email already exists
  const existingEmail = await Newsletter.findOne({ email });
  if (existingEmail) {
    return NextResponse.json(
      { message: "Email already subscribed." },
      { status: 400 },
    );
  }

  // Save email to the database
  const newSubscription = new Newsletter({ email });
  await newSubscription.save();

  return NextResponse.json({ message: "Successfully subscribed!" });
}
