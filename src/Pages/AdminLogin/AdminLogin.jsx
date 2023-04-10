import { BorderColor } from "@mui/icons-material";
import React, { useState } from "react";

const AdminLogin = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
          style={{ marginBottom: "10px", padding: "10px" }}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
          style={{ marginBottom: "10px", padding: "10px" }}
        />
        <button
          type="submit"
          style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
