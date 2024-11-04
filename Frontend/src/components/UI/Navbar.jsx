import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink from React Router v6
import logo from "../../assets/black-logo.png";
import { FaCircleUser } from "react-icons/fa6";
import useAuthContext from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthState({
      isLoggedIn: false,
      user: null,
    });

    navigate("/login");
  };

  return (
    <nav className="flex justify-around items-center w-full p-4 shadow-sm">
      <div className="logo w-28">
        <NavLink to="/" className="w-full h-auto">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </NavLink>
      </div>
      <ul className="flex items-center space-x-2 text-base">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "p-2 px-3 text-white hover-link"
                : "p-2 px-3  hover:text-white hover:hover-link"
            }
          >
            Internships
          </NavLink>
        </li>

        {authState.isLoggedIn ? (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 px-3 text-white hover-link"
                    : "p-2 px-3 hover:text-white hover:hover-link"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <div className="relative inline-block text-left group">
                <div className="hover:cursor-pointer">
                  <FaCircleUser size={34} />
                </div>

                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="py-1">
                    <button
                      onClick={handleProfile}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/signup"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "p-2 px-3  text-white hover-link" // Change text to white when active
                      : "p-2 px-3  hover:text-white hover:hover-link" // Normal hover behavior
                }
              >
                Candidate Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hire"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "p-2 px-3  text-white hover-link" // Change text to white when active
                      : "p-2 px-3  hover:text-white hover:hover-link" // Normal hover behavior
                }
              >
                Company Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "p-2 px-3  text-white hover-link" // Change text to white when active
                      : "p-2 px-3  hover:text-white hover:hover-link" // Normal hover behavior
                }
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
