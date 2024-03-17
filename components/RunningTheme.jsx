import React from "react";
import { Londrina_Outline } from "next/font/google";

const londrina = Londrina_Outline({ subsets: ["latin"], weight: "400" });

const RunningTheme = () => {
  return (
    <div
      className={`w-full h-max ${londrina.className} flex text-zinc-500 py-8 lg:pl-28 overflow-x-hidden select-none`}
    >
      <marquee className="flex text-6xl md:text-8xl" behavior="" direction="">
        <h1>
          THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THE NEXT LEVEL 
        </h1>
      </marquee>
    </div>
  );
};

export default RunningTheme;
