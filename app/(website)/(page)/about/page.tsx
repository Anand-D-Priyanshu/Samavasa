"use client";
import React from "react";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "CEO & Founder",
      image: "/images/john-doe.jpg",
      bio: "John is the visionary behind our company, dedicated to creating innovative solutions and leading our team to success.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-gray-700 mb-12 text-center">
        We are a team of passionate individuals dedicated to delivering the best
        products and services for our customers. Our mission is to innovate and
        lead in our industry while fostering a collaborative and inclusive
        environment.
      </p>

      <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={member.image}
              alt={member.name}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          To empower individuals and businesses through innovative solutions,
          exceptional service, and a commitment to excellence.
        </p>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700">
          To be a leading force in our industry, recognized for our dedication
          to quality and our impact on the communities we serve.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
