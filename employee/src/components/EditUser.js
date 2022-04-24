import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [newuser, setnewuser] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    bg: "",
  });

  useEffect(() => {
    loadUser();
  }, []);
  const { Fname, Lname, email, phone, bg } = newuser;

  const SubmitHandler = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3002/users/${id}`, newuser);
    history.push("/all");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setnewuser(result.data);
  };

  const ChangeHandler = (e) => {
    setnewuser({ ...newuser, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="button_ex  py-4 mar">
        <Link className="btn btn-primary  mar1" to="/all">
          back
        </Link>
      </div>
      <div>
        <h2 className="text-center  allemp ">Edit Employee</h2>
      </div>

      <div className="container mb-3">
        <div className="w-75 mx-auto shadow p-5">
          <form onSubmit={(e) => SubmitHandler(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Enter Your First Name"
                name="Fname"
                value={newuser.Fname}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Enter Your Last Name"
                name="Lname"
                value={newuser.Lname}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg mb-3"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={newuser.email}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={newuser.phone}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mb-5"
                placeholder="Enter Your Blood Group"
                name="bg"
                value={newuser.bg}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <button className="btn btn-primary btn-block" to="/all">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
