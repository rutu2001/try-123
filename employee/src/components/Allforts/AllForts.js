import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AllForts.css";
import { Link } from "react-router-dom";

function AllForts() {
  const { distid } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get("http://localhost:3004/users", {
      params: { distid: `${distid}` },
    });
    console.log(res.data);
    setUsers(res.data);
  };

  return (
    <div>
      <div className="allemp">
        <h1 className="  mid ">All Forts</h1>
      </div>
      <Link className="btn btn-primary " to={`/district`}>
        मागे
      </Link>

      <div className="container ">
        <table className="table border shadow ">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>

              <th scope="col">नाव</th>
              <th scope="col">जिल्हा</th>
              <th scope="col">प्रकार</th>
              <th scope="col">प्रकार</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>{user.नाव}</td>
                <td>{user.जिल्हा}</td>
                <td>{user.प्रकार}</td>
                <td>
                  <Link
                    className="btn btn-primary mar"
                    to={`/viewfort/${distid}/${user.fortid}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllForts;
