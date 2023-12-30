import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

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
  const [dateError, setDateError] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [guestsError, setGuestsError] = useState(null);
  const [occasionError, setOccasionError] = useState(null);
  const navigate = useNavigate();
  const errorStyle = "bg-red-200 text-red-700 px-2 rounded-xl";

  const valid = {
    date: false,
    time: false,
    guests: false,
    occasion: false,
  };

  const validateDate = (selectedDate) => {
    valid.date = true;
    if (dayjs(selectedDate).isBefore(dayjs())) {
      valid.date = false;
      setDateError("Invalid date");
    }
  };

  const validateTime = (selectedTime) => {
    valid.time = true;
    if (!selectedTime) {
      valid.time = false;
      setTimeError("Invalid Time");
    }
  };

  const validateGuests = (selectedGuests) => {
    valid.guests = true;
    if (selectedGuests <= 0) {
      valid.guests = false;
      setGuestsError("Invalid Guests");
    }
  };

  const validateOccasion = (selectedOccasion) => {
    valid.occasion = true;
    if (!selectedOccasion) {
      valid.occasion = false;
      setOccasionError("Invalid Occasion");
    }
  };

  const formIsValid = () =>
    valid.date && valid.time && valid.guests && valid.occasion;

  const handleSubmit = (e) => {
    e.preventDefault();

    validateDate(date);
    validateTime(time);
    validateGuests(guests);
    validateOccasion(occasion);

    if (formIsValid && submitForm({ date, time, guests, occasion })) {
      navigate("/booking-confirmed");
    }
  };

  return (
    <form
      className="grid w-full max-w-[320px] gap-[20px] m-auto bg-dgreen p-10 font-body rounded-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between">
        <label htmlFor="res-date" className="text-white font-bold">
          Choose date
        </label>
        {dateError && <p className={errorStyle}>{dateError}</p>}
      </div>
      <input
        type="date"
        id="res-date"
        name="dateInput"
        value={date}
        onChange={(e) => {
          setDateError(null);
          setDate(e.target.value);
          dispatchTimes({ type: "changed_date" });
        }}
        onBlur={(e) => {
          validateDate(e.target.value);
        }}
      />
      <div className="flex items-center justify-between">
        <label htmlFor="res-time" className="text-white font-bold">
          Choose time
        </label>
        {timeError && <p className={errorStyle}>{timeError}</p>}
      </div>
      <select
        id="res-time"
        name="timeInput"
        value={time}
        onChange={(e) => {
          setTimeError(null);
          setTime(e.target.value);
        }}
        onBlur={(e) => {
          validateTime(e.target.value);
        }}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <div className="flex items-center justify-between">
        <label htmlFor="guests" className="text-white font-bold">
          No. of guests
        </label>
        {guestsError && <p className={errorStyle}>{guestsError}</p>}
      </div>
      <input
        type="number"
        name="guestInput"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => {
          setGuestsError(null);
          setGuests(e.target.value);
        }}
        onBlur={(e) => {
          validateGuests(e.target.value);
        }}
      />

      <div className="flex items-center justify-between">
        <label htmlFor="occasion" className="text-white font-bold">
          Occasion
        </label>
        {occasionError && <p className={errorStyle}>{occasionError}</p>}
      </div>
      <select
        id="occasion"
        name="occasionInput"
        value={occasion}
        onChange={(e) => {
          setOccasionError(null);
          setOccasion(e.target.value);
        }}
        onBlur={(e) => {
          validateOccasion(e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button
        type="submit"
        className="px-5 py-1 bg-mustard rounded-2xl font-bold"
        data-testid="reservation-button"
        aria-label="On Click Reserve"
      >
        Make Your Reservation
      </button>
    </form>
  );
}
