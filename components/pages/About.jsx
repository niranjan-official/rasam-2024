import React from "react";
import Heading from "../Heading";
import Counter from "../Counter";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full px-24">
      <Heading title={'About'}/>
      <div>
        <Counter/>
      </div>
    </section>
  );
};

export default About;
