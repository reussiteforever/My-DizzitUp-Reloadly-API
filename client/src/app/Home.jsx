import React from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function Home() {
  return (
    <div className="Container bg-primary-color">
      <div>
        <Navbar />
        <h1>Hello DizzitUP!</h1>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
