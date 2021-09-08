import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../img/1.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <Link className="link" to="/">
          Početak
        </Link>
        <Link className="link" to="/services">
          Usluge
        </Link>
        <Link className="link" to="/contact">
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
