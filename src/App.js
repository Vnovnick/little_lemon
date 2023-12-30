import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import BookingPage from "./components/booking/BookingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
