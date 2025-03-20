"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = useSearchParams(); // To get token from URL
  const router = useRouter();
  const token = searchParams.get("token"); // Extract the token from the query params

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "confirmPassword") setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`/api/resetpassword`, {
        token,
        password,
      });

      toast.success(response.data.message);
      router.push("/auth/login");
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "An error occurred";
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
            Update Your Password
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangeHandler}
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="confirmPassword"
              className="leading-7 text-sm text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
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
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdatePassword;
