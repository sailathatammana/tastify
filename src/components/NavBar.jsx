import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

export default function Nav() {
  return (
    <nav className="site-navigation">
      <Link to="/">
        <img className="logo" src={logo} alt="Restaurant logo" />
      </Link>
      <ul className="nav-links">
        <Link to="/Dishes">
          <li>Dishes</li>
        </Link>
        <Link to="/Desserts">
          <li>Desserts</li>
        </Link>
        <Link to="/Drinks">
          <li>Drinks</li>
        </Link>
        <Link to="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
}
