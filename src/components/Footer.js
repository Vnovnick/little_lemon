import React from "react";
import { Link } from "react-router-dom";
import { navButtonStyling } from "./definitions/homePageDefinitions";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto py-5">
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
    </footer>
  );
}
