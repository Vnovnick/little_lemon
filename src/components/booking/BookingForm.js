import React, { useState } from "react";
import { submitApi } from "../../utils/fakeApi";
import { useNavigate } from "react-router-dom";

export default function BookingForm({
  availableTimes,
  date,
  setDate,
  dispatchTimes,
  submitForm,
}) {
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitForm({ date, time, guests, occasion })) {
      navigate("/booking-confirmed");
    }
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
        name="dateInput"
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
        name="timeInput"
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
        name="guestInput"
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
        name="occasionInput"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button
        type="submit"
        className="px-5 py-1 bg-mustard rounded-2xl font-bold"
        data-testid="reservation-button"
      >
        Make Your Reservation
      </button>
    </form>
  );
}
