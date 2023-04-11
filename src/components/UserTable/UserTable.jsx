import React, { useState, useEffect } from "react";
import { Edit, Delete, Search } from "@mui/icons-material";
import "../UserTable/UserTable.css";
import axios from "axios";

const UserTable = ({ onAddUser }) => {
  const [users, setUsers] = useState([]);
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

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    onAddUser();
  };

  return (
    <div className="user-table-wrapper" style={{ width: "100%" }}>
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search users"
        />
      </div>
      <button className="add-button" onClick={handleAddUser}>
        Add User
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
          {users?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td className="action">
                  <Edit className="edit-icon" />
                  <Delete className="delete-icon" />
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
