import salad from "../images/greekSalad.jpg";
import bread from "../images/bread.jpg";
import cake from "../images/lemon dessert.jpg";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import woman1 from "../images/woman1.jpg";
import woman2 from "../images/woman2.jpg";

export const specials = [
  {
    image: salad,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of creipsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bread,
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: cake,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const testimonials = [
  {
    rating: "50%",
    name: "John",
    img: man1,
    review: "Great Service and even better food!",
  },
  {
    rating: "100%",
    name: "Laura",
    img: woman1,
    review: "Great for both delivery or dine in!",
  },
  {
    rating: "80%",
    name: "Greg",
    img: man2,
    review: "Loved the food and am looking forward to coming back!",
  },
  {
    rating: "100%",
    name: "Jane",
    img: woman2,
    review: "Great experience with the staff and loved every dish we had!",
  },
];

export const navButtonStyling =
  "hover:bg-dgreen p-2 rounded-xl border border-transparent hover:border-black hover:text-white";
