import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="text-7xl font-bold md:text-8xl text-white text-opacity-20 my-8">
      {title}
    </h1>
  );
};

export default Heading;
