import React from "react";
import {
  FaBriefcase,
  FaPlus,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../../assets/black-logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const EmployerNavbar = () => {
  const navigate = useNavigate();

  const handleAddInternship = () => {
    navigate("/employer/create");
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="logo w-28">
        <NavLink to="/employer/dashboard" className="w-full h-auto">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </NavLink>
      </div>
      <nav className="flex space-x-6">
        <NavLink
          to="/employer/view"
          className="flex items-center text-gray-600 hover:text-primary"
        >
          <FaBriefcase className="mr-2" />
          View Internships
        </NavLink>
        <button
          className="flex items-center text-gray-600 hover:text-primary"
          onClick={handleAddInternship}
        >
          <FaPlus className="mr-2" />
          Create Internship
        </button>
        <NavLink
          to="/employer/profile"
          className="flex items-center text-gray-600 hover:text-primary"
        >
          <FaUser className="mr-2" />
          Profile
        </NavLink>
        <NavLink
          to="/employer/settings"
          className="flex items-center text-gray-600 hover:text-primary"
        >
          <FaCog className="mr-2" />
          Settings
        </NavLink>
        <NavLink
          to="/login"
          className="flex items-center text-gray-600 hover:text-primary"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </NavLink>
      </nav>
    </header>
  );
};

export default EmployerNavbar;
