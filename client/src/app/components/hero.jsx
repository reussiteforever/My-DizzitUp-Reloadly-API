import React from "react";
import womenImage from '../assets/women1.jpg';

export const Hero = () => {

    const backgroundStyle = {
        backgroundImage: `url(${womenImage})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        
         };
      
  return (
    
    <div className="Section w-[100vw] h-[100vh] px-[170px] py-[60px] items-center gap-[60px] inline-flex" style={ backgroundStyle }>
     <div className="absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-200" style={{ mixBlendMode: 'multiply' }}></div>
    
    <div className="Container grow shrink basis-0 flex-col z-0 justify-start items-center gap-6 inline-flex">
        <div className="Title w-[800px] text-center text-white text-[40px] font-bold font-['Avenir LT Std'] leading-[48px]">Welcome to Dizzitup</div>
        <div className="Description w-[520px] text-center text-white text-base font-normal font-['Avenir LT Std'] leading-normal">Handle your airtime refills, settle your bills, and and delight your loved ones with gift cards all without any boundaries.</div>
       
        <div className="Button justify-start items-start gap-3 inline-flex">
            <div className="Seconday w-20 p-3 rounded-lg border border-white flex-col justify-center items-center inline-flex">
                <div className="Title text-white text-base font-bold font-['Avenir LT Std'] leading-normal">Sign In</div>
            </div>
            <div className="Primary w-20 p-3 bg-custom-blue rounded-lg flex-col justify-center items-center inline-flex">
                <div className="Title text-white text-base font-medium font-['Avenir LT Std'] leading-normal">Login</div>
            </div>
        </div>
    </div>
</div>
  );
};

