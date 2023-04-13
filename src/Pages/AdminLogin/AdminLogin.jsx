import { BorderColor } from "@mui/icons-material";
import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../../components/Login/Login.jsx";

const AdminLogin = ({ setIsLoggedIn }) => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
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
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("adminId", response.data.id);
        setIsLoggedIn(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h1 className="logo">Admin Login</h1>
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
        <span
          className="span"
          onClick={handleShowLoginModal}
        >
          Are you a user? login here..
        </span>
      </form>
      {showLoginModal && (
        <>
          <div className="modal-background" onClick={handleShowLoginModal} />
          <div className="login-modal">
            <Login />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminLogin;
