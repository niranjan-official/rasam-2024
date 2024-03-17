import React, { useState, useEffect }  from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from 'next/image';
// import { motion } from 'framer-motion';


const Cards = () => {
  // const [rotation, setRotation] = useState(0);
  // const [rotateLeft, setRotateLeft] = useState(true); // Initially rotate left
  // const [swingCount, setSwingCount] = useState(0);
  // const maxSwingCount = 2; // Number of times to swing (adjust as needed)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (rotateLeft) {
  //       setRotation(prevRotation => prevRotation - 1); // Adjust the speed of rotation here (e.g., 5 degrees)
  //       if (rotation <= -10) {
  //         setRotateLeft(false);
  //       }
  //     } else {
  //       setRotation(prevRotation => prevRotation + 1); // Adjust the speed of rotation here (e.g., 5 degrees)
  //       if (rotation >= 25) {
  //         setRotateLeft(true);
  //         setSwingCount(prevCount => prevCount + 1);
  //       }
  //     }

  //     if (swingCount >= maxSwingCount) {
  //       clearInterval(intervalId); // Stop swinging after reaching the maxSwingCount
  //     }
  //   }, 50); // Adjust the interval duration for smoother motion (e.g., 50ms)

  //   return () => clearInterval(intervalId); // Clean up interval on component unmount
  // }, [rotation, rotateLeft, swingCount]);


  return (
    <Card className="rounded-2xl text-red mb-10 border-none shadow-zinc-400 shadow-xl " >
      <Image alt="..."  src={"/images/coming6.svg"} width={500} height={500} className="rounded-2xl"/>
      </Card>


  //   <Card className="rounded-2xl text-red mb-10 border-none" style={{
  //     transform: `rotate(${rotation}deg)`,
  //     transformOrigin: 'top center',
  //     transition: 'transform 0.2s ease-in-out' // Adjust the duration and easing function for smoother transition
  //   }}>
  //   <div>
  //     <motion.img
  //       src="/images/coming3.png"
  //       alt="Swing Image"
  //       style={{
  //         rotate: rotation,
  //         transition: "rotate 10s ease-in-out" // Adjust the duration and easing function for smoother transition
  //       }}
  //     />
  //   </div>
  // </Card>

  )
}

export default Cards