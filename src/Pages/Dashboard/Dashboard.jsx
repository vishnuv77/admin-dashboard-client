import React, { useState } from "react";
import UserRegistration from "../../components/UserRegistration/UserRegistration";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserTable from "../../components/UserTable/UserTable";

const Dashboard = ({handleLogout}) => {
  const [showModal, setShowModal] = useState(false);
  const [id,setId] =useState("")



  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ display: "flex" }}>
      <Navbar handleLogout={ handleLogout } style={{ zIndex: "2" }} />

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
          <h1>Admin Dashboard</h1>
          <UserTable onAddUser={toggleModal} onUpdateUser={toggleModal} setId={setId} />
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
              <UserRegistration  id={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
