import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../app/Pages/Home";
import Bills from "../app/Pages/Bills";
import './globals.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Bills" element={<Bills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
