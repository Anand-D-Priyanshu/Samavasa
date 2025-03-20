"use server";
import { ConnectDB } from "@/lib/config/db.config";
import { UserModel } from "@/lib/models/User.models";
import { NextResponse } from "next/server";
import { VerifyTokenReset } from "@/lib/service/Token.service";

ConnectDB();

export const POST = async (request: Request) => {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 },
      );
    }

    // Verify the token
    const userId = await VerifyTokenReset(token);
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 },
      );
    }

    // Find the user by ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Log to confirm user retrieval
    console.log("User found:", user.email);

    // Update and save the new password (no need to hash it manually, will be done in pre-save hook)
    user.password = password;
    await user.save();

    // Log to confirm password update
    console.log("Password updated successfully for:", user.email);

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
