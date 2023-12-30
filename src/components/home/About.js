import React from "react";
import chefs1 from "../images/chefs1.jpg";
import chefs2 from "../images/chefs2.jpg";

export default function About() {
  return (
    <section className="w-full max-w-[1100px] mx-auto flex font-display mt-20 gap-10">
      <article>
        <p className="text-64">Little Lemon</p>
        <p className="text-40 mb-6">Chicago</p>
        <p className="max-w-[434px] text-xl mb-2">
          At Little Lemon, we pride ourselves on crafting authentic Italian
          dishes that pay homage to traditional recipes passed down through
          generations. Our skilled chefs use only the finest, freshest
          ingredients to create a symphony of flavors that transport you
          straight to the streets of Rome or the shores of Sicily.
        </p>
      </article>
      <section className="grid w-full max-w-[700px] h-[450px]">
        <img
          alt="Little Lemon Owners 1"
          className="col-start-1 row-start-1 object-scale-down w-full max-w-[450px] ml-auto"
          src={chefs1}
        />
        <img
          alt="Little Lemon Owners 2"
          className="col-start-1 row-start-1 object-scale-down w-full max-w-[450px] mt-auto"
          src={chefs2}
        />
      </section>
    </section>
  );
}
