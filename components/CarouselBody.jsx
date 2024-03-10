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
    console.log(images);
  return (
    <Carousel className="w-full md:max-w-2xl" opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}>
      <CarouselContent>
        {images.images.image.map((obj, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className={"bg-slate-300"}>
                <CardContent className="flex h-96 bg-slate-300 items-center justify-center p-6">
                  <Image src={obj} width={0} height={0} style={{height:'100%',width:'auto'}}/>
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
