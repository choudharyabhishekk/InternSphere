import React from "react";

const Dashboard = async () => {
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

  return <div>Dashboard</div>;
};

export default Dashboard;
