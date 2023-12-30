import React from "react";
import Nav from "../Nav";
import HomeHeader from "./HomeHeader";
import Footer from "../Footer";
import { specials } from "../definitions/homePageDefinitions";
import SpecialCards from "./SpecialCards";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Nav />
      <HomeHeader />
      <main className="w-full max-w-[900px] mx-auto">
        <section className="flex text-64 font-display justify-between items-center mt-5">
          <p>This weeks specials!</p>
          <button className="rounded-2xl bg-mustard text-black text-xl px-6 py-1 h-fit">
            Online Menu
          </button>
        </section>
        <section className="grid grid-cols-1 min-w-[200px] w-full max-w-[400px] 820:max-w-full 820:grid-cols-3 gap-5 mx-auto">
          {specials.map((card) => (
            <SpecialCards key={card.name} card={card} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
