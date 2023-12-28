import React from "react";
import TopUpForm from "../components/TopUpForm";
import BalanceComponent from "../components/balanceComponent";

// import { Navbar } from "../components/navbar";
// import { Footer } from "../components/footer";
// import { Hero } from "../components/hero";

function Airtime() {
  return (
    <div className="Container bg-primary-color">
      <div >
      <BalanceComponent />
      <TopUpForm />
      </div>
    </div>
  );
}

export default Airtime;



