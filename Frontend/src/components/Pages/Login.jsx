import React, { useState, useContext } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    // Validate email
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/signin", {
        email,
        password,
      });
      const token = response.data.result;
      localStorage.setItem("token", token);
      setAuthState({ user: { token: token }, isLoggedIn: true });

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login Failed. Please Check your credentials.");
    }
  };

  const handleGoogleLogin = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);

    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col mt-10 items-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
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
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-gray-100`}
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
            <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full pl-10 py-2 border rounded-lg focus:ring-primary focus:border-primary ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-gray-100`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary"
            />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full py-2 mb-3 bg-primary text-white rounded-full hover:bg-primary-dark focus:outline-none"
        >
          Login
        </button>
        <GoogleLogin
          className="w-full py-2 mb-3 bg-primary text-white rounded-full hover:bg-primary-dark focus:outline-none"
          onSuccess={(credentialResponse) => {
            handleGoogleLogin(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
