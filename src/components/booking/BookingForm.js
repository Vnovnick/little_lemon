import React, { useState } from "react";

export default function BookingForm({
  availableTimes,
  date,
  setDate,
  dispatchTimes,
}) {
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="grid max-w-[300px] gap-[20px] m-auto bg-dgreen p-10 font-body rounded-2xl"
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date" className="text-white font-bold">
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatchTimes({ type: "changed_date" });
        }}
      />
      <label htmlFor="res-time" className="text-white font-bold">
        Choose time
      </label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests" className="text-white font-bold">
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion" className="text-white font-bold">
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button
        type="submit"
        className="px-5 py-1 bg-mustard rounded-2xl"
        data-testid="reservation-button"
      >
        Make Your Reservation
      </button>
    </form>
  );
}
