import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../img/1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const handleLink = () => {
    window.open(
      "https://www.facebook.com/POS-obrt-za-grafiku-i-usluge-1193402927484758"
    );
  };

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
        <button onClick={() => handleLink()}>
          <FontAwesomeIcon icon={faFacebook} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
