"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ReactResCarousel = ({ images }) => {
  const CarouselImages = images?.images?.image;
  console.log(CarouselImages, "here");
  return (
    <div className="h-full w-full ">
      <Carousel className="carousel-style" >
        {CarouselImages.map((obj, index) => (
          <div className="w-1/2 h-1/2">
            <Image
              width={300}
              height={300}
              src={obj}
              key={index}
              alt="..."
              className="hover:scale-110 transition duration-200 cursor-pointer  flex justify-center items-center "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReactResCarousel;
