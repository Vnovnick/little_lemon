import React from "react";
import restaurant from "../images/restaurant.jpg";

export default function BookingHeader() {
  return (
    <header className="mx-auto min-w-fit w-full max-w-[1440px] flex mt-10 font-display grid">
      <img
        src={restaurant}
        className="w-full col-start-1 row-start-1 mx-auto bg-dgreen h-[150px] object-cover"
      />
      <p className="h-fit text-mustard col-start-1 row-start-1 text-64 m-auto bg-dgreen px-6 py-3 rounded-2xl">
        Book Now
      </p>
    </header>
  );
}
