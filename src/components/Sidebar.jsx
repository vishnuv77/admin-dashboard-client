import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "200px",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <button style={{ marginTop: "auto" }}>Add</button>
      <a href="#" style={{ marginBottom: "1rem" }}>
        Users
      </a>
    </div>
  );
};

export default Sidebar;
