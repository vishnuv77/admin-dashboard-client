import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
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
        lastname="username"
        onChange={handleChange}
        placeholder="User Name"
        style={{ marginBottom: "20px", width: "300px" }}
      />
      <TextField
        password="password"
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
