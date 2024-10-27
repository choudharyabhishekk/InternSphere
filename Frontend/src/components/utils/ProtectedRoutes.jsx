import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProtectedRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  useEffect(() => {
    // Check if the user is logged in by checking for a token in local storage
    const userData = localStorage.getItem("token");
    setIsLoggedIn(true);
  }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
