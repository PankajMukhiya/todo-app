import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const logOut = async () => {
    await axios.delete("/logout");
    console.log("Logout successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-info fs-3 ms-lg-5" to="/">
            ToDo
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link  text-capitalize fs-5 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li> */}
              {["signup", "login"].map((navItems) => {
                return (
                  <li className="nav-item   " key={navItems}>
                    <NavLink
                      className="nav-link text-capitalize fs-5  ms-lg-5 "
                      to={`/${navItems}`}
                    >
                      {navItems}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <button className="btn btn-dark btn-outline-danger text-capitalize fs-5 ms-lg-5 " onClick={logOut}> Log Out</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
