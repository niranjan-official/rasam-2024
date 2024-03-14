"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const active = "text-white";
  const mobileActive = " bg-slate-300 bg-opacity-20 rounded-md";

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // assuming sections have unique IDs
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-24 h-full fixed top-0 left-0 p-4 backdrop-filter backdrop-blur-xl z-50 hidden lg:block">
        <div className="w-full h-full flex flex-col items-center justify-evenly text-xs font-semibold text-slate-300 rounded-3xl">
          <Link
            href="#home"
            className={`flex flex-col items-center ${
              activeSection === "home" ? active : ""
            } hover:text-white `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href="#about"
            className={`flex flex-col items-center ${
              activeSection === "about" ? active : ""
            } hover:text-white `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-octagon-filled w-9 h-9"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.897 10h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                strokeWidth={0}
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            href={"#events"}
            className={`flex flex-col items-center ${
              activeSection === "events" ? active : ""
            } hover:text-white `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={"#gallery"}
            className={`flex flex-col items-center ${
              activeSection === "gallery" ? active : ""
            } hover:text-white `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="fixed top-5 left-5 lg:hidden z-50">
        <Sheet>
          <SheetTrigger asChild className="focus:outline-none focus:ring-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="border-none shadow-sm backdrop-filter backdrop-blur-md "
          >
            <div className="w-full flex flex-col p-4">
              <Image
                width={100}
                height={50}
                alt="..."
                src={"/images/rasam-font.svg"}
              />
              <hr className="b-2 border-gray-400 my-4" />
              <div className="flex flex-col text-white gap-4 text-2xl">
                <SheetClose asChild>
                  <Link
                    href={"#home"}
                    className={`p-2 ${
                      activeSection === "home" ? mobileActive : ""
                    } hover:text-white `}
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"#about"} className={`p-2 ${
                      activeSection === "about" ? mobileActive : ""
                    } hover:text-white `}>
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"#events"} className={`p-2 ${
                      activeSection === "events" ? mobileActive : ""
                    } hover:text-white `}>
                    Events
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"#pro-show"} className={`p-2 ${
                      activeSection === "pro-show" ? mobileActive : ""
                    } hover:text-white `}>
                    Pro-Show
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"#gallery"} className={`p-2 ${
                      activeSection === "gallery" ? mobileActive : ""
                    } hover:text-white `}>
                    Gallery
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default NavBar;
