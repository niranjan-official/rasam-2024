import React from "react";
import { MotionH1 } from "./MotionComponent";
import { Londrina_Outline } from "next/font/google";

const londrina = Londrina_Outline({ subsets: ["latin"], weight: "400" });

const RunningTheme = () => {
  return (
    <div
      className={`w-full h-max flex text-gray-500 py-8 pl-28 overflow-x-hidden`}
    >
      <MotionH1
        initial={{ x: "150%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="text-6xl font-bold whitespace-nowrap"
      >
        THE NEXT LEVEL !
      </MotionH1>
      <MotionH1
        initial={{ x: "150%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          delay: 7.5,
        }}
        className={`text-6xl font-bold whitespace-nowrap ${londrina}`}
      >
        THE NEXT LEVEL !
      </MotionH1>
    </div>
  );
};

export default RunningTheme;
