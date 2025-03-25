"use client";

import Link from "next/link";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go Back Home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600"
          >
            Contact Support <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
