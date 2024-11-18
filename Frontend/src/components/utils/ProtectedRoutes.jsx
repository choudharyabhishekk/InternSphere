import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect, Children } from "react";
import useAuthContext from "../../context/AuthContext";

const ProtectedRoutes = ({ children, userType }) => {
  const { authState } = useAuthContext();
  if (!authState.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  if (!userType.includes(authState.userType)) {
    return <Navigate to="/404" />;
  }
  return children;
};

export default ProtectedRoutes;
