import React from "react";
import Heading from "../Heading";
import ReactCarousel from "../ReactCarousel";

const Gallery = ({gallery}) => {
  return (
    <section
      id="gallery"
      className="h-max md:min-h-screen w-full px-4 md:px-10 lg:px-24"
    >
      <Heading title={"Gallery"} />
      <div className="flex justify-center items-center py-8">
      <ReactCarousel images={gallery}/>
      </div>
    </section>
  );
};

export default Gallery;
