"use client"; // This is a client component
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons

function Signup() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student", // Default role
  });

  const [loading, setLoading] = useState(false);

  // Handler for input changes
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // Form submission handler
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Validation checks
      if (
        !state.name ||
        !state.email ||
        !state.password ||
        !state.confirmPassword
      ) {
        toast.error("Please fill all fields");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(state.email)) {
        toast.error("Invalid email format");
        return;
      }

      if (state.password !== state.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      if (state.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
      }

      // Sending form data to the backend
      const response = await axios.post("/api/signup", {
        name: state.name,
        email: state.email,
        password: state.password,
        role: state.role, // Send the selected role
      });

      const data = response.data;

      toast.success("Registered Successfully: " + data.msg);
      setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Student",
      }); // Reset form state
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error || "An error occurred. Please try again.",
      );
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
        closeOnClick
        pauseOnHover
        draggable
      />
      <div className="flex flex-col mt-0 justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Create an Account
          </h2>

          <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              {/* Full Name */}
              <div className="relative">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={state.name}
                  onChange={onChangeHandler}
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Full Name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={onChangeHandler}
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Email address"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="sr-only block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={onChangeHandler}
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Password"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={state.confirmPassword}
                  onChange={onChangeHandler}
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Confirm Password"
                />
              </div>

              {/* Role Selection */}
              <div className="relative">
                <label
                  htmlFor="role"
                  className=" sr-only block text-sm font-medium text-gray-700"
                >
                  Select Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={state.role}
                  onChange={onChangeHandler}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="Administrator">Administrator</option>
                  <option value="Warden">Warden</option>
                  <option value="Staff">Staff</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md font-semibold text-white ${loading ? "bg-gray-400" : "bg-black hover:bg-gray-900"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <span className="flex items-center">
            <span className="h-px flex-1 bg-black"></span>
            <span className="shrink-0 px-6">or</span>
            <span className="h-px flex-1 bg-black"></span>
          </span>

          <div className="flex gap-4 mt-4">
            <button className="flex-1 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 transition">
              <svg
                width="20"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"
                  fill="#FBBB00"
                ></path>
                <path
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                  fill="#518EF8"
                ></path>
                <path
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.532,77.037-20.691L416.253,455.624z"
                  fill="#28B446"
                ></path>
                <path
                  d="M419.404,56.776l-82.945,67.895c-23.343-13.05-50.532-20.54-79.459-20.54c-66.058,0-122.286,42.153-143.61,100.668L30.624,138.252h-0.014C73.475,57.803,158.849,0,256,0C318.115,0,375.068,22.126,419.404,56.776z"
                  fill="#F14336"
                ></path>
              </svg>
              Google
            </button>

            <button className="flex-1 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
              >
                <path
                  d="M455.27,32H56.73A56.74,56.74,0,0,0,0,88.73V423.27A56.74,56.74,0,0,0,56.73,480H256V318H199.27V240H256V187.27C256,124.08,294.36,88,352.4,88A381.29,381.29,0,0,1,393.09,90v56H362.91c-28.91,0-34.91,13.73-34.91,34V240H392l-12,78H328V480h127.27A56.74,56.74,0,0,0,512,423.27V88.73A56.74,56.74,0,0,0,455.27,32Z"
                  fill="#3b5998"
                />
              </svg>
              Facebook
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-purple-600 hover:text-purple-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
