"use server";

import { ConnectDB } from "@/lib/config/db.config";
import { UserModel, IUser } from "@/lib/models/User.models";
import { NextResponse } from "next/server";
import { GenerateToken } from "@/lib/service/Token.service";

// Connect to the database
ConnectDB();

export const POST = async (request: Request) => {
  console.log(`[${new Date().toISOString()}] Login API called`);

  try {
    const { email, password }: { email: string; password: string } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Find user with case-insensitive email match
    const existUser = await UserModel.findOne({ email }).collation({ locale: "en", strength: 2 }) as IUser | null;

    if (!existUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Secure password comparison
    let isMatch = false;
    try {
      isMatch = await existUser.comparePassword(password);
    } catch (err) {
      console.error("Error comparing password:", err);
      return NextResponse.json({ error: "An error occurred while verifying the password" }, { status: 500 });
    }

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Validate user role
    const role = existUser.role?.toLowerCase();
    const validRoles = ["administrator", "warden", "student"];
    if (!role || !validRoles.includes(role)) {
      return NextResponse.json({ error: "Invalid role or user data" }, { status: 400 });
    }

    // Generate authentication token
    const token = await GenerateToken(existUser._id.toString());

    console.log(`User authenticated. Role: ${role}`);

    // Create response with secure cookies
    const response = NextResponse.json({
      msg: "Login successful",
      redirectTo: `/${role}/dashboard`,
    });

    response.cookies.set("authentication", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 86400,
      sameSite: "strict",
    });

    response.cookies.set("role", role, {
      path: "/",
      maxAge: 86400,
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Unexpected error:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
