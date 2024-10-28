import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaIndustry,
  FaBuilding,
} from "react-icons/fa";

const EmployerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");

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

    // Validate phone

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

    try {
      const response = await axios.post(
        "http://localhost:3000/employer/registerEmployer",
        {
          email,
          password,
          phoneNumber,
          companyName,
          address,
          website,
          industry,
          companySize,
        }
      );
      toast.success("Successfully Registered");
      navigate("/employer/dashboard");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "EmployerSignup failed");
      setSuccessMessage(""); // Clear success message on error
    }
  };

  return (
    <div className="flex flex-col mt-20 items-center h-screen">
      <h1 className="text-2xl font-bold">Hire a Talent</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm"
      >
        {/* Company Name Field */}
        <div className="mb-6">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <div className="relative mt-1">
            <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="companyName"
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.companyName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Work Email
          </label>
          <div className="relative mt-1">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="email"
              type="email"
              placeholder="Hiring@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="password"
              type="password"
              placeholder="xxxx"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </div>
        {/* Phone Number Field */}
        <div className="mb-6">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <div className="relative mt-1">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="phoneNumber"
              type="text"
              placeholder="Enter mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        {/* Address Field */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="relative mt-1">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="address"
              type="text"
              placeholder="Company Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Website Field */}
        <div className="mb-6">
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <div className="relative mt-1">
            <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="website"
              type="text"
              placeholder="https://company.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.website ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website}</p>
            )}
          </div>
        </div>

        {/* Industry Field */}
        <div className="mb-6">
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700"
          >
            Industry
          </label>
          <div className="relative mt-1">
            <FaIndustry className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="industry"
              type="text"
              placeholder="e.g., Software, Healthcare"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.industry ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.industry && (
              <p className="text-red-500 text-sm">{errors.industry}</p>
            )}
          </div>
        </div>

        {/* Company Size Field */}
        <div className="mb-6">
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-700"
          >
            Company Size
          </label>
          <div className="relative mt-1">
            <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

            <input
              id="companySize"
              type="text"
              placeholder="e.g., 1-50, 51-200"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-gray-50 ${
                errors.companySize ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.companySize && (
              <p className="text-red-500 text-sm">{errors.companySize}</p>
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

export default EmployerSignup;
