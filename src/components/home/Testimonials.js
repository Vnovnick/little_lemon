import React from "react";
import { testimonials } from "../definitions/homePageDefinitions";
import StarRatings from "./StarRatings";

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1440px] flex mt-10 font-display text-center bg-dgreen py-24 flex flex-col items-center">
      <p className="text-40 text-mustard mb-5">Testimonials</p>
      <section className="grid 820:grid-cols-3 gap-5">
        {testimonials.map((data) => (
          <section
            className="w-64 h-64 bg-[#EDEFEE] p-5 rounded-2xl"
            key={data.name}
          >
            <StarRatings ratingWidth={data.rating} />
            <div className="flex items-center gap-6">
              <img
                className="w-32 h-32 object-cover rounded-2xl"
                alt={`${data.name} profile`}
                src={data.img}
              />
              <p className="text-2xl">{data.name}</p>
            </div>
            <p className="text-left text-xl">{data.review}</p>
          </section>
        ))}
      </section>
    </section>
  );
}
