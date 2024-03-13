"use client";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import { obj } from "../public/images/hellsweeper.jpg"

const BoostrapCarousel = () => {
  return (
    <div>
      <CCarousel controls>
        <CCarouselItem>
          <CImage className="d-block w-100" src="../public/images/hellsweeper.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="../public/images/hellsweeper.jpg" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="../public/images/hellsweeper.jpg" alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default BoostrapCarousel;
