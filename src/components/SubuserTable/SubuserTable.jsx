import React from "react";
import { useState, useEffect } from "react";
import { Edit, Delete, Search } from "@mui/icons-material";
import "../SubuserTable/SubuserTable.css";
import axios from "axios";

const SubuserTable = ({onAddUser,onUpdateUser,setId}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const response = await axios.get("http://localhost:5000/subuser/getall", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setUsers(response.data.subUsers); // Set the users state variable to the array of user objects returned by the server
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
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `http://localhost:5000/subuser/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUsers(users.filter((user) => user._id !== id));
    console.log(response);
  };

  return (
    <div className="user-table-wrapper" style={{ width: "100%" }}>
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search sub users"
        />
      </div>
      <button className="add-button" onClick={handleAddUser}>
        Add Sub-user
      </button>
      <table className="user-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <tr key={index}>
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

export default SubuserTable;
