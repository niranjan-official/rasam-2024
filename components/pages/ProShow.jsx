import React from "react";
import Cards from "../Cards";
import { MotionH1 } from "./../MotionComponent";

const ProShow = () => {
  return (
    <section
      id="proshow"
      className="h-max md:min-h-screen w-full px-4 md:px-10 lg:px-24 z-10"
    >
      <MotionH1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ fontWeight: "800" }}
        className="text-6xl md:text-8xl text-white text-opacity-30 my-8 select-none"
      >
        Pro Show
      </MotionH1>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-2 md:mt-20 p-2 md:p-0">
        <div>
          <Cards />
        </div>
        <div className="hidden sm:block">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default ProShow;
