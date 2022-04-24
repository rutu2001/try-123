import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";

function AllEmp() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deletemp = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
  };

  return (
    <div className="container ">
      <div className="allemp">
        <h1 className=" display-6">All Employees</h1>
      </div>

      <table class="table border shadow">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.id}</td>
              <td>{user.Fname}</td>
              <td>{user.Lname}</td>
              <td>
                <Link className="btn btn-primary mar" to={`/view/${user.id}`}>
                  View
                </Link>

                <Link
                  className="btn btn-outline-primary mar"
                  to={`/edituser/${user.id}`}
                >
                  Edit
                </Link>

                <Link
                  className="btn btn-danger mar"
                  onClick={() => deletemp(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllEmp;
