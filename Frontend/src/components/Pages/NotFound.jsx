import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6 space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200">
            Signup
          </button>
        </Link>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
