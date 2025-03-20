"use client";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-12 text-center">
        If you have any questions, feel free to reach out to us using the form
        below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring focus:ring-teal-200"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring focus:ring-teal-200"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring focus:ring-teal-200"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-500 transition"
        >
          Send Message
        </button>

        <p className="mt-4 text-center text-gray-600">{status}</p>
      </form>

      {/* Help Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="text-lg text-gray-700">
          If you need immediate assistance, please check our help center or
          contact our support team.
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="text-teal-600 hover:underline">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="text-teal-600 hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="mailto:support@example.com"
              className="text-teal-600 hover:underline"
            >
              Support Email: support@example.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
