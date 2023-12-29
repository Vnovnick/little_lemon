import React from "react";
import logo from "./images/logo.svg";

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center mx-auto mt-5">
      <img className="mr-10" src={logo} />
      <ul className="flex gap-12 font-bold flex-wrap">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}
