import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from 'next/image';
import logo from "@/public/images/providence.png"
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row pb-5 text-white bg-slate-950 py-4 justify-between sm:pl-36 sm:pr-4 items-center">
      <div className="flex flex-col pb-10 md:pb-0">
        <h1 className="font-serif text-white text-3xl select-none">Get in Touch</h1>
        <div className="flex flex-row justify-evenly items-center pt-3">
        <SocialIcon
          network="instagram"
          url="https://www.instagram.com/rasam.by.providence?igsh=Nnd3YnFpaGplM3kw"
          bgColor="#9B0000"
          fgColor="white"
          style={{ width: "40px", height: "40px" }}
        />
        <SocialIcon
          network="youtube"
          url="https://www.youtube.com/@prvdnc"
          bgColor="#9B0000"
          fgColor="white"
          style={{ width: "40px", height: "40px" }}
        />
        <SocialIcon
          network="facebook"
          url="https://www.facebook.com/rasambyprovidence?mibextid=ZbWKwL"
          bgColor="#9B0000"
          fgColor="white"
          style={{ width: "40px", height: "40px" }}
        />
        </div>
      </div>
      <div className="pb-10 md:pb-0">
        <Image src={logo} height="200" width="200"></Image>
      </div>
      <div className=" overflow-hidden rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3807110727494!2d76.61414617420553!3d9.299493984697854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622984cfaf3af%3A0xd0320f890b6fca5!2sProvidence%20College%20of%20Engineering%20%26%20School%20of%20Business%2C%20Chengannur!5e0!3m2!1sen!2sin!4v1710087103947!5m2!1sen!2sin"
          className="h-full w-auto"
          allowFullScreen=""
          loading="none"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
