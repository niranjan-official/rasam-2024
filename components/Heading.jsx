import React from "react";
import { MotionH1 } from "./MotionComponent";

const Heading = ({ title }) => {
  return (
    <MotionH1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    style={{fontWeight: '800'}} className="text-7xl md:text-8xl text-white text-center mt-8 mb-4 select-none">
      {title}
    </MotionH1>
  );
};

export default Heading;
