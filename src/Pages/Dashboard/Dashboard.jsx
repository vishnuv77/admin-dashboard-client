import React from "react";
import UserRegistration from "../../components/UserRegistration/UserRegistration";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      
      <div style={{ display: "flex", flex: "1" }}>
        <Sidebar style={{ marginLeft: "0" }} />
        
        <div style={{ flex: "1", paddingTop: "4rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
          <h1>Admin Dashboard</h1>
          <UserRegistration />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


