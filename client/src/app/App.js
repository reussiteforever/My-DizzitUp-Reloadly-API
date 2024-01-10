import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../app/Pages/Home";
import Bills from "../app/Pages/Bills";
import Airtime from "../app/Pages/Airtime";
import GiftCards from "../app/Pages/Giftcards";
import Contact from "../app/Pages/Contact";
import "./globals.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Bills" element={<Bills />} />
          <Route exact path="/Airtime" element={<Airtime />} />
          <Route exact path="/GifCards" element={<GiftCards />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
