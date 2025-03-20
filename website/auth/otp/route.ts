// app/api/otp/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import Otp from "@/lib/models/otp"; // Ensure this path is correct
import { sendOTP } from "@/lib/service/Email.Service"; // Ensure this path is correct
import { ConnectDB } from "@/lib/config/db.config"; // Import the DB connection

export async function POST(request: Request) {
  // Connect to MongoDB
  await ConnectDB(); // Ensure the database connection is established

  const { email, otp } = await request.json();

  // Case 1: OTP Sending (When OTP is not provided)
  if (!otp) {
    const generatedOtp = crypto.randomInt(100000, 999999).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    try {
      // Store OTP in MongoDB (upsert to ensure the email gets associated with a new OTP)
      await Otp.findOneAndUpdate(
        { email },
        { otp: generatedOtp, expiry },
        { upsert: true, new: true },
      );

      // Send OTP email
      await sendOTP(email, generatedOtp);

      return NextResponse.json(
        { message: "OTP sent successfully" },
        { status: 200 },
      );
    } catch (error) {
      console.error("Error sending OTP:", error);
      return NextResponse.json(
        { message: "Error sending OTP" },
        { status: 500 },
      );
    }
  }

  // Case 2: OTP Verification (When OTP is provided)
  else {
    try {
      // Retrieve the OTP from MongoDB
      const storedOtp = await Otp.findOne({ email });

      if (!storedOtp) {
        return NextResponse.json(
          { message: "Invalid or expired OTP" },
          { status: 400 },
        );
      }

      // Check if OTP is expired
      if (new Date() > new Date(storedOtp.expiry)) {
        return NextResponse.json({ message: "OTP expired" }, { status: 400 });
      }

      // Verify OTP
      if (storedOtp.otp === otp) {
        // OTP verified, delete OTP from database
        await Otp.deleteOne({ email });
        return NextResponse.json(
          { message: "OTP verified successfully" },
          { status: 200 },
        );
      } else {
        return NextResponse.json({ message: "Incorrect OTP" }, { status: 400 });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return NextResponse.json(
        { message: "Error verifying OTP" },
        { status: 500 },
      );
    }
  }
}
