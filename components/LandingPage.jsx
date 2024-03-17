"use client";
import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="h-screen w-full fixed bg-black z-50 top-0 left-0 ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="">
          <Image
            src={"/video/rasamfinal.gif"}
            width={900}
            height={900}
            alt="land"
            
          />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
