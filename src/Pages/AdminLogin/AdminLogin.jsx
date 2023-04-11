import { BorderColor } from "@mui/icons-material";
import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/admin/login", formInputs)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("adminId",response.data.id)
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
