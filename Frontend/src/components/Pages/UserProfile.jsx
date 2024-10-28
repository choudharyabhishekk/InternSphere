import React from "react";
import { jwtDecode } from "jwt-decode";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";

const UserProfile = () => {
  // const token = localStorage.getItem("token");
  // if (!token) {
  //   throw new Error("User not logged in");
  // }
  // const userDetails = jwtDecode(token);
  // console.log(userDetails);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold ">Edit your profile</h1>
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="relative mt-1">
            <input id="name" type="text" placeholder="Your Name" readOnly />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
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

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
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
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
