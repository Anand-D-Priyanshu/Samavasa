"use server";

import { UserModel } from "@/lib/models/User.models";
import { NextResponse } from "next/server";
import { GenerateResetToken } from "@/lib/service/Token.service"; // JWT for password reset
import { sendEmail } from "@/lib/service/Email.Service"; // Reuse the sendEmail function from service
import { ConnectDB } from "@/lib/config/db.config";

ConnectDB();

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json(); // Extract email from request body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 },
      );
    }

    // Generate a password reset token
    const resetToken = await GenerateResetToken(user.id.toString());

    // Send the password reset email
    await sendEmail(user.name, email, resetToken); // Assuming the user model contains 'name'

    return NextResponse.json(
      { message: "Password reset email sent" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error in POST /api/forget-password:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
