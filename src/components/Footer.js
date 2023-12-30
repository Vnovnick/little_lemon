import React from "react";
import { Link } from "react-router-dom";
import { navButtonStyling } from "./definitions/homePageDefinitions";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-[900px] py-5">
      <ul className="flex gap-12 font-bold flex-wrap">
        <Link to="/" className={navButtonStyling}>
          Home
        </Link>
        <Link to="/booking" className={navButtonStyling}>
          Reservations
        </Link>
      </ul>
    </footer>
  );
}
