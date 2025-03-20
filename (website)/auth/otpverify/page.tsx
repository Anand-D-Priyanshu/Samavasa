"use client";
import { useState } from "react";
import axios from "axios";

export default function OTPVerificationPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [message, setMessage] = useState("");

  // Send OTP
  const handleSendOTP = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("/api/otp", { email });
      console.log(response.data); // Log the successful response
      setIsOTPSent(true);
      setMessage("OTP has been sent to your email.");
    } catch (error: any) {
      console.error(
        "Error sending OTP:",
        error.response?.data || error.message,
      );
      setMessage("Error sending OTP. Please try again.");
    }
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("/api/otp", { email, otp });
      console.log(response.data); // Log the successful response
      setMessage("OTP verified successfully!");
    } catch (error: any) {
      console.error(
        "Error verifying OTP:",
        error.response?.data || error.message,
      );
      setMessage("Incorrect or expired OTP. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>

      {!isOTPSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded p-2 mb-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSendOTP}
            className="bg-blue-500 text-white p-2 rounded mt-2"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter the OTP"
            className="border rounded p-2 mb-2 w-full"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            onClick={handleVerifyOTP}
            className="bg-green-500 text-white p-2 rounded mt-2"
          >
            Verify OTP
          </button>
        </>
      )}

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
