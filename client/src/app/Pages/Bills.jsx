import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";

function Bills() {
  return (
    <div className="Container bg-primary-color">
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default Bills;