import React from "react";

export const Hero = () => {
  return (
    <div className="Section w-[100%] h-[312px] px-[170px] py-[60px] bg-primary-color items-center gap-[60px] inline-flex">
    <div className="Container grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
        <div className="Title w-[520px] text-center text-blue-950 text-[40px] font-bold font-['Avenir LT Std'] leading-[48px]">Welcome to Dizzitup</div>
        <div className="Description w-[520px] text-center text-blue-950 text-base font-normal font-['Avenir LT Std'] leading-normal">Handle your airtime refills, settle your bills, and and delight your loved ones with gift cards all without any boundaries.</div>
        <div className="Button justify-start items-start gap-3 inline-flex">
            <div className="Seconday w-40 p-3 rounded-lg border border-custom-blue flex-col justify-center items-center inline-flex">
                <div className="Title text-blue-950 text-base font-medium font-['Avenir LT Std'] leading-normal">Sign In</div>
            </div>
            <div className="Primary w-40 p-3 bg-custom-blue rounded-lg flex-col justify-center items-center inline-flex">
                <div className="Title text-white text-base font-medium font-['Avenir LT Std'] leading-normal">Login</div>
            </div>
        </div>
    </div>
</div>
  );
};