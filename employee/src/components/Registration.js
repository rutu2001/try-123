import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import start from "./img/temp.png";
import { end } from "./img/end.jpg";
import { middle } from "./img/middle.jpg";

const Registration = () => {
  let history = useHistory();
  const [newuser, setnewuser] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    bg: "",
  });
  const [formerrors, setformerrors] = useState({});

  const [issubmit, setsubmit] = useState(false);

  const { Fname, Lname, email, phone, bg } = newuser;

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setformerrors(validate(newuser));
  };

  useEffect(async () => {
    // console.log(formerrors);
    // if (issubmit) {
    //   console.log(newuser);
    // }
    if (Object.keys(formerrors).length === 0) {
      setsubmit(true);
    }
    if (Object.keys(formerrors).length === 0 && issubmit) {
      alert("Registration Successful");
      await axios.post("http://localhost:3002/users", newuser);
      history.push("/all");
    }
  }, [formerrors]);

  const ChangeHandler = (e) => {
    setnewuser({ ...newuser, [e.target.name]: e.target.value });
  };

  const validate = (value) => {
    const errors = {};
    const regex =
      "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
    if (!value.Fname) {
      errors.Finame = "First name is required!!!";
    }
    if (!value.Lname) {
      errors.Laname = "Last name is required!!!";
    }

    if (!value.email) {
      errors.eemail = "Email is required!!!";
    }

    return errors;
  };

  return (
    <div className="bg">
      <div
        className="image1"
        style={{
          backgroundImage: `url(${start})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <h2 className="text-center  allemp">रजिस्ट्रेशन फॉर्म</h2>
        </div>

        <div>
          <form onSubmit={(e) => SubmitHandler(e)}>
            <div className=" ">
              <input
                type="text"
                className="input "
                placeholder="Enter Your First Name"
                name="Fname"
                value={newuser.Fname}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <p className="req input">{formerrors.Finame}</p>
            <div className="">
              <input
                type="text"
                className="input "
                placeholder="Enter Your Last Name"
                name="Lname"
                value={newuser.Lname}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <p className="req input">{formerrors.Laname}</p>
            <div className="">
              <input
                type="email"
                className="input "
                placeholder="Enter Your E-mail Address"
                name="email"
                value={newuser.email}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <p className="req input">{formerrors.eemail}</p>
            <div className="">
              <input
                type="text"
                className="input "
                placeholder="Enter Your Phone Number"
                name="phone"
                value={newuser.phone}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <p className="input"></p>
            <div className="">
              <input
                type="text"
                className="  input"
                placeholder="Enter Your Blood Group"
                name="bg"
                value={newuser.bg}
                onChange={(e) => ChangeHandler(e)}
              />
            </div>
            <p className="input"></p>
            <button className=" reg" to="/all">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
