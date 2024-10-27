import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink from React Router v6
import logo from "../../assets/black-logo.png";
import { FaCircleUser } from "react-icons/fa6";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
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

        {isLoggedIn ? (
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
              <button onClick={handleLogout}>
                <FaCircleUser size={30} />
              </button>
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
