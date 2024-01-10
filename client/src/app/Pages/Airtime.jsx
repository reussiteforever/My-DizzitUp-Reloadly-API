import React from "react";
import TopUpForm from "../components/TopUpForm";
import BalanceComponent from "../components/balanceComponent";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

function Airtime() {
  return (
    <div className="Container bg-primary-color">
      <div className=" items-center justify-center">
      <Navbar />
      <TopUpForm />
      <BalanceComponent />
      <Footer />
      </div>
    </div>
  );
}

export default Airtime;



