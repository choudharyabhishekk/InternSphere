import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Homepage from "./components/Pages/Homepage";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/utils/ProtectedRoutes";
import EmployerSignup from "./components/Pages/Employer/EmployerSignup";
import UserProfile from "./components/Pages/UserProfile";
import EmployerDashboard from "./components/Pages/Employer/EmployerDashboard";
import { CreateJob } from "./components/Pages/Employer/CreateJob";
import EmployerNavbar from "./components/Pages/Employer/EmployerNavbar";
import JobDetails from "./components/Pages/JobDetails";

function App() {
  const location = useLocation();

  // Check if the current path starts with /employer/
  const isEmployerRoute = location.pathname.startsWith("/employer/");

  return (
    <>
      {isEmployerRoute ? <EmployerNavbar /> : <Navbar />}
      <Routes>
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/signup" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hire" element={<EmployerSignup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/employer/create" element={<CreateJob />} />
      </Routes>
    </>
  );
}

export default App;
