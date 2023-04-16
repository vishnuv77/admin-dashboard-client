import React, { useState, useEffect } from "react";
import axios from "axios";
import UserRegistration from "../../components/UserRegistration/UserRegistration";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserTable from "../../components/UserTable/UserTable";
import SubuserTable from "../../components/SubuserTable/SubuserTable";
import Menu from "../../components/Menu/Menu";
import Services from "../../components/Services/Services";
import Contracts from "../../components/Contracts/Contracts";
import Announcement from "../../components/Announcement/Announcement";

const Dashboard = ({ handleLogout }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [user, setUser] = useState();

  const [menuAccess, setMenuAccess] = useState();
  const [servicesAccess, setServicesAccess] = useState();
  const [contractAccess, setContractAccess] = useState();

  const [showUsers, setShowUsers] = useState(
    JSON.parse(localStorage.getItem("showUsers")) || false
  );
  const [showSubUsers, setShowSubUsers] = useState(
    JSON.parse(localStorage.getItem("showSubUsers")) || false
  );
  const [showMenu, setShowMenu] = useState(
    JSON.parse(localStorage.getItem("showMenu")) || false
  );
  const [showServices, setShowServices] = useState(
    JSON.parse(localStorage.getItem("showServices")) || false
  );
  const [showContracts, setShowContracts] = useState(
    JSON.parse(localStorage.getItem("showContracts")) || false
  );
  const [showAnnouncement, setShowAnnouncement] = useState(
    JSON.parse(localStorage.getItem("showAnnouncement")) || false
  );

  const handleVisibility = (component) => {
    switch (component) {
      case "users":
        setShowUsers(!showUsers);
        localStorage.setItem("showUsers", !showUsers);
        setShowSubUsers(false);
        setShowMenu(false);
        setShowServices(false);
        setShowContracts(false);
        setShowAnnouncement(false);
        break;
      case "subusers":
        setShowSubUsers(!showSubUsers);
        localStorage.setItem("showSubUsers", !showSubUsers);
        setShowUsers(false);
        setShowMenu(false);
        setShowServices(false);
        setShowContracts(false);
        setShowAnnouncement(false);
        break;
      case "menu":
        setShowMenu(!showMenu);
        localStorage.setItem("showMenu", !showMenu);
        setShowUsers(false);
        setShowSubUsers(false);
        setShowServices(false);
        setShowContracts(false);
        setShowAnnouncement(false);
        break;
      case "services":
        setShowServices(!showServices);
        localStorage.setItem("showServices", !showServices);
        setShowUsers(false);
        setShowSubUsers(false);
        setShowMenu(false);
        setShowContracts(false);
        setShowAnnouncement(false);
        break;
      case "contracts":
        setShowContracts(!showContracts);
        localStorage.setItem("showContracts", !showContracts);
        setShowUsers(false);
        setShowSubUsers(false);
        setShowMenu(false);
        setShowServices(false);
        setShowAnnouncement(false);
        break;
      case "announcement":
        setShowAnnouncement(!showAnnouncement);
        localStorage.setItem("showAnnouncement", !showAnnouncement);
        setShowUsers(false);
        setShowSubUsers(false);
        setShowMenu(false);
        setShowServices(false);
        setShowContracts(false);
        break;
      default:
        break;
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const adminId = localStorage.getItem("adminId");
  const subuserId = localStorage.getItem("subuserId");
  console.log(subuserId);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const response = await axios.get(`http://localhost:5000/subuser/get/${subuserId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setMenuAccess(response.data.subuser.menuAccess)
      setServicesAccess(response.data.subuser.servicesAccess)
      setContractAccess(response.data.subuser.contractAccess)
    };

    fetchUsers();
  }, []);

  console.log(menuAccess);
  console.log(servicesAccess);
  console.log(contractAccess);

  return (
    <div style={{ display: "flex" }}>
      <Navbar handleLogout={handleLogout} style={{ zIndex: "2" }} />

      <div style={{ display: "flex", flex: "1" }}>
        <Sidebar
          style={{ marginTop: "4rem", zIndex: "1" }}
          handleVisibility={handleVisibility}
        />

        <div
          style={{
            flex: "1",
            paddingTop: "4rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <h1 style={{ marginTop: "10px" }}>Admin Dashboard</h1>
          {adminId && showUsers && (
            <UserTable
              onAddUser={toggleModal}
              onUpdateUser={toggleModal}
              setId={setId}
            />
          )}

          {showSubUsers && adminId && (
            <SubuserTable
              onAddUser={toggleModal}
              onUpdateUser={toggleModal}
              setId={setId}
            />
          )}
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
          {showMenu && menuAccess && <Menu />}
          {showServices && servicesAccess && <Services />}
          {showContracts && contractAccess && <Contracts />}
          {showAnnouncement && <Announcement />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
/*const [showUsers, setShowUsers] = useState(false);
  const [showSubUsers, setShowSubUsers] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showContracts, setShowContracts] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const handleVisibility = (component) => {
    setShowUsers(false);
    setShowSubUsers(false);
    setShowMenu(false);
    setShowServices(false);
    setShowContracts(false);
    setShowAnnouncement(false);
    switch (component) {
      case "users":
        setShowUsers(!showUsers);
        break;
      case "subusers":
        setShowSubUsers(!showSubUsers);
        break;
      case "menu":
        setShowMenu(!showMenu);
        break;
      case "services":
        setShowServices(!showServices);
        break;
      case "contracts":
        setShowContracts(!showContracts);
        break;
      case "announcement":
        setShowAnnouncement(!showAnnouncement);
        break;
      default:
        break;
    }
  };
*/
