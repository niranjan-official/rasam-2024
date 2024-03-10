import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 style={{fontWeight: '800'}} className="text-7xl md:text-8xl text-white text-opacity-30 my-8">
      {title}
    </h1>
  );
};

export default Heading;
