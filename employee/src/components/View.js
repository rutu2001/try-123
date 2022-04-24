import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    bg: "",
  });

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container py-4 ">
      <div className="button_ex">
        <Link className="btn btn-primary " to="/all">
          back
        </Link>
      </div>
      <div>
        <h1 className="display-6">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item mb-3">
            <b>First Name : </b>
            {user.Fname}
          </li>
          <li className="list-group-item mb-3">
            {" "}
            <b>Last Name : </b> {user.Lname}
          </li>
          <li className="list-group-item mb-3">
            <b>Email : </b> {user.email}
          </li>
          <li className="list-group-item mb-3">
            <b>Phone : </b> {user.phone}
          </li>
          <li className="list-group-item mb-3">
            <b>Blood Group : </b>
            {user.bg}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default View;
