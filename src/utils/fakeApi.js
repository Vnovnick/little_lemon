export const fetchApi = (date) => {
  const defaultTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const sliceAmount = Math.random() * (defaultTimes.length - 1) + 1;

  return defaultTimes.slice(0, sliceAmount);
};

export const submitApi = (formData) => {
  const bookings = localStorage.getItem("table Booking");
  const parsedData = bookings ? JSON.parse(bookings) : [];
  localStorage.setItem(
    "table Booking",
    JSON.stringify([...parsedData, formData])
  );
  return true;
};
