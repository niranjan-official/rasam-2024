import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import { MotionDiv, MotionH1, MotionSpan } from "./MotionComponent";
  
const Cards = ({title}) => {
  return (
    <Card className="rounded-2xl text-red mb-10 border-none">
  <CardHeader>
  <MotionH1
          initial={{ opacity: 0.2,}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut",repeat: Infinity }}
          className=""
        >
    <CardTitle className="text-2xl md:text-4xl py-16 md:py-36 md:px-10 ">{title}</CardTitle>
    </MotionH1>
    </CardHeader>
</Card>

  )
}

export default Cards