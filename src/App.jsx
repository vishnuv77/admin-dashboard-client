import React from 'react'
import UserTable from './components/UserTable/UserTable'

const App = () => {
  return (
    <UserTable/>
  )
}

export default App

/*import React from "react";
import "./App.css";
import AdminLogin from "./Pages/AdminLogin/AdminLogin"
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;

*/