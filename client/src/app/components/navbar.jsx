import React from "react";
import Logo from "../assets/logo.png";
import Isearch from "../assets/isearch.png";

export const Navbar = () => {
    return (
<div className="TopBar w-[100%] h-22 p-2 bg-custom-yellow shadow justify-center items-center gap-[45px] inline-flex">
<img className="Logo w-[77px] h-[82px], boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.24)' " 
        src={ Logo } 
        alt="Logo"Lato
        /> 
    <div className="Title w-[416px] h-[34px] text-black text-3xl font-medium font-['Lato'] leading-9">DizzitUp</div>
    <div className="Tab text-black font-normal text-xl font-['Lato'] leading-normal">Marketplace</div>
    <div className="Tab text-black font-normal text-xl font-['Lato'] leading-normal">Mobile Airtime </div>
    <div className="Tab text-black font-normal text-xl font-['Lato'] leading-normal">Bills</div>
    <div className="Tab text-black font-normal text-xl font-['Lato'] leading-normal">Gift cards</div>
    <div className="Tab text-black font-normal text-xl font-['Lato'] leading-normal">Contact</div>
    <div className="Textfield h-9 w-60 p-2 rounded-md  bg-slate-50 border border-black border-opacity-10 justify-end items-right gap-1 flex">
        <div className="Text grow shrink basis-0 text-black text-opacity-50 text-lg font-normal font-['Lato'] leading-tight">Search in site</div>
        <div className="IcSearch w-5 h-5 relative  justify-end items-right"/>
        <img src={ Isearch } alt="search icon" />
    </div>
</div>
);
};
