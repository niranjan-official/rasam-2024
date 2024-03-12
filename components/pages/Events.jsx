import React from "react";
import Heading from "../Heading";
import ReactCarousel from "../ReactCarousel";

const Events = ({ images }) => {
  return (
    <section
      id="events"
      className="h-max w-full px-4 md:px-10 lg:px-24 text-white"
    >
      <Heading title={"Events"} />
      <div className="w-full flex justify-center items-center py-8">
        <ReactCarousel
          images={images} />
      </div>
    </section>
  );
};

export default Events;
