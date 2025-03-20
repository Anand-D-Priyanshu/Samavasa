// app/page.tsx
import Navbar from "@/app/(website)/components/Navbar";
import Footer from "@/app/(website)/components/Footer"; 

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      <Navbar /> 
      <main className="flex-grow mt-16">
        {" "}
        
        <h1 className="text-3xl font-bold text-center mt-10">
          Welcome to the Home Page!
        </h1>
        <p className="text-lg text-center mt-4">
          This is the default landing page for your site.
        </p>
      </main>
      <Footer /> 
    </div>
  );
}
