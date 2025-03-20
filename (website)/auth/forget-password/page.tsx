"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/forget-password", { email });
      toast.success(response.data.message);
      setEmail(""); // Reset email field after success
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <form
          onSubmit={onSubmitHandler}
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Forgot Password
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeHandler}
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <p className="text-xs text-gray-500 mt-3">
            Remember your password?{" "}
            <a href="/auth/login" className="text-purple-500 underline">
              Log In
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
