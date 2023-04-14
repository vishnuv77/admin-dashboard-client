import React, { useState } from "react";
import UserRegistration from "../../components/UserRegistration/UserRegistration";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserTable from "../../components/UserTable/UserTable";
import SubuserTable from "../../components/SubuserTable/SubuserTable";
import Menu from "../../components/Menu/Menu"
import Services from "../../components/Services/Services"
import Contracts from "../../components/Contracts/Contracts"
import Announcement from "../../components/Announcement/Announcement"


const Dashboard = ({ handleLogout }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const adminId = localStorage.getItem("adminId");
  return (
    <div style={{ display: "flex" }}>
      <Navbar handleLogout={handleLogout} style={{ zIndex: "2" }} />

      <div style={{ display: "flex", flex: "1" }}>
        <Sidebar style={{ marginTop: "4rem", zIndex: "1" }} />

        <div
          style={{
            flex: "1",
            paddingTop: "4rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <h1 style={{ marginTop: "10px" }}>Admin Dashboard</h1>
          {adminId && (
            <UserTable
              onAddUser={toggleModal}
              onUpdateUser={toggleModal}
              setId={setId}
            />
          )}

          <SubuserTable
            onAddUser={toggleModal}
            onUpdateUser={toggleModal}
            setId={setId}
          />
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UserRegistration id={id} />
            </div>
            
          )}
          <Menu />
          <Services/>
          <Contracts />
          <Announcement/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
