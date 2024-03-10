import Image from "next/image";
import React from "react";
import rasamFont from "../../public/images/rasam-font.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex justify-center md:p-8 lg:p-16 lg:pl-28 lg:pr-16"
    >
      <div className="hidden md:block">
        <div className="w-full h-full flex flex-col items-center justify-center main-bg">
          <div className="w-full h-auto md:px-56">
            <Image
              className="opacity-45"
              src={rasamFont}
              height={0}
              width={0}
              alt="font"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <h1
            className="text-gray-200 text-3xl"
            style={{ letterSpacing: "10px" }}
          >
            SEASON-5
          </h1>
          <button className="button mt-5">Register Now</button>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center drop-shadow-md shadow-black md:hidden">
        <div className="w-full h-auto md:px-56">
          <Image
            className="opacity-45"
            src={rasamFont}
            height={0}
            width={0}
            alt="font"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <h1
          className="text-gray-200 text-3xl"
          style={{ letterSpacing: "10px" }}
        >
          SEASON-5
        </h1>
        <button className="button mt-5">Register Now</button>
      </div>
    </section>
  );
};

export default Home;
