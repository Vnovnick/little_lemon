import React from "react";

export default function SpecialCards({ card }) {
  return (
    <section className="flex flex-col max-w-[400px]">
      <img src={card.image} alt={card.name} className="rounded-t-2xl" />
      <section className="bg-[#EDEFEE] pt-5 px-6 h-[300px] flex flex-col">
        <section className="flex justify-between font-bold flex-wrap">
          <p className="">{card.name}</p>
          <p className="text-[#EE9972]">{card.price}</p>
        </section>
        <p className="mt-5">{card.description}</p>
        <button type="button" className="mt-auto mr-auto mb-5">
          Order a delivery
        </button>
      </section>
    </section>
  );
}
