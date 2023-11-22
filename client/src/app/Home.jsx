import React from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";

function Home() {
  return (
    <div className="Container bg-primary-color">
      <div>
        <Navbar />
        <Hero />
        <h1>Hello DizzitUP!</h1>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
