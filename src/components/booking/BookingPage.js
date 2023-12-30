import React, { useReducer, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import BookingForm from "./BookingForm";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "changed_date":
        return state;
      default:
        return state;
    }
  };
  const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        date={date}
        setDate={setDate}
      />
      <Footer />
    </div>
  );
}
