// /app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ msg: "Logout successful" });

  // Remove the authentication token from cookies
  response.cookies.set("authentication", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: -1, // Set the cookie to expire immediately
  });

  // Remove the role cookie
  response.cookies.set("role", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: -1, // Set the cookie to expire immediately
  });

  return response;
}
