import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const UserRegistration = () => {
  const [formInputs, setFormInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        formInputs,
        { headers }
      );
      console.log(response.data);
      localStorage.setItem("userId",response.data.id)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <TextField
        name="firstname"
        onChange={handleChange}
        placeholder="First Name"
        style={{ marginBottom: "20px", width: "300px" }}
      />
      <TextField
        name="lastname"
        onChange={handleChange}
        placeholder="Last Name"
        style={{ marginBottom: "20px", width: "300px" }}
      />
      <TextField
        name="username"
        onChange={handleChange}
        placeholder="User Name"
        style={{ marginBottom: "20px", width: "300px" }}
      />
      <TextField
        name="password"
        onChange={handleChange}
        placeholder="Password"
        style={{ marginBottom: "20px", width: "300px" }}
        type="password"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "200px" }}
      >
        Register
      </Button>
    </form>
  );
};

export default UserRegistration;
