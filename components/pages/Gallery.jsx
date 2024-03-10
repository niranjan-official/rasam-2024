import React from "react";
import Heading from "../Heading";
import CarouselBody from "../CarouselBody";

const Gallery = ({gallery}) => {
  return (
    <section
      id="gallery"
      className="min-h-screen w-full px-4 md:px-10 lg:px-24"
    >
      <Heading title={"Gallery"} />
      <div className="flex justify-center items-center py-8">
      <CarouselBody images={gallery}/>
      </div>
    </section>
  );
};

export default Gallery;
