import React from 'react';
import { Edit, Delete } from '@mui/icons-material';
import '../UserTable/UserTable.css';

const UserTable = () => {
  const users = [
    { firstName: 'John', lastName: 'Doe', username: 'johndoe', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', username: 'janedoe', isActive: false },
    { firstName: 'Bob', lastName: 'Smith', username: 'bobsmith', isActive: true },
    { firstName: 'Alice', lastName: 'Johnson', username: 'alicejohnson', isActive: false },
  ];

  return (
    <div>
      <table>
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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td className={user.isActive ? 'active' : 'non-active'}>
                {user.isActive ? 'Active' : 'Non Active'}
              </td>
              <td className="action">
                <Edit className="edit-icon" />
                <Delete className="delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
