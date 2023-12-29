import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}
