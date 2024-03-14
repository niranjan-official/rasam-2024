import Image from "next/image";
import React from "react";
import rasamFont from "@/public/images/rasam-font.svg"; 
import { MotionDiv, MotionH1, MotionSpan } from "../MotionComponent";
import HomePageDate from "../HomePageDate";

const Home = () => {
  const numbers = ["25", "|", "26", "|", "27"];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex justify-center items-center home-bg md:p-8 lg:p-16 lg:pl-28 lg:pr-16"
    >
      <div className="w-full h-full flex flex-col items-center justify-center pt-24">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-auto md:px-24 lg:px-56"
        >
          <Image
            className="opacity-65"
            src={rasamFont}
            height={0}
            width={0}
            alt="font"
            style={{ height: "auto", width: "100%" }}
          />
        </MotionDiv>

        <MotionH1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-red-100 text-md sm:text- lg:text-2xl home-hashtag"
        >
          #KelkanOru<span className="font-bold">Rasam</span>KananOru
          <span className="font-bold">Kothi</span>
        </MotionH1>
        <HomePageDate/>
      </div>
    </section>
  );
};

export default Home;
