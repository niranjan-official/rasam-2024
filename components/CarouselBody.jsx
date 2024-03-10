'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const CarouselBody = ({images}) => {
    const CarouselImages = images.images.image;
    console.log(CarouselImages[1]);
  return (
    <Carousel className="w-full md:max-w-lg" opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}>
      <CarouselContent>
        {CarouselImages.map((obj, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="flex aspect-square border-none items-center justify-center">
                  <Image src={obj} width={400} height={400}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselBody
