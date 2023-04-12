import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminid");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard handleLogout={handleLogout} />}
        />

        <Route
          path="/"
          element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
};

export default App;
