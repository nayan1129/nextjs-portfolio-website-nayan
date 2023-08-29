"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";



const Navbar = () => {
  const [navbar, Setnavbar] = useState(false);
  const [shadow, Setshadow] = useState(false);
  const togglenavbar = () => {
    Setnavbar(!navbar);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        Setshadow(true);
      } else {
        Setshadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
    style={{backgroundColor:'white'}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl ease-in-out duration-300 z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full  px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="Logo-Image"
            width="70"
            height="50"
            backgroundcolor='bg-black'
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm  uppercase hover:text-[#007bff]  ">
              <Link href="/#home">Home</Link>
            </li>
            <li className="ml-10 text-sm  uppercase hover:text-[#007bff]  ">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm  uppercase hover:text-[#007bff]   ">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm  uppercase hover:text-[#007bff]   ">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm  uppercase  hover:text-[#007bff]  ">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <div onClick={togglenavbar} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          navbar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navbar
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : " bg-white fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/Logo.png"
                alt="Logo-Image"
                width="87"
                height="35"
              />
              <div
                onClick={togglenavbar}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => Setnavbar(false)}
                    className="py-6 text-sm hover:text-[#007bff] "
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => Setnavbar(false)}
                    className="py-4 text-sm hover:text-[#007bff]  "
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => Setnavbar(false)}
                    className="py-4 text-sm hover:text-[#007bff]  "
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => Setnavbar(false)}
                    className="py-4 text-sm hover:text-[#007bff]  "
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => Setnavbar(false)}
                    className="py-4 text-sm hover:text-[#007bff]  "
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&#39;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/contact-nayan-a6a129219/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/nayan1129"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/">
                    <div
                      // onClick={() => Setnavbar(!navbar)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      // onClick={() => Setnavbar(!navbar)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
