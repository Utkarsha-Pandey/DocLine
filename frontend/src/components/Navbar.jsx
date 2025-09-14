import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={assets.logo}
            alt="DocLine"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold text-slate-800">DocLine</span>
        </div>

        {/* NavLinks - Desktop */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-1 border-b-2 border-indigo-500 text-indigo-600"
                : "py-1 hover:text-indigo-600 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "py-1 border-b-2 border-indigo-500 text-indigo-600"
                : "py-1 hover:text-indigo-600 transition-colors"
            }
          >
            All Doctors
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "py-1 border-b-2 border-indigo-500 text-indigo-600"
                : "py-1 hover:text-indigo-600 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "py-1 border-b-2 border-indigo-500 text-indigo-600"
                : "py-1 hover:text-indigo-600 transition-colors"
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
                src={userData.image}
                alt="profile"
              />
              <img
                className="w-2.5"
                src={assets.dropdown_icon}
                alt="dropdown"
              />
              <div className="absolute top-0 right-0 pt-14 text-sm font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-white/90 backdrop-blur-md shadow-xl rounded-xl flex flex-col gap-3 p-4">
                  <p
                    onClick={() => navigate("my-profile")}
                    className="hover:text-indigo-600 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("my-appointments")}
                    className="hover:text-indigo-600 cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={logout}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block px-5 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Create Account
            </button>
          )}

          {/* Mobile menu icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="w-9 h-9" />
            <span className="text-lg font-semibold text-slate-800">
              DocLine
            </span>
          </div>
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="close"
            className="w-6 cursor-pointer"
          />
        </div>

        <ul className="flex flex-col items-start gap-5 mt-6 px-6 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            All Doctors
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            Contact Us
          </NavLink>
        </ul>

        {!token && (
          <button
            onClick={() => {
              setShowMenu(false);
              navigate("/login");
            }}
            className="mx-6 mt-6 w-[85%] px-5 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Create Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
