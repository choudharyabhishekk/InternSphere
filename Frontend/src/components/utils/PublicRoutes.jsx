import { Navigate } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";

const PublicRoutes = ({ children }) => {
  const { authState } = useAuthContext();

  // If the user is logged in, redirect them to the dashboard
  if (authState.isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  // If not logged in, allow access to the route
  return children;
};

export default PublicRoutes;
