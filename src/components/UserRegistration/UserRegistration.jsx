import { Button, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const UserRegistration = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    status: false,
    menuAccess: false,
    contractAccess: false,
    servicesAccess: false,
  });

  const userId = localStorage.getItem("userId");
  const adminId = localStorage.getItem("adminId");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormInputs({ ...formInputs, status: e.target.checked });
  };

  const handleMenuAccessChange = (e) => {
    setFormInputs({ ...formInputs, menuAccess: e.target.checked });
  };

  const handleContractAccessChange = (e) => {
    setFormInputs({ ...formInputs, contractAccess: e.target.checked });
  };

  const handleServicesAccessChange = (e) => {
    setFormInputs({ ...formInputs, servicesAccess: e.target.checked });
  };

  const updateHandleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await axios.put(
      adminId
        ? `http://localhost:5000/subuser/update/${id}`
        : `http://localhost:5000/user/update/${id}`,
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
          ? "http://localhost:5000/subuser/register"
          : "http://localhost:5000/user/register",
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
        name="email"
        onChange={handleChange}
        placeholder="email/User Name"
        style={{ marginBottom: "20px", width: "300px" }}
      />
      <TextField
        name="password"
        onChange={handleChange}
        placeholder="Password"
        style={{ marginBottom: "20px", width: "300px" }}
        type="password"
      />

      <label style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={formInputs.status}
          onChange={handleStatusChange}
          style={{ marginRight: "10px" }}
        />
        Click the check box if user is active?
      </label>

      <label style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={formInputs.menuAccess}
          onChange={handleMenuAccessChange}
          style={{ marginRight: "10px" }}
        />
        Menu Access
      </label>

      <label style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={formInputs.contractAccess}
          onChange={handleContractAccessChange}
          style={{ marginRight: "10px" }}
        />
        Contract Access
      </label>

      <label style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={formInputs.servicesAccess}
          onChange={handleServicesAccessChange}
          style={{ marginRight: "10px" }}
        />
        Services Access
      </label>
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
