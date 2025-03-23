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
        <div className="lg:h-[85%] h-screen w-full flex pb-64 lg:pb-0 lg:flex-row flex-col lg:px-36 lg:justify-between justify-center items-center">
          <div className="block lg:hidden">
            <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-curve-screen-gaming-monitor-device-png-image_13358053.png"
              alt="Monitor" className="w-full max-w-md" />
          </div>
          <div className="lg:text-start flex flex-col justify-center items-center lg:block">
            <p className="lg:text-3xl lg:tracking-[4px] text-gray-700 font-medium uppercase hover:text-[#9ecfe0] transition-colors duration-200">Let's
              Simplify Hostel Management</p>
            <h1 className="lg:text-9xl text-6xl font-bold lg:font-extrabold lg:mt-2 mt-6">
              <span className="outline-text">TOGETHER</span>
            </h1>

            <p className="lg:mt-8 mt-6 tracking-wider lg:font-semibold lg:text-xl text-gray-600 text-lg leading-relaxed hover:text-[#9ecfe0] transition-colors duration-200">
              Streamline Tasks and Save</p>
            <p className="lg:mb-8 lg:tracking-wider lg:font-semibold lg:text-xl text-gray-600 text-lg leading-relaxed hover:text-[#9ecfe0] transition-colors duration-200">
              Time with Our User-friendly System</p>
            <button
              className="mt-6 bg-[#9ecfe0] hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl ease-in-out">
              Get Started
            </button>
          </div>
          <div className="lg:block hidden">
            <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-curve-screen-gaming-monitor-device-png-image_13358053.png"
              alt="Monitor" className="w-full max-w-md" />
          </div>
        </div>
        <style>
        {`
          .outline-text {
            -webkit-text-stroke: 2px black;
            color: transparent;
          }
        `}
      </style>
      </main>
      <Footer />
    </div>
  );
}
