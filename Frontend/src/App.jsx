// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Homepage from "./components/Pages/Homepage";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/utils/ProtectedRoutes";
import { AuthProvider } from "./components/utils/AuthContext";
import EmployerSignup from "./components/Pages/Employer/EmployerSignup";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hire" element={<EmployerSignup />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
