import { Button, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const UserRegistration = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    status: false,
  });

  const userId = localStorage.getItem("userId");
  const adminId = localStorage.getItem("adminId");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormInputs({ ...formInputs, status: e.target.checked });
  };

  const updateHandleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await axios.put(
      adminId
        ? `http://localhost:5000/user/update/${id}`
        : `http://localhost:5000/subuser/update/${id}`,
      formInputs,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.post(
        adminId
          ? "http://localhost:5000/user/register"
          : "http://localhost:5000/subuser/register",
        formInputs,
        { headers }
      );
      console.log(response.data);
      localStorage.setItem("userId", response.data.id);

      const userId = response.data.id;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={id ? updateHandleSubmit : handleSubmit}
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
      <label>Click the check box if user is active?</label>
      <Checkbox
        checked={formInputs.status}
        onChange={handleCheckboxChange}
        style={{ marginBottom: "20px" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "200px" }}
        onClick={() => window.location.reload()}
      >
        Register
      </Button>
    </form>
  );
};

export default UserRegistration;
