import React from "react";
import Signup from "../Signup";
import Login from "../Login";
import logo from "../../assets/logo1.png";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../Homepage";
import { ForgotPassword } from "../ForgotPassword";
import Dashboard from "../Dashboard";

function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center w-full p-4 bg-gray-800 shadow-md">
        <div className="logo w-28">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>
        <ul className="flex space-x-8 text-gray-200 text-base">
          <li>
            <Link
              to="/"
              className=" hover:text-white transition-colors duration-200"
            >
              Internships
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="hover:text-white transition-colors duration-200"
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:text-white transition-colors duration-200"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Navbar;
