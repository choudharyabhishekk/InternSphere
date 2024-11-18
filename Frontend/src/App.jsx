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
import AdminDashboard from "./components/Pages/admin/AdminDashboard";
import ApplyInternship from "./components/Pages/ApplyInternship";
import InternshipDetails from "./components/Pages/JobDetails";
import ProtectedRoutes from "./components/utils/ProtectedRoutes";
import NotFound from "./components/Pages/NotFound";
import PublicRoutes from "./components/utils/PublicRoutes";
import EditProfile from "./components/Pages/EditProfile";

function App() {
  const location = useLocation();

  // Check if the current path starts with /employer/
  const isEmployerRoute = location.pathname.startsWith("/employer/");

  return (
    <>
      {isEmployerRoute ? <EmployerNavbar /> : <Navbar />}
      <Routes>
        <Route path="/job/:title/:jobId" element={<JobDetails />} />
        <Route
          path="/signup"
          element={
            <PublicRoutes>
              <Signup />
            </PublicRoutes>
          }
        />
        <Route
          path="/hire"
          element={
            <PublicRoutes>
              <EmployerSignup />
            </PublicRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes userType={["user"]}>
              <UserProfile />
            </ProtectedRoutes>
          }
        />

        <Route path="/edit" element={<EditProfile />} />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route path="/404" element={<NotFound />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes userType={["user"]}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="/" element={<Homepage />} />

        <Route
          path="/employer/dashboard"
          element={
            <ProtectedRoutes userType={["employer"]}>
              <EmployerDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoutes userType={["admin"]}>
              <AdminDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/internship/:internshipId"
          element={<InternshipDetails />}
        />
        <Route path="/apply-now/:internshipId" element={<ApplyInternship />} />
        <Route
          path="/employer/create"
          element={
            <ProtectedRoutes userType={["employer"]}>
              <CreateJob />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
