import React from "react";

import "./Nav.scss";
import logo from "../../assets/images/logo.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="row nav">
      <div className="col-5 nav__items">
        <img className="nav__items--logo" alt="ball logo" src={logo} />
        <a
          className="nav__items--link"
          href="https://www.placecage.com/"
        >
          Open in app
        </a>
      </div>
      <div className="col-3"></div>
      <div className="col-4 nav__functions">
        <a href="https://placebear.com/"><FaSearch /></a>
        <a href="http://www.fillmurray.com/"><FaBell /></a>
        <a href="https://www.stevensegallery.com/"><FaUserCircle /></a>
      </div>
    </div>
  );
};

export default Nav;
