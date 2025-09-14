import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative my-20 mx-4 md:mx-10 overflow-hidden rounded-3xl shadow-2xl backdrop-blur-md bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400">
      <div className="flex flex-col md:flex-row items-center px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Left Section */}
        <div className="flex-1 py-12 md:py-20 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug drop-shadow-md">
            Book Appointment
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-indigo-100 font-medium">
            With 100+ trusted doctors
          </p>

          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="mt-8 px-8 py-3 rounded-full bg-white text-indigo-600 text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Create Account
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-[45%] lg:w-[40%] flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={assets.appointment_img}
            alt="Doctor"
            className="w-[260px] md:w-[320px] lg:w-[360px] object-contain drop-shadow-xl animate-float"
          />
        </div>
      </div>

      {/* Soft overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none rounded-3xl"></div>
    </div>
  );
};

export default Banner;
