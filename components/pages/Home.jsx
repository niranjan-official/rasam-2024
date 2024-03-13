import Image from "next/image";
import React from "react";
import rasamFont from "@/public/images/rasam-font.svg";
import Counter from "../Counter";
import { MotionDiv, MotionH1, MotionSpan } from "../MotionComponent";

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
        <div className="flex flex-col items-center text-white gap-3 p-1 mt-10">
          <h1 className="text-3xl sm:text-5xl font-serif">
            {numbers.map((number, index) => (
              <MotionSpan
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: index + 1 * 0.1 }}
                style={{ display: "inline-block", marginRight: "0.5rem" }}
              >
                {number}
              </MotionSpan>
            ))}
          </h1>

          <MotionH1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" , delay: 4}}
            className="text-2xl sm:text-4xl pl-4 font-bold"
            style={{ letterSpacing: "22px" }}
          >
            MARCH
          </MotionH1>
        </div>
      </div>
    </section>
  );
};

export default Home;
