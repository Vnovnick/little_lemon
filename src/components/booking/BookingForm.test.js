import BookingPage from "./BookingPage";
import { render, fireEvent, screen } from "@testing-library/react";

describe("test overall booking form functionality", () => {
  // render booking page and form
  render(<BookingPage />);

  test("Renders the BookingForm heading", () => {
    const headingElem = screen.getByText("Book Now");
  });
});
