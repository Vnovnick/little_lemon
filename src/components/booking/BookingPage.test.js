import { memoryRouterWrapper } from "../../TestWrapper";
import BookingPage from "./BookingPage";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { fetchApi } from "../../utils/fakeApi";
import dayjs from "dayjs";

describe("check BookingPage form and states", () => {
  test("Renders the BookingForm heading", () => {
    render(memoryRouterWrapper("/booking", <BookingPage />));
    const headingElem = screen.getByText("Book Now");
    expect(headingElem).toBeInTheDocument();
  });

  test("User can submit Booking form", () => {
    render(
      memoryRouterWrapper(
        "/booking",
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          date={new Date()}
          setDate={() => {}}
          dispatchTimes={() => {}}
          submitForm={() => true}
        />
      )
    );
    const guestAmount = "4";
    const guestsInput = screen.getByLabelText(/No. of guests/i);
    fireEvent.change(guestsInput, { target: { value: guestAmount } });
    expect(guestsInput.value).toEqual(guestAmount);

    const submitButton = screen.getByTestId("reservation-button");
    fireEvent.click(submitButton);
  });

  test("Validates useReducer values", () => {
    const date = dayjs().format("YYYY-MM-DD");
    const initialState = fetchApi(date);
    expect(initialState).toBeTruthy();

    const updateTimes = (state, action) => {
      switch (action.type) {
        case "changed_date":
          return fetchApi(date);
        default:
          return state;
      }
    };
    expect(updateTimes(initialState, { type: "changed_date" })).toBeTruthy();
  });

  test("test form validations", () => {
    const validDate = dayjs();
    const invalidDate = dayjs().subtract(1, "day");
    const validTime = "17:00";
    const invalidTime = null;
    const validGuests = 4;
    const invalidGuests = 0;
    const validOccasion = "Birthday";
    const invalidOccasion = null;

    const validCheck = (
      selectedDate,
      selectedTime,
      selectedGuests,
      selectedOccasion
    ) =>
      (dayjs(selectedDate).isSame(dayjs()) ||
        dayjs(selectedDate).isAfter(dayjs())) &&
      selectedTime &&
      selectedGuests >= 0 &&
      selectedOccasion;

    expect(
      validCheck(validDate, validTime, validGuests, validOccasion)
    ).toBeTruthy();
    expect(
      validCheck(invalidDate, invalidTime, invalidGuests, invalidOccasion)
    ).toBeFalsy();
    expect(
      validCheck(invalidDate, validTime, validOccasion, invalidOccasion)
    ).toBeFalsy();
  });
});
