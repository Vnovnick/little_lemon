import React, { useReducer, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import BookingForm from "./BookingForm";
import BookingHeader from "./BookingHeader";
import { fetchApi, submitApi } from "../../utils/fakeApi";
import dayjs from "dayjs";

export default function BookingPage() {
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "changed_date":
        return fetchApi(date);
      default:
        return state;
    }
  };
  const initializeTimes = (selectedDate) => fetchApi(selectedDate);
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    initializeTimes(date)
  );

  const submitForm = (formData) => submitApi(formData);
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <BookingHeader />
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        date={date}
        setDate={setDate}
        submitForm={submitForm}
      />
      <Footer />
    </div>
  );
}
