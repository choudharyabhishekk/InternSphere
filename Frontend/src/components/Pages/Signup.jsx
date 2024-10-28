import React, { useState } from "react";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate Name
    if (!name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      tempErrors.name = "Name can only contain letters and spaces";
      isValid = false;
    }

    // Validate Email
    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid";
      isValid = false;
    }

    // Validate Password
    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      tempErrors.password =
        "Password must contain at least one uppercase letter";
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      tempErrors.password =
        "Password must contain at least one lowercase letter";
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      tempErrors.password = "Password must contain at least one digit";
      isValid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
      tempErrors.password =
        "Password must contain at least one special character";
      isValid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return; // If validation fails, stop the submission
    }

    try {
      // Make API request to signup
      const response = await axios.post("http://localhost:3000/auth/signup", {
        firstname: name.split(" ")[0],
        lastname: name.split(" ")[1] || "",
        email,
        password,
      });

      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold ">Create an account</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="relative mt-1">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-100 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
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
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-100 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
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
            <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-100 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative mt-1">
            <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-100 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
        >
          Sign Up
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errorMessage}
          </p>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
