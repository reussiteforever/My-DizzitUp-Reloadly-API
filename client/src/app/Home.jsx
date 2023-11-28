import React from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";

function Home() {
  return (
    <div className="Container bg-primary-color">
      <div>
        <Navbar />
        <Hero />
        <div className="Section w-[100%] h-[796px] px-[170px] py-[60px] bg-primary-color justify-center items-center gap-[60px] inline-flex">
    <div className="Container grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
        <div className="Title w-[520px] text-center text-blue-950 text-[40px] font-bold font-['Avenir LT Std'] leading-[48px]">Top Up Mobile Airtime</div>
        <div className="Description w-[520px] text-center text-blue-950 text-base font-normal font-['Avenir LT Std'] leading-normal">Recharge your mobile, choose your preferred package to top up your airtime and data bundles.</div>
        <div className="Button justify-start items-start gap-3 inline-flex">
            <div className="Seconday w-40 p-3 rounded-lg border border-blue-950 flex-col justify-center items-center inline-flex">
                <div className="Title text-blue-950text-base font-medium font-['Avenir LT Std'] leading-normal">View All</div>
            </div>
            <div className="Primary w-40 p-3 bg-blue-950 rounded-lg flex-col justify-center items-center inline-flex">
                <div className="Title text-white text-base font-medium font-['Avenir LT Std'] leading-normal">Top Up</div>
            </div>
        </div>
        <div className="List self-stretch py-5 justify-center items-center gap-10 inline-flex">
            <div className="Card grow shrink basis-0 rounded-md border border-blue-950 border-opacity-10 flex-col justify-start items-center inline-flex">
                <div className="ImageContainer self-stretch h-[340px] justify-start items-start inline-flex">
                    <div className="Image w-[100%] h-[340px] relative bg-zinc-300 bg-opacity-50">
                        <div className="Title w-[308px] h-4 left-[16px] top-[162px] absolute text-center text-blue-950 text-xs font-normal font-['Avenir LT Std'] leading-none">Image of airtime package</div>
                        <div className="Tag px-2 py-1 left-0 top-0 absolute bg-blue-950 bg-opacity-5 rounded-tl-md rounded-br-md flex-col justify-center items-center inline-flex">
                            <div className="Text text-blue-950 text-xs font-medium font-['Avenir LT Std'] leading-none">Valid for 30 days</div>
                        </div>
                    </div>
                </div>
                <div className="TextContent self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
                    <div className="Title self-stretch text-blue-950 bg-white text-base font-normal font-['Avenir LT Std']leading-normal">Package 1</div>
                    <div className="Subtitle self-stretch text-blue-950 text-xl font-medium font-['Avenir LT Std'] leading-7">2 GB Data</div>
                </div>
            </div>
            <div className="Card grow shrink basis-0 rounded-md border border-blue-950 border-opacity-10 flex-col justify-start items-center inline-flex">
                <div className="ImageContainer wrap self-stretch h-[340px] justify-start items-start inline-flex">
                    <div className="Image w-[100%] h-[340px] relative bg-zinc-300 bg-opacity-50">
                        <div className="Title w-[308px] h-4 left-[16px] top-[162px] absolute text-center text-blue-950 text-xs font-normal font-['Avenir LT Std'] leading-none">Image of airtime package</div>
                        <div className="Tag px-2 py-1 left-0 top-0 absolute bg-blue-950 bg-opacity-5 rounded-tl-md rounded-br-md flex-col justify-center items-center inline-flex">
                            <div className="Text text-blue-950 text-xs font- font-['Avenir LT Std'] leading-none">Valid for 60 days</div>
                        </div>
                    </div>
                </div>
                <div className="TextContent self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
                    <div className="Title self-stretch text-blue-950 text-base font-normal font-['Avenir LT Std']leading-normal">Package 2</div>
                    <div className="Subtitle self-stretch text-blue-950 text-xl font-medium font-['Avenir LT Std'] leading-7">5 GB Data</div>
                </div>
            </div>
            <div className="Card grow shrink basis-0 rounded-md border border-blue-950 border-opacity-10 flex-col justify-start items-center inline-flex">
                <div className="ImageContainer self-stretch h-[340px] justify-start items-start inline-flex">
                    <div className="Image w-[100%] h-[340px] relative bg-zinc-300 bg-opacity-50">
                        <div className="Title w-[308px] h-4 left-[16px] top-[162px] absolute text-center text-blue-950 text-xs font-normal font-['Avenir LT Std'] leading-none">Image of airtime package</div>
                        <div className="Tag px-2 py-1 left-0 top-0 absolute bg-blue-950 bg-opacity-5 rounded-tl-md rounded-br-md flex-col justify-center items-center inline-flex">
                            <div className="Text text-blue-950 text-xs font-medium font-['Avenir LT Std'] leading-none">Valid for 90 days</div>
                        </div>
                    </div>
                </div>
                <div className="TextContent self-stretch h-20 p-3 flex-col justify-start items-start gap-1 flex">
                    <div className="Title self-stretch text-blue-950 text-base font-normal font-['Avenir LT Std'] leading-normal">Package 3</div>
                    <div className="Subtitle self-stretch text-blue-950 text-xl font-medium font-['Avenir LT Std'] leading-7">10 GB Data</div>
                </div>
            </div>
        </div>
    </div>
</div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
