import React from "react";
import Logo from "../assets/logo.png";
import Isearch from "../assets/isearch.png";

export const Navbar = () => {
    return (
<div className="TopBar absolute z-10 w-[100%] h-22 p-2 bg-transparent bg-custom-yellow shadow justify-center items-center gap-[45px] inline-flex">
<img className="Logo w-[77px] h-[82px], boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.25)' " 
        src={ Logo } 
        alt="Logo"
        /> 
    <div className="Title w-[416px] h-[34px] text-white text-3xl font-bold font-['Avenir LT Std'] leading-9">DizzitUp</div>
    <div className="Tab text-white font-normal text-2xl font-['Avenir LT Std'] leading-normal">Marketplace</div>
    <div className="Tab text-white font-normal text-2xl font-['Avenir LT Std'] leading-normal">Bills</div>
    <div className="Tab text-white font-normal text-2xl font-['Avenir LT Std'] leading-normal">Mobile Airtime </div>
    <div className="Tab text-white font-normal text-2xl font-['Avenir LT Std'] leading-normal">Gift cards</div>
    <div className="Tab text-white font-normal text-2xl font-['Avenir LT Std'] leading-normal">Contact</div>
    <div className="Textfield z-10 h-9 w-60 p-2 rounded-md  bg-slate-50 border border-black border-opacity-10 justify-end items-right gap-1 flex">
        <div className="Text grow shrink basis-0 text-black text-opacity-50 text-lg font-normal font-['Avenir LT Std'] leading-tight">Search in site</div>
        <div className="IcSearch w-5 h-5 relative  justify-end items-right"/>
        <img src={ Isearch } alt="search icon" />
    </div>
</div>
);
};
