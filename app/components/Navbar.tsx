"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

import Logo from "./Logo";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === "/projects/postcard" ||
      pathname === "/projects/madeforyou" ||
      pathname === "/projects/yourstreet" ||
      pathname === "/projects/margaritamania"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [pathname]);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed  w-full h-20 shadow-xl z-[100]"
          : "fixed  w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link
          href="/#home"
          className="h-full p-2 fill-current hover:text-[#915BC1]"
        >
          <Logo height="100%" />
        </Link>
        <nav>
          <ul className="hidden md:flex  ">
            <Link href="#home" className="hover:text-[#915BC1] hover:underline">
              <li className="ml-10 text-sm uppercase ">Home</li>
            </Link>
            <Link
              href="#about"
              className="hover:text-[#915BC1] hover:underline"
            >
              <li className="ml-10 text-sm uppercase ">About</li>
            </Link>
            <Link
              href="#skills"
              className="hover:text-[#915BC1] hover:underline"
            >
              <li className="ml-10 text-sm uppercase ">Skills</li>
            </Link>
            <Link
              href="#projects"
              className="hover:text-[#915BC1] hover:underline"
            >
              <li className="ml-10 text-sm uppercase ">Projects</li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </nav>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%]  top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link
                href="/#home"
                className="h-full p-2 fill-current hover:text-[#915BC1]"
              >
                <Logo width="97" height="45" />
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4    ">
                <span className="text-[#915BC1]">
                  Let&apos;s build the future together
                </span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" className="hover:text-[#915BC1] hover:underline">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link
                href="/#about"
                className="hover:text-[#915BC1] hover:underline"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link
                href="/#skills"
                className="hover:text-[#915BC1] hover:underline"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link
                href="/#projects"
                className="hover:text-[#915BC1] hover:underline"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#915BC1] ">
                Connect with me
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/maria-reedstrom/"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#915BC1] hover:text-[#ecf0f3] ">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/mariareedstrom"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#915BC1] hover:text-[#ecf0f3]">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="mailto:maria.reedstrom@gmail.com"
                  rel="noopener noferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#915BC1] hover:text-[#ecf0f3]">
                    <AiOutlineMail />
                  </div>
                </a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#915BC1] hover:text-[#ecf0f3]">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
