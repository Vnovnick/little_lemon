import React from "react";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center mx-auto mt-5">
      <img className="mr-10" src={logo} />
      <ul className="flex gap-12 font-bold flex-wrap">
        <Link to="/">Home</Link>
        <Link to="/booking">Reservations</Link>
      </ul>
    </nav>
  );
}
