import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <nav className=" nav navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand title" href="/">
            <h3>आम्ही गडगोंधळी</h3>
          </a>
          <ul className='navbar-nav ml-auto"'>
            <Link
              className="btn btn-outline-light mar title"
              to="/registration"
              type="submit"
            >
              रजिस्ट्रेशन फॉर्म
            </Link>

            <Link class="btn btn-outline-light mar" to="/all" type="submit">
              all users
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
