import React from "react";
import Heading from "../Heading";
import Counter from "../Counter";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full px-4 md:px-10 lg:px-24">
      <Heading title={'About'}/>
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
          <Counter/>
        </div>
      </div>
    </section>
  );
};

export default About;
