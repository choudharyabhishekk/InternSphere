import React from "react";
import { jwtDecode } from "jwt-decode";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import EditProfile from "./EditProfile";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User not logged in");
  }
  const userDetails = jwtDecode(token);
  console.log(userDetails);

  const handleEditProfile = () => {
    navigate("/edit");
  };
  return (
    <div className="flex flex-col justify-center mt-10 items-center">
      <h1 className="text-2xl font-bold my-4">Edit your profile</h1>
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block  font-medium text-gray-700">
            Name
          </label>
          <div className="relative mt-1">
            <input id="name" type="text" placeholder="Your Name" readOnly />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block  font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1">
            <input
              readOnly
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="gender" className="block  font-medium text-gray-700">
            Gender
          </label>
          <div className="relative mt-1">
            <input id="gender" type="text" placeholder="Male" readOnly />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="Qualification"
            className="block  font-medium text-gray-700"
          >
            Qualification
          </label>
          <div className="relative mt-1">
            <input
              id="Qualification"
              type="text"
              placeholder="Masters Degree"
              readOnly
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="resume" className="block  font-medium text-gray-700">
            Resume
          </label>
          <div className="relative mt-1">
            <input id="resume" type="text" placeholder="Resume.pdf" readOnly />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block  font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <input
              id="password"
              type="password"
              readOnly
              placeholder="********"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
