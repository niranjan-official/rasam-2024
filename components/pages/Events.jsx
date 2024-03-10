"use client";
import React from "react";
import Heading from "../Heading";
import CarouselBody from "../CarouselBody";

const Events = ({ images }) => {
  return (
    <section
      id="events"
      className="min-h-screen w-full px-4 md:px-10 lg:px-24 text-white"
    >
      <Heading title={"Events"} />
      <div className="flex justify-center items-center py-8">
      <CarouselBody images={images}/>
      </div>
    </section>
  );
};

export default Events;
