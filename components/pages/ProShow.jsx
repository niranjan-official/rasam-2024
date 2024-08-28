import React from "react";
import Cards from "../Cards";
import Heading from "../Heading";

const ProShow = () => {
  return (
    <section
      id="proshow"
      className="h-max md:min-h-screen w-full px-4 md:px-10 lg:px-24 z-10"
    >
      <Heading title={"Pro Show"} />
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-2 md:mt-8 p-2 md:p-0">
        <div>
          <Cards />
        </div>
        <div className="hidden sm:block">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default ProShow;
