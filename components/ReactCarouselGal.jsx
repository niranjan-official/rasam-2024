"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const ReactCarouselGal = ({ images }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            partialVisibilityGutter: 25
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 25
        }
    };
    const CarouselImages = images.images.image;
    //console.log(CarouselImages, "here");
    return (
        <Carousel responsive={responsive} className='w-full flex justify-center items-center h-full' partialVisible={true} customButtonGroup={false} infinite={true} autoPlay={true} autoPlaySpeed={2000} removeArrowOnDeviceType={['mobile','tablet']}>
            {CarouselImages.map((obj, index) => (
                <div className='' key={index}>
                    <Image width={500} height={500} src={obj} alt="..." className=' hover:scale-110 transition duration-200 cursor-pointer py-2 px-4'/>
                </div>
            ))}
        </Carousel>
    )
}

export default ReactCarouselGal