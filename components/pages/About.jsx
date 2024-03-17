import React from "react";
import Heading from "../Heading";
import Counter from "../Counter";
import { MotionH1 } from "../MotionComponent";

const About = () => {
  return (
    <section
      id="about"
      className="h-max w-full px-4 md:px-10 lg:px-28 about-bg"
    >
      <Heading title={"About"} />
      <div className="w-full h-max flex flex-col md:flex-row ">
        <div className="md:w-1/2 flex flex-col py-4">
          <MotionH1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-white poppins-medium select-none"
          >
            Welcome to <span className="text-secondary font-bold">RASAM </span>
            <span className="text-secondary font-bold">2024</span>
          </MotionH1>
          <p className="text-white poppins-medium mt-4 text-justify md:text-left lg:pr-8 leading-relaxed lg:leading-loose select-none">
            RASAM, an esteemed annual extravaganza, unites a tapestry of
            students, professionals, and enthusiasts across myriad domains,
            igniting the stage with their ingenuity, fueling innovation, and
            reveling in the essence of creativity. </p>
            <p className="text-white poppins-medium mt-4 text-justify md:text-left lg:pr-8 leading-relaxed lg:leading-loose select-none">
             {" "}In its fifth edition, RASAM
            transcended boundaries, drawing participants from distant horizons.
            Entering its fifth spectacular season, RASAM stands as a beacon of
            creativity, uniting talents, professionals, and enthusiasts in a
            grand celebration of innovation and expression. RASAM promises a
            captivating voyage through an enchanting world of imagination, with
            an exhilarating lineup of events and proshows that promise to leave
            an indelible mark on all who participate.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center pt-8 text-white select-none">
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
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default About;
