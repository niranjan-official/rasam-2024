import React from "react";
import { MotionH1 } from "./MotionComponent";
import { Londrina_Outline } from "next/font/google";

const londrina = Londrina_Outline({ subsets: ["latin"], weight: "400" });

const RunningTheme = () => {
  return (
    <div
      className={`w-full h-max ${londrina.className} flex text-gray-500 py-8 pl-28 overflow-x-hidden`}
    >
      <MotionH1
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-6xl whitespace-nowrap"
      >
        THE NEXT LEVEL ! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </MotionH1>
      <MotionH1
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
      
        }}
        className={`text-6xl whitespace-nowrap ml-2 ${londrina}`}
      >
        THE NEXT LEVEL !
      </MotionH1>
    </div>
  );
};

export default RunningTheme;
