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
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  const [isEventPage, setIsEventPage] = useState(false);

  useEffect(() => {
    console.log("Path: " + path);
    if (path.includes("/events")) {
      setIsEventPage(true);
    }
  }, [path]);
  const [triggerColor, setTriggerColor] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTriggerColor(false)
    }, 5000);
  }, []);
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
        <div className={`w-full h-full flex flex-col items-center justify-evenly text-xs font-semibold ${triggerColor ? 'text-black' : 'text-slate-300'} rounded-3xl`}>
          <Link
            href={isEventPage ? "/#home" : "#home"}
            className={`flex flex-col items-center ${
              activeSection && !triggerColor === "home" ? active : ""
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
            href={isEventPage ? "/#about" : "#about"}
            className={`flex flex-col items-center ${
              activeSection && !triggerColor === "about" ? active : ""
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
            href={isEventPage ? "/#events" : "#events"}
            className={`flex flex-col items-center ${
              activeSection && !triggerColor === "events" ? active : ""
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
            href={isEventPage ? "/#proshow" : "#proshow"}
            className={`flex flex-col items-center ${
              activeSection && !triggerColor === "proshow" ? active : ""
            } hover:text-white `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </Link>
          <Link
            href={isEventPage ? "/#gallery" : "#gallery"}
            className={`flex flex-col items-center ${
              activeSection && !triggerColor === "gallery" ? active : ""
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
              className={`w-10 h-10 ${triggerColor ? 'text-black' : 'text-yellow-700'}`}
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
            <div className="w-full flex flex-col p-4 pl-1">
              <Image
                width={150}
                height={100}
                alt="..."
                src={"/images/rasam-font.svg"}
              />
              <hr className="b-2 border-gray-400 my-4" />
              <div className="flex flex-col text-white gap-4 text-2xl">
                <SheetClose asChild>
                  <Link
                    href={isEventPage ? "/#home" : "#home"}
                    className={`p-2 ${
                      activeSection === "home" ? mobileActive : ""
                    } hover:text-white `}
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={isEventPage ? "/#about" : "#about"}
                    className={`p-2 ${
                      activeSection === "about" ? mobileActive : ""
                    } hover:text-white `}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={isEventPage ? "/#events" : "#events"}
                    className={`p-2 ${
                      activeSection === "events" ? mobileActive : ""
                    } hover:text-white `}
                  >
                    Events
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={isEventPage ? "/#proshow" : "#proshow"}
                    className={`p-2 ${
                      activeSection === "proshow" ? mobileActive : ""
                    } hover:text-white `}
                  >
                    Pro Show
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={isEventPage ? "/gallery" : "#gallery"}
                    className={`p-2 ${
                      activeSection === "gallery" ? mobileActive : ""
                    } hover:text-white `}
                  >
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
