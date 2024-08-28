"use client";
import React from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative h-max w-full flex flex-col items-center text-center px-4 md:px-10 lg:px-28 pt-12 pb-16 about-bg z-10"
    >
      <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-b from-transparent to-black"></div>

      <Heading title={"About Rasam"} />
      <div className="w-full h-max flex flex-col items-center text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-white flex sm:text-2xl"
        >
          Welcome to &nbsp;<h1 className="text-secondary font-bold">RASAM</h1>
          <span className="text-secondary font-bold">&nbsp;2024</span>
        </motion.span>
        <p className="mt-2 text-neutral-50 sm:text-2xl">
          RASAM, an esteemed annual extravaganza, unites a tapestry of students,
          professionals, and enthusiasts across myriad domains, igniting the
          stage with their ingenuity, fueling innovation, and reveling in the
          essence of creativity.In its fifth edition, RASAM transcended boundaries, drawing
          participants from distant horizons. Entering its fifth spectacular
          season, RASAM stands as a beacon of creativity, uniting talents,
          professionals, and enthusiasts in a grand celebration of innovation
          and expression. RASAM promises a captivating voyage through an
          enchanting world of imagination, with an exhilarating lineup of events
          and proshows that promise to leave an indelible mark on all who
          participate.
        </p>
      </div>
    </section>
  );
};

export default About;
