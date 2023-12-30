import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import BookingPage from "./components/booking/BookingPage";
import ConfirmedBooking from "./components/booking/ConfirmedBooking";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
