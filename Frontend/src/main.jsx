import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
        >
          <App />
        </GoogleOAuthProvider>
        <ToastContainer theme="dark" position="bottom-right" />
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
);
