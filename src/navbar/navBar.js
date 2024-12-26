

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            WebSiteName
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Page 1</Link>
          </li>
          <li>
            <Link to="/product">Page 2</Link>
          </li>
          <li>
            <Link to="/about">Page 3</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
