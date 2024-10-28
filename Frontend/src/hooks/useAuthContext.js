import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Auth Context must be used insided AuthContextProvider");
  }
  return context;
};
