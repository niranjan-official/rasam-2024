"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const ReactCarousel = ({ images }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 25
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
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
        <Carousel responsive={responsive} className='w-full flex h-full' partialVisible={true} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={['mobile','tablet']}>
            {CarouselImages.map((obj, index) => (
                <div className='p-3 sm:px-5'>
                    <Image width={300} height={300} src={obj} key={index} alt="..." className=' hover:scale-110 transition duration-200 cursor-pointer'/>
                </div>
            ))}
        </Carousel>
    )
}

export default ReactCarousel