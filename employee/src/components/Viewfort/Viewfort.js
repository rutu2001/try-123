import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import "./Viewfort.css";
import { Link } from "react-router-dom";

function Viewfort() {
  const { distid, fortid } = useParams();
  const [users, setuser] = useState({
    fortid: "",
    distid: "",
    जिल्हा: "",
    नाव: "",
    उंची: "",
    क्षेत्र: "",
    माहिती: "",
  });
  // const location = useLocation();
  // const value = location.params;

  //console.log(distid);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3004/users/", {
      params: { distid: `${distid}`, fortid: `${fortid}` },
    });
    setuser(result.data[0]);
    console.log(users);
  };

  return (
    <div className="container py-4 ">
      <div className="button_ex">
        <Link className="btn btn-primary " to={`/allforts/${distid}`}>
          मागे
        </Link>
      </div>
      <div>
        <h1 className="display-6">किल्ला क्रमांका : {users.fortid} </h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item mb-3">
            <b>नाव : {users.नाव} </b>
          </li>
          <li className="list-group-item mb-3">
            {" "}
            <b>जिल्हा : {users.जिल्हा} </b>
          </li>
          <li className="list-group-item mb-3">
            <b>क्षेत्र : {users.क्षेत्र} </b>
          </li>
          <li className="list-group-item mb-3">
            <b>उंची : {users.उंची}</b>
          </li>
          <li className="list-group-item mb-3">
            <b>माहिती : {users.माहिती} </b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Viewfort;
