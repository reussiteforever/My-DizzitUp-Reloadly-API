import React from "react";
import Logo from "../assets/logo.png";
import Isearch from "../assets/isearch.png";
import { Link } from "react-router-dom";



export const Navbar = () => {
    return (
<nav className="navbar inline-flex md:flex-row md:space-x-4 space-y-0 space-x-2 Section navbar-expand-lg TopBar absolute z-10 w-[100%] h-22 p-2 bg-transparent shadow justify-center items-center gap-[45px]">
<img className="Logo w-[3rem] h-[3rem], boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.25)' " 
        src={ Logo } 
        alt="Logo"
        />
    <div className="Title w-[416px] h-[34px] text-white text-3xl font-bold font-['Avenir LT Std'] leading-9">DizzitUp</div>
    <button
        className="navbar-toggler"
        type="button"
        onClick={() =>
          document.querySelector(".navbar-nav").classList.toggle("show")
        }
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
    <ul className="navbar-nav flex justify-center space-x-5">
        <li className="nav-item text-white font-normal text-md font-['Avenir LT Std'] leading-normal">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item text-white font-normal text-md font-['Avenir LT Std'] leading-normal">
            <Link to="/Airtime" className="nav-link">
              Airtime
            </Link>
          </li>
          <li className="nav-item text-white font-normal text-md font-['Avenir LT Std'] leading-normal">
            <Link to="/GiftCards" className="nav-link">
              Gift cards
            </Link>
          </li>
          <li className="nav-item text-white font-normal text-md font-['Avenir LT Std'] leading-normal">
            <Link to="/Bills" className="nav-link">
              Bills
            </Link>
          </li>
          <li className="nav-item text-white font-normal text-md font-['Avenir LT Std'] leading-normal">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
          </ul>
</div>
    <div className="flex Textfield z-10 h-7 w-40 p-1 rounded-md  bg-slate-50 border border-black border-opacity-10 justify-end items-right gap-1">
        <div className="Text grow shrink basis-0 text-black text-opacity-50 text-sm font-normal font-['Avenir LT Std'] leading-tight">Search in site</div>
        <div className="IcSearch w-5 h-5 relative  justify-end items-right"/>
        <img src={ Isearch } alt="search icon" />
    </div>
</nav>
);
};

