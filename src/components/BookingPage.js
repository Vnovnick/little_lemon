import React, { useReducer, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const updateTimes = () => {};

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]);
  return (
    <div className="flex flex-col">
      <Nav />
      <BookingForm
        availableTimes={availableTimes}
        date={date}
        setDate={setDate}
      />
      <Footer />
    </div>
  );
}
