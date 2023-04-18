import React, { useState, useEffect } from "react";
import { Edit, Delete, Search } from "@mui/icons-material";
import "../UserTable/UserTable.css";
import axios from "axios";
import "jspdf-autotable";
import jsPDF from "jspdf";

const UserTable = ({ onAddUser, onUpdateUser, setId }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const response = await axios.get("http://localhost:5000/user/getall", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setUsers(response.data.users); // Set the users state variable to the array of user objects returned by the server
    };
    console.log(users);

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    onAddUser();
  };

  const handleUpdateUser = async (id) => {
    onUpdateUser();
    setId(id);
    console.log("id:", id);
  };

  const handleDeleteUser = async (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!shouldDelete) {
      return;
    }
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `http://localhost:5000/user/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUsers(users.filter((user) => user._id !== id));
    console.log(response);
  };
  const handleDownload = () => {
    const doc = new jsPDF();

    // Define the columns and rows for the PDF table
    const columns = ["Firstname", "Lastname", "Username", "Status"];
    const rows = users.map((user) => [
      user.firstname,
      user.lastname,
      user.username,
      user.status ? "Active" : "Non-active",
    ]);

    // Add the table to the PDF document
    doc.autoTable({ head: [columns], body: rows });

    // Save the PDF file
    doc.save("subusers.pdf");
  };

  const filteredUsers = users.filter((user) => {
    const searchText = searchTerm.toLowerCase();
    return (
      user.username.toString().toLowerCase().includes(searchText) ||
      user.status.toString().toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="user-table-wrapper" style={{ width: "100%" }}>
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={handleAddUser}>
        Add User
      </button>
      <button className="download-button" onClick={handleDownload}>
        {" "}
        {/* Add the download button */}
        Download Form
      </button>
      <table className="user-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>User Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td className={user.status ? "active" : "non-active"}>
                  {user.status ? "Active" : "Non-active"}
                </td>
                <td className="action">
                  <Edit
                    className="edit-icon"
                    data-id={user._id}
                    onClick={() => handleUpdateUser(user._id)}
                  />
                  <Delete
                    className="delete-icon"
                    data-id={user._id}
                    onClick={() => handleDeleteUser(user._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
