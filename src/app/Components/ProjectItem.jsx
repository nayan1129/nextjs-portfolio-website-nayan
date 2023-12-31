'use client'
import Image from "next/image";
import Link from "next/link";
import {React ,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectItem = ({ title, bachgroundImg, technology, projectUrl }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos='flip-up' className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={bachgroundImg}
        alt="/"
        width="596"
        height="596"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{technology}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
