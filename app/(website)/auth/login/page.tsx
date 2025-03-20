"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/website/auth/login", state);
      const data = response.data;

      if (data.msg) {
        toast.success(data.msg);

        const redirectUrl = data.redirectTo || "/dashboard";
        router.push(redirectUrl);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={onSubmitHandler}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-gray-900 text-xl font-semibold mb-5 text-center">
            Sign In
          </h2>
          <div className="mb-4 relative group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={onChangeHandler}
                  className="ml-2 w-full border-none focus:ring-0 focus:outline-none"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Enter your Email
              </div>
            </div>
          </div>

          <div className="mb-4 relative group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={onChangeHandler}
                  className="ml-2 w-full border-none focus:ring-0 focus:outline-none"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Use at least 8 characters
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forget-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative group">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4"></span>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Login;
