"use client";
import React, { useEffect, useState } from "react";
const Counter = () => {
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [mins, setmins] = useState(0);
  const [secs, setsecs] = useState(0);

  const deadline = "March, 25, 2024";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
    sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setmins(Math.floor((time / 1000 / 60) % 60));
    setsecs(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="w-full h-max lg:min-h-screen flex flex-col md:flex-row ">
        <div className="md:w-1/2 flex flex-col py-4">
          <h2 className="text-white poppins-medium">
            Welcome to <span className="text-secondary font-bold">RASAM {" "}</span>
            <span className="text-secondary font-bold">2024</span>
          </h2>
          <p className="text-white poppins-medium mt-4 text-justify md:text-left lg:pr-8 leading-relaxed lg:leading-loose">
            RASAM is the flagship event of Providence college of enginering and
            school of buisness. It gives aspiring managers a taste of challenges
            to come and attracts the most talented and competitive management
            students from various parts of the country. This international fest
            tests the budding professionals on various aspects of teamwork,
            logical thinking, analytical and mental grit. RASAM’24 will be
            conducted offline as enthusiastically as last year with high spirits
            of the students.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center pt-8 text-white">
          <div className="poppins-medium flex items-center lg:text-xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
            <p className="text-2xl poppins-regular">Countdown</p>
          </div>
          <div className=" flex flex-row text-white  poppins-semibold">
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl md:text-4xl lg:text-7xl">
                {days < 10 ? "0" + days : days}
              </div>
              <p className="underline text-xs text-secondary">Days</p>
            </div>

            <p className="text-3xl md:text-4xl lg:text-7xl ml-2 mr-2">:</p>

            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl md:text-4xl lg:text-7xl">
                {hours < 10 ? "0" + hours : hours}
              </div>

              <p className="underline text-xs text-secondary">Hours</p>
            </div>

            <p className="text-3xl md:text-4xl lg:text-7xl ml-2 mr-2">:</p>

            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl md:text-4xl lg:text-7xl">
                {mins < 10 ? "0" + mins : mins}
              </div>

              <p className="underline text-xs text-secondary">Minutes</p>
            </div>

            <p className="text-3xl md:text-4xl lg:text-7xl ml-2 mr-2">:</p>

            <div className="flex flex-col justify-center items-center">
              <div className=" text-3xl md:text-4xl lg:text-7xl">
                {secs < 10 ? "0" + secs : secs}
              </div>

              <p className="underline text-xs text-secondary">Seconds</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Counter;
