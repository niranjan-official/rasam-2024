import React from "react";
import Heading from "../Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay"
import CarouselBody from "../CarouselBody";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen w-full px-4 md:px-10 lg:px-24"
    >
      <Heading title={"Gallery"} />
      <div className="flex justify-center items-center py-8">
      <CarouselBody/>
      </div>
    </section>
  );
};

export default Gallery;
