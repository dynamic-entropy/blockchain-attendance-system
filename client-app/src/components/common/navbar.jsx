import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/new" className="navbar-brand">
        <i className="fa fa-address-book" aria-hidden="true"></i>{" "}
        <strong> Attendanshu </strong>
      </NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/previous">
          View
        </NavLink>
        <NavLink className="nav-item nav-link" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
