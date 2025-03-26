"use client"
import Navbar from "@/app/(website)/components/Navbar";
import Footer from "@/app/(website)/components/Footer";
import React from "react";
import ImageSlider from "../public/assets/ImageSlide";
import StepsSection from "../public/assets/step-slide-page-4";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      <Navbar />
      <main className="flex-grow mt-16">
        {" "}

        {/* page1 */}
        <section className="lg:h-[80vh] h-screen w-full flex pb-64 lg:pb-0 lg:flex-row flex-col lg:px-36 lg:justify-between justify-center items-center">
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
        </section>
        <style>
          {`
          .outline-text {
            -webkit-text-stroke: 2px black;
            color: transparent;
          }
        `}
        </style>

        {/* page2 */}

        <section className="lg:h-[70vh] lg:mt-0 -mt-44 lg:px-0 px-12 lg:border-2 rounded-3xl shadow-[#afd4e0] lg:shadow-lg  lg:mb-14 border-[#c3dbe2] lg:hover:scale-105 h-full lg:flex justify-center items-center lg:mx-32">
          <div className="lg:w-[40%] lg:px-4">
            <p className=" lg:block hidden text-5xl text-gray-700 font-semibold">
              "Smart & Efficient Hostel Management"
            </p>
            <p className="lg:hidden block mb-8 text-xl text-center text-gray-700 font-bold">
              "Making Hostel Management
              Easy And Efficient"
            </p>
            <p className="tracking-widest lg:text-left text-center lg:pr-20 text-gray-800 lg:mt-5">
              HMS is a dedicated platform designed to simplify hostel management for administrators
              and enhance the living experience for residents. Whether managing a small or a large
              complex, we provide a seamless solution tailored to your needs.
            </p>
            <p className="tracking-widest lg:text-left text-center mt-5 lg:pr-20 text-gray-800 lg:mt-3">
              Empowering hostel owners and residents by simplifying management and creating
              connected, efficient, and enjoyable living spaces worldwide.
            </p>
          </div>

          <div className="lg:w-[40%] lg:my-0 my-16 shadow-[#b2e3f3] shadow-md rounded-2xl ">
            <ImageSlider />
          </div>
        </section>

        {/* page3 */}
        <section className="flex flex-col justify-center -mt-24 lg:mt-0 items-center w-full h-screen lg:h-[75vh] px-4 sm:px-6 md:px-8">

          <div className="w-full lg:px-28  text-center py-12">
            <h2 className="lg:text-6xl md:text-6xl text-2xl  tracking-wider font-semibold text-gray-900">"Who We Are For"</h2>
            <p className="lg:mt-6 lg:tracking-widest lg:px-14 px-10 pt-4 lg:pt-0 lg:text-lg  font-semibold text-gray-600">
              "At Hostebees, we understand that our platform serves a diverse community with unique needs and interests."
              Our mission is to cater to the following groups:
            </p>
          </div>


          {/* need some change    . other tab data are hidden  */}

          <div>
            <div className="mt-8 lg:mx-0 mx-5 shadow-b-2xl lg:h-[48vh] overflow-hidden">
              <div className="flex w-full lg:w-[75vh] rounded-t-2xl">
                <button
                  // onClick={() => showTab('admin')}   optimize this for click and show detail
                  id="tab-admin" className="tab-btn w-full sm:w-1/3 py-3 font-semibold text-black">ADMIN</button>
                <button
                  // onClick={() => showTab('warden')} 
                  id="tab-warden" className="tab-btn w-full sm:w-1/3 py-3 text-white bg-gray-400 font-semibold ">WARDEN</button>
                <button
                  // onClick={() => showTab('student')} 
                  id="tab-student" className="tab-btn lg:rounded-tr-2xl w-full sm:w-1/3 py-3 font-semibold text-white bg-gray-700">STUDENT</button>
              </div>

              <div className="p-6 text-left h-full rounded-2xl bg-[#d7f4ff]">
                <div id="content-admin" className="tab-content block">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border-r-0 sm:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">User Management</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Admins oversee user accounts, handling creation, modification, and deactivation.</p>
                      <p className="mt-1 text-gray-700 text-sm">• They manage passwords and user permissions.</p>
                    </div>
                    <div className="border-r-0 lg:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Data Oversight</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Admins analyze hostel data, gaining insights into occupancy rates, resource utilization, and system performance.</p>
                    </div>
                    <div className="border-r-0 sm:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Financial Management</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Admins manage hostel finances, approving budget requests and tracking expenses efficiently.</p>
                    </div>
                    <div className="px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">System Configuration</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Admins configure system settings, adapting to room allocation rules and meal plans.</p>
                    </div>
                  </div>
                </div>

                <div id="content-warden" className="tab-content hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border-r-0 sm:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Hostel Supervision</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Wardens oversee daily hostel operations, ensuring compliance with rules.</p>
                    </div>
                    <div className="border-r-0 lg:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Student Welfare</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Wardens address student concerns, ensuring a comfortable living environment.</p>
                    </div>
                    <div className="border-r-0 sm:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Disciplinary Actions</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Wardens enforce rules and take necessary disciplinary actions.</p>
                    </div>
                    <div className="px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Safety Regulations</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Wardens ensure safety measures are in place for all students.</p>
                    </div>
                  </div>
                </div>

                <div id="content-student" className="tab-content hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border-r-0 sm:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Room Allocation</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Students can request and manage their room allocations.</p>
                    </div>
                    <div className="border-r-0 lg:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Facility Usage</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Students access hostel facilities and common areas efficiently.</p>
                    </div>
                    <div className="border-r-0 sm:border-r-2 px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Complaint Resolution</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Students can file complaints and track resolutions.</p>
                    </div>
                    <div className="px-3 font-semibold">
                      <h3 className="text-teal-500 font-semibold text-center">Meal Plan</h3>
                      <p className="mt-2 text-gray-700 text-sm">• Students can customize meal plans as per their dietary needs.</p>
                      <p className="mt-1 text-gray-700 text-sm">• More point on student page</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* page4 */}

        <section className=" lg:h-screen w-full flex py-8 md:-mt-44 lg:mt-0 md:py-0 lg:py-12 lg:px-6 md:mb-10 lg:mb-0 ">
          <div className="lg:max-w-6xl flex flex-col mx-auto lg:grid grid-cols-2 items-center  lg:gap-24">

            <div className="text-left">
              <h2 className="lg:text-6xl text-2xl lg:pb-0 pb-8 lg:pr-10  font-semibold text-gray-600">
                "Get Started in Just a Few Steps"
              </h2>
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQGIyRWgrwKgkQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706548120351?e=2147483647&v=beta&t=gTyqp3Q7ZJyR8S-TflUvekb4mjiSdYpMqm9OoZtbWRI"
                alt="picture"
                className="-rotate-45 hidden lg:block mix-blend-multipl w-auto lg:w-96 lg:-mb-32 lg:mt-20"
              />
            </div>
            <div className="lg:hidden w-auto">
              <StepsSection />
            </div>

            <div className="space-y-4 lg:mt-20 lg:block hidden">

              <div className="lg:flex items-center space-x-4">
                <div className="w-56 h-40 bg-gray-300 rounded-lg">
                  <img src="" alt="img" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">STEP 1</h4>
                  <p className="text-lg font-medium text-gray-500">Setup Account</p>
                </div>
              </div>


              <div className="lg:flex lg:-ml-60 items-center space-x-4">
                <div className="w-56 h-40 bg-gray-300 rounded-lg">
                  <img src="" alt="img" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">STEP 2</h4>
                  <p className="text-lg font-medium text-gray-500">
                    List Hostel / Enrollee in hostel
                  </p>
                </div>
              </div>

              <div className="lg:flex items-center space-x-4">
                <div className="w-56 h-40 bg-gray-300 rounded-lg">
                  <img src="" alt="img" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">STEP 3</h4>
                  <p className="text-lg font-medium text-gray-500">
                    Setup Profile and Enjoy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>







        {/* page 5 */}
        <section className="pb-10">
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold lg:px-0 px-4 text-gray-800">"Voices of Success: What Our Users Say"</h2>
            <p className="text-gray-500 tracking-wide font-semibold lg:text-2xl lg:px-48 px-6 mt-8 lg:mt-2">"Discover the Impact of Hostelbees through Stories of Growth, Inspiration, and Success Shared by Our Community."</p>
          </section>
          <div className="flex flex-wrap justify-center gap-6 px-6">
            <div className="bg-[#eaf4f8] shadow-md border-2 border-white w-full rounded-2xl p-6 text-gray-800 lg:w-1/5 lg:h-[50vh]">
              <div className="flex items-center lg:-m-6 space-x-4 mb-4">
                <div className="lg:w-full w-14 h-14 lg:h-[20vh] lg:rounded-2xl rounded-full lg:border-0 border-4 border-white bg-[#c5dfe9] "></div>
                <div className="block lg:hidden">
                  <h4 className="font-bold">P Anand</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm lg:pl-0 lg:mt-10 pl-16">The Hostel Management System app has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface and quick response time make it a must-have for all students.</p>
              <div className="lg:block hidden">
                <h4 className="font-bold">P Anand</h4>
                <p className="text-sm text-gray-500">HMS user</p>
                <p className=" text-gray-500">★★★★★</p>
              </div>
            </div>


            <div className="bg-[#eaf4f8] lg:h-[30vh] lg:flex shadow-md border-2 border-white rounded-2xl p-6 text-gray-800 w-full lg:w-1/3 ">
              <div className="items-center flex lg:block space-x-4 mb-4">
                <div className="lg:w-[15vw] w-14 h-14 lg:h-[30vh] lg:-m-6 bg-[#c5dfe9]  lg:border-0 border-4 border-white rounded-full lg:rounded-2xl"></div>
                <div className="pt-2 block lg:hidden">
                  <h4 className="font-bold">Anand</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <div className="lg:pl-12">
                <p className="text-sm lg:pl-0 pl-16">The Hostel app has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface and quick response time make it a must-have for all students.</p>
                <div className="pt-2 lg:block hidden">
                  <h4 className="font-bold">Anand</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
            </div>

            <div className="bg-[#ddecf3] shadow-md border-2 border-white rounded-2xl w-full p-6 text-gray-800 lg:h-[30vh] lg:w-[21vw] ">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 border-white border-4 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm">The Hostel Management System app has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface.</p>

            </div>

            <div className="bg-[#ddecf3] shadow-md border-2 border-white rounded-2xl lg:max-w-sm  w-full p-6 text-gray-800 lg:w-[20vw]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="lg:w-12 w-14 h-14 lg:h-12 border-white border-4 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm">App has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface and quick response time make it a must-have for all students.</p>

            </div>
            <div className="bg-[#ddecf3] shadow-md border-2 border-white rounded-2xl lg:max-w-sm w-full p-6 text-gray-800 lg:h-48 lg:-mt-40 lg:w-[30vw]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="lg:w-12 lg:h-12 h-14 w-14 bg-gray-300 border-white border-4 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm">App has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface and quick response time make it a must-have for all students.</p>

            </div>
            <div className="bg-[#ddecf3] lg:-mt-40 lg:h-56 shadow-md border-2 border-white w-full lg:max-w-sm rounded-2xl p-6 text-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gray-300 border-white border-4 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm">App has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface and quick response time make it a must-have for all students.</p>
            </div>

            <div className="bg-[#ddecf3] lg:-mt-[27vh] lg:h-48 shadow-md border-2 border-white rounded-2xl p-5 text-gray-800 w-full lg:max-w-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gray-300 border-white border-4 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm">App has significantly improved our hostel life by streamlining daily processes. Its user-friendly interface and quick response time make it a must-have for all students.</p>
            </div>

            <div className="bg-[#ddecf3] lg:-mt-[22vh] lg:h-40 shadow-md border-2 border-white rounded-2xl p-4 lg:-mr-80 w-full text-gray-800 lg:max-w-sm lg:w-[30vw]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gray-300 border-white border-4 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-sm text-gray-500">HMS user</p>
                  <p className=" text-gray-500">★★★★★</p>
                </div>
              </div>
              <p className="text-sm">App has significantly improved our hostel life by streamlining daily processes. </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
