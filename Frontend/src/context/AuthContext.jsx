import { createContext, useContext, useState, useEffect } from "react";

// Creating a context with default values
const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  userType: null,
});

// Creating provider component
export function AuthContextProvider({ children }) {
  // Step 1: Load initial state from localStorage
  const initialAuthState = JSON.parse(localStorage.getItem("authState")) || {
    user: null,
    isLoggedIn: false,
    userType: null,
  };

  const [authState, setAuthState] = useState(initialAuthState);

  // Step 2: Update localStorage whenever authState changes
  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export default function useAuthContext() {
  return useContext(AuthContext);
}
