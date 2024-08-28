"use client";
import { motion } from "framer-motion";
import React from "react";
import { Yeseva_One } from "next/font/google";
const yeseva = Yeseva_One({ subsets: ["latin"], weight: "400" });

const HomePageDate = () => {
  const numbers = ["25", "|", "26", "|", "27"];
  return (
    <div className="flex flex-col items-center text-white gap-1 sm:gap-3 p-1 mt-10">
      <p className={`flex gap-2 text-4xl sm:text-5xl ${yeseva.className}`}>
        {numbers.map((number, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 2, 1] }}
            transition={{ duration: 0.5, delay: 5 + index * 0.08 }}
            style={{ display: "inline-block" }}
            className="select-none"
          >
            {number}
          </motion.span>
        ))}
      </p>
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 5 }}
        className="text-2xl sm:text-4xl pl-4 font-bold select-none tracking-[22px]"
      >
        MARCH
      </motion.span>
    </div>
  );
};

export default HomePageDate;
