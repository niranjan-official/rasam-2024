"use client"
import React from "react";
import Heading from "../Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Events = () => {
  return (
    <section
      id="events"
      className="min-h-screen w-full px-4 md:px-10 lg:px-24 text-white"
    >
      <Heading title={"Events"} />
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>vine</CarouselItem>
            <CarouselItem>12</CarouselItem>
            <CarouselItem>7736</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
