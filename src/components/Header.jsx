import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <section className="ml-[240px]"> {/* Adjust the margin to the width of the sidebar */}
      <div className="p-3 flex items-center h-20 bg-slate-50 opacity-100">
        {/* Logo */}
        <img
          src="Tanutra_Mobile_Logo.avif"
          className="w-36 h-[60px] ml-5 mt-3 cursor-pointer"  // Logo moved 20px to the right
          alt="logo"
        />

        {/* Welcome Text (hidden on smaller screens) */}
        <div className="lg:ml-12 md:ml-8 sm:ml-5 sm:items-center hidden sm:block">
          <p className="font-semibold sm:ml-1 text-lg opacity-80">
            Welcome Back,
          </p>
          
          <p className="text-xl font-bold text-center opacity-75">
             Tanutra
          </p>
        </div>

        {/* Search Box */}
        <div className="lg:ml-12 md:ml-8 sm:ml-4 flex items-center md:w-[320px] sm:w-[185px] justify-between flex-1 sm:mr-8">
          <input
            className="lg:w-96 h-11 flex border font-normal text-md rounded-md bg-white text-black pl-4"
            type="search"
            placeholder="Find the best products"
          />
        </div>

        {/* Signup and Login Buttons */}
        <div className="lg:ml-5 flex items-center gap-4 md:ml-2 sm:ml-2 mr-5">
          <button
            className="w-20 h-8 bg-fuchsia-800 cursor-pointer border text-white font-semibold rounded-md text-md"
            type="button"
            onClick={() => navigate("/Signup")}
          >
            Signup
          </button>
          {/* <p className="text-fuchsia-800 sm:hidden">|</p> */}

          <button
            className="w-20 h-8 bg-fuchsia-800 cursor-pointer text-white font-semibold rounded-md text-md"
            type="button"
            onClick={() => navigate("/Login")}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

