import React from "react";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import { navButtonStyling } from "./definitions/homePageDefinitions";

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center mx-auto mt-5 font-body">
      <img className="mr-10" src={logo} />
      <ul className="flex gap-12 font-bold flex-wrap">
        <Link to="/" className={navButtonStyling}>
          Home
        </Link>
        <Link to="/under-construction" className={navButtonStyling}>
          About
        </Link>
        <Link to="/under-construction" className={navButtonStyling}>
          Menu
        </Link>
        <Link to="/booking" className={navButtonStyling}>
          Reservations
        </Link>
        <Link to="/under-construction" className={navButtonStyling}>
          Order Online
        </Link>
        <Link to="/under-construction" className={navButtonStyling}>
          Login
        </Link>
      </ul>
    </nav>
  );
}
