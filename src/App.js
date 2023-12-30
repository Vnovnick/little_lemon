import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import BookingPage from "./components/booking/BookingPage";
import ConfirmedBooking from "./components/booking/ConfirmedBooking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default App;
