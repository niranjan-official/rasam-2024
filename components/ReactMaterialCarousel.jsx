"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const ReactMaterialCarousel = ({ images }) => {
  const CarouselImages = images?.images?.image;
  console.log(CarouselImages[1]);
  return (
    <div className="h-auto w-full md:w-1/2 ">
      <Carousel
        autoPlay={true}
        stopAutoPlayOnHover={true}
        interval={3000}
        indicators={false}
        navButtonsAlwaysVisible={true}
        duration={1000}
      >
        {CarouselImages.map((obj, index) => (
          <Image
            src={obj}
            width={900}
            height={900}
            className="rounded-3xl w-full h-auto "
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ReactMaterialCarousel;
