import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of public routes that don't require authentication
const publicRoutes = [
  "/auth/login",
  "/auth/signup",
  "/auth/forget-password",
  "/auth/resetpassword",
  "/auth/otpverify",
];

// List of protected routes that require authentication
const protectedRoutes = [
  "/administrator/dashboard",
  "/warden/dashboard",
  "/staff/dashboard",
  "/student/dashboard",
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const authToken = request.cookies.get("authentication")?.value || ""; // Safely get the token value
  const role = request.cookies.get("role")?.value?.toLowerCase() || ""; // Normalize to lowercase

  console.log("Current Pathname:", pathname);
  console.log("Authentication Token:", authToken);
  console.log("User Role:", role);

  // Handle unauthenticated access to protected routes
  if (protectedRoutes.includes(pathname) && !authToken) {
    console.warn("Unauthenticated access attempt. Redirecting to login.");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Validate role before redirecting authenticated users
  const validRoles = ["administrator", "warden", "staff", "student"];
  if (authToken && !validRoles.includes(role)) {
    console.warn("Invalid role detected, clearing cookies.");
    const response = NextResponse.redirect(new URL("/error", request.url));

    response.cookies.delete("authentication");
    response.cookies.delete("role");

    return response;
  }

  // Redirect authenticated users from public routes to their dashboard
  if (publicRoutes.includes(pathname) && authToken) {
    const dashboardUrl = `/${role}/dashboard`;

    // Prevent infinite redirect loop
    if (pathname.startsWith(dashboardUrl)) {
      return NextResponse.next();
    }

    console.log("Redirecting authenticated user to:", dashboardUrl);
    return NextResponse.redirect(new URL(dashboardUrl, request.url));
  }

  return NextResponse.next();
}

// Middleware configuration to target specific routes
export const config = {
  matcher: [
    "/administrator/dashboard",
    "/warden/dashboard",
    "/staff/dashboard",
    "/student/dashboard",
    "/auth/:path*", // Handle all auth routes
    "/dashboard/:path*",
  ],
};
