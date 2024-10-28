import React from "react";
import {
  FaBriefcase,
  FaPlus,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const handleAddInternship = () => {
    navigate("/employer/create");
  };

  return (
    <div className="h-screen bg-gray-100">
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Welcome to Your Dashboard</h2>
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
            onClick={handleAddInternship}
          >
            Create New Internship
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Software Development Intern (Example)
            </h3>
            <p className="text-gray-600 mb-4">Location: Remote</p>
            <p className="text-gray-600 mb-4">Industry: Tech</p>
            <p className="text-gray-600 mb-4">Duration: 3 months</p>
            <button className="text-primary font-semibold">Edit</button>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={handleAddInternship}
          >
            <FaPlus className="text-primary text-3xl" />
            <span className="ml-2 text-primary font-semibold">
              Add Internship
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
