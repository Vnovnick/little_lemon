import React from "react";
import restaurant from "./images/restaurant.jpg";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <section className="grid w-full max-w-[600px] gap-[20px] m-auto font-body rounded-2xl">
      <img
        src={restaurant}
        className="w-full col-start-1 row-start-1 mx-auto bg-dgreen h-full object-cover rounded-2xl"
      />
      <section className="col-start-1 row-start-1 bg-dgreen m-10 rounded-2xl flex flex-col items-center justify-center gap-5">
        <p className="text-white text-40 font-body text-center">
          Under Construction
        </p>
        <Link
          to="/"
          className="px-5 py-1 bg-mustard rounded-2xl text-center font-bold"
          aria-label="On Click Back to Home"
        >
          Back To Home
        </Link>
      </section>
    </section>
  );
}
