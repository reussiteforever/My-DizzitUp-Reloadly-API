import React from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

function Bills() {
  return (
    <div className="flex flex-col min-h-screen bg-custom-yellow">
      <Navbar className="z-10" />

      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl text-white">This is the Payment Bills page</h1>
      </div>

      

      <Footer />
    </div>
  );
}

export default Bills;