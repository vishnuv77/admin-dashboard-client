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
  const [isSubUser, setIsSubUser] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Include isSubUser in the request if it's checked
    const data = {
      email: formInputs.email,
      password: formInputs.password,
    };
    if (isSubUser) {
      try {
        const response = await axios.post(
          "http://localhost:5000/subuser/login",
          data
        );
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("subuserId", response.data.id);
        setIsLoggedIn(true);
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/admin/login",
          data
        );
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("adminId", response.data.id);
        setIsLoggedIn(true);
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleCheckboxChange = (e) => {
    setIsSubUser(e.target.checked);
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

        <input
          type="checkbox"
          id="isSubUser"
          name="isSubUser"
          checked={isSubUser}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="isSubUser">
          Please acknowledge in above check box if you are a sub user
        </label>

        <button type="submit">Login</button>
        <span className="span" onClick={handleShowLoginModal}>
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
