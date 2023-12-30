import React from "react";
import chefImg from "../images/restauranfood.jpg";

export default function HomeHeader() {
  return (
    <header className="mx-auto min-w-fit w-full max-w-[1440px] flex mt-10 font-display grid">
      <div className="w-full col-start-1 row-start-1 mx-auto bg-dgreen h-[330px] hidden 820:block" />
      <section className="w-[900px] col-start-1 row-start-1 mx-auto hidden 820:flex">
        <img
          className="w-[270px] h-[330px] rounded-3xl ml-auto mr-5 mt-7"
          src={chefImg}
          alt="Chef with Shrimp"
        />
      </section>
      <section className="flex w-full col-start-1 row-start-1 py-7 bg-dgreen 820:bg-transparent">
        <article className="text-white 820:w-[900px] mx-auto">
          <p className="text-mustard text-64">Little Lemon</p>
          <p className="text-40 mb-6">Chicago</p>
          <p className="max-w-[434px] text-xl mb-2">
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
          <button className="rounded-2xl bg-mustard text-black text-xl px-3 py-1">
            Reserve a Table
          </button>
        </article>
      </section>
    </header>
  );
}
