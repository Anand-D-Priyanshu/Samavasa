"use server";
import { ConnectDB } from "@/lib/config/db.config";
import { UserModel } from "@/lib/models/User.models";
import { NextResponse } from "next/server";

ConnectDB();

export const POST = async (request: Request) => {
  console.log("Signup API called"); // Log the start
  try {
    const { name, email, password, role } = await request.json();
    console.log("Received user data:", { name, email, password, role });

    // Validate input: Check if any required fields are missing
    if (!email || !password || !name || !role) {
      console.log("Missing fields:", { email, password, name, role });
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Check if the user already exists
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      console.log("User already exists:", email);
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    // Create a new user instance
    const newUser = new UserModel({ name, email, password, role });
    console.log("Saving new user:", newUser);

    // Save the new user to the database
    await newUser.save();

    console.log("User registered successfully");
    return NextResponse.json(
      { msg: "User registered successfully" },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Error in signup process:", error.message); // Log the error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
