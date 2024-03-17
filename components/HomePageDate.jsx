'use client'
import { motion } from 'framer-motion'
import React from 'react'

const HomePageDate = () => {
    const numbers = ["25", "|", "26", "|", "27"];
    return (
        <div className="flex flex-col items-center text-white gap-3 p-1 mt-10">

            <h1 className="text-3xl sm:text-5xl font-serif">
              
                {numbers.map((number, index) => (
                    <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 2, 1] }}
                        transition={{ duration: 0.5, delay: 5+(index * 0.08) }}
                        style={{ display: "inline-block", marginRight: "0.5rem" }}
                        className="select-none"
                    >
                        {number}
                    </motion.span>
                ))}
            </h1>
                <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut", delay:5 }}
                    className="text-2xl sm:text-4xl pl-4 font-bold select-none"
                    style={{ letterSpacing: "22px" }}
                >
                    MARCH
                </motion.span>
        </div>
    )
}

export default HomePageDate
