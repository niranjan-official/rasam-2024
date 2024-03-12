import Image from "next/image";
import React from "react";
import rasamFont from "@/public/images/rasam-font.svg";
import Counter from "../Counter";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex justify-center home-bg md:p-8 lg:p-16 lg:pl-28 lg:pr-16"
    >
      <div className="w-full h-full flex flex-col items-center justify-center pt-24">
        
        <div className="w-full h-auto md:px-56">
          <Image
            className="opacity-65"
            src={rasamFont}
            height={0}
            width={0}
            alt="font"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        
        <h1
          className="text-red-100 text-md sm:text-3xl home-hashtag"
        
        >
          #KelkanOru<span className="font-bold">Rasam</span>KananOru<span className="font-bold">Kothi</span>
        </h1>
        <div className="flex flex-col items-center text-white gap-3 p-1 mt-10">
          <h1 className="text-3xl sm:text-5xl date-font">25 | 26 | 27</h1>
          <h2 className="text-2xl sm:text-4xl pl-4 amita-regular" style={{ letterSpacing: "22px" }}>
            MARCH
          </h2>
          {/* <Counter/> */}
        </div>
        {/* <button className="button mt-5">Register Now</button> */}
      </div>
    </section>
  );
};

export default Home;
