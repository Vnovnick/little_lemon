import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";

export default function Footer() {
  const footerLinksStyling = "hover:text-dgreen";
  return (
    <footer className="mx-auto mt-auto w-full max-w-[1440px] bg-dgreen py-5 flex">
      <section className="w-full max-w-[1000px] flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row justify-between mx-auto items-center">
        <img
          src={logo}
          alt="footer pasta"
          className="bg-white rounded-2xl p-3 w-full max-w-[300px] h-fit"
        />
        <section className="bg-[#EDEFEE] flex flex-col 820:flex-row justify-between gap-5 px-10 py-2 rounded-2xl">
          <ul className="flex flex-col gap-2 font-bold font-body">
            <Link to="/" className={footerLinksStyling}>
              Home
            </Link>
            <Link to="/under-construction" className={footerLinksStyling}>
              About
            </Link>
            <Link to="/under-construction" className={footerLinksStyling}>
              Menu
            </Link>
            <Link to="/booking" className={footerLinksStyling}>
              Reservations
            </Link>
            <Link to="/under-construction" className={footerLinksStyling}>
              Order Online
            </Link>
            <Link to="/under-construction" className={footerLinksStyling}>
              Login
            </Link>
          </ul>
          <section className="font-body">
            <p className="text-2xl font-bold mb-6">Contact</p>
            <p>600 Someplace Nice</p>
            <p>(555) 555-5555</p>
            <p>conact@littlelemon.com</p>
          </section>
          <section className="font-body">
            <p className="text-2xl font-bold mb-6">Find Us On:</p>
            <p className="cursor-pointer">Facebook</p>
            <p className="cursor-pointer">Instagram</p>
            <p className="cursor-pointer">Twitter</p>
          </section>
        </section>
      </section>
    </footer>
  );
}
