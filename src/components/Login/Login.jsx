import React from "react";
import "../Login/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
    console.log(formInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/userlogin",
        formInputs
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-login-form">
      <h1>User Login</h1>
      <input placeholder="username" name="username" onChange={handleChange} />
      <input placeholder="password" name="password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
