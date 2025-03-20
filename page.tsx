// app/page.tsx
import Navbar from "@/app/(website)/components/Navbar"; // Adjust the import path based on your structure
import Footer from "@/app/(website)/components/Footer"; // Adjust the import path based on your structure

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Flex container to manage layout */}
      <Navbar /> {/* Including the Navbar at the top */}
      <main className="flex-grow mt-16">
        {" "}
        {/* Added margin-top to create space below the Navbar */}
        <h1 className="text-3xl font-bold text-center mt-10">
          Welcome to the Home Page!
        </h1>
        <p className="text-lg text-center mt-4">
          This is the default landing page for your site.
        </p>
        {/* Add more content here as needed */}
      </main>
      <Footer /> {/* Including the Footer at the bottom */}
    </div>
  );
}
