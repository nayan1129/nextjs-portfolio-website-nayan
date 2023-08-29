'use client'
import {React,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div   id="skills" className="w-full lg:h-screen p-2">
      <div  className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#007bff] font-bold">
          Skills
        </p>
        <div  className="grid grid-cols-2 lg:grid-cols-3 gap-8 py-4  ">
          <div data-aos='zoom-in' className="h-32 w-32 relative cursor-pointer mb-5">
            <div className=" bg-white absolute inset-0  opacity-100 rounded-lg shadow-2xl">
              <p className="text-center  pt-12 text-black font-black">90%</p>
            </div>
            <div  className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
              <div  style={{backgroundColor:'#007bff'}}  className="h-full w-full bg-red-400 rounded-lg shadow-2xl">
                <p className="text-center pt-12 font-bold text-white ">HTML</p>
              </div>
            </div>
          </div>
          <div data-aos='zoom-in' className="h-32 w-32 relative cursor-pointer mb-5">
            <div className=" bg-white absolute inset-0  opacity-100 rounded-lg shadow-2xl">
              <p className="text-center  pt-12 text-black font-black">85%</p>
            </div>
            <div  className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
              <div  style={{backgroundColor:'#007bff'}} className="h-full w-full bg-red-400 rounded-lg shadow-2xl">
                <p className="text-center pt-12 font-bold text-white">CSS</p>
              </div>
            </div>
          </div>
          <div data-aos='zoom-in' className="h-32 w-32 relative cursor-pointer mb-5">
            <div className=" bg-white absolute inset-0  opacity-100 rounded-lg shadow-2xl">
              <p className="text-center  pt-12 text-black font-black">70%</p>
            </div>
            <div  className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
              <div  style={{backgroundColor:'#007bff'}} className="h-full w-full bg-red-400 rounded-lg shadow-2xl">
                <p className="text-center pt-12 font-bold text-white">JAVASCRIPT</p>
              </div>
            </div>
          </div>
          <div data-aos='zoom-in' className="h-32 w-32 relative cursor-pointer mb-5">
            <div className=" bg-white absolute inset-0  opacity-100 rounded-lg shadow-2xl">
              <p className="text-center  pt-12 text-black font-black">75%</p>
            </div>
            <div  className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
              <div  style={{backgroundColor:'#007bff'}} className="h-full w-full bg-red-400 rounded-lg shadow-2xl">
                <p className="text-center pt-12 font-bold text-white">REACT JS</p>
              </div>
            </div>
          </div>
          <div data-aos='zoom-in' className="h-32 w-32 relative cursor-pointer mb-5">
            <div className=" bg-white absolute inset-0  opacity-100 rounded-lg shadow-2xl">
              <p className="text-center  pt-12 text-black font-black">60%</p>
            </div>
            <div  className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
              <div  style={{backgroundColor:'#007bff'}} className="h-full w-full bg-red-400 rounded-lg shadow-2xl">
                <p className="text-center pt-12 font-bold text-white">NEXT JS</p>
              </div>
            </div>
          </div>
          <div data-aos='zoom-in' className="h-32 w-32 relative cursor-pointer mb-5">
            <div className=" bg-white absolute inset-0  opacity-100 rounded-lg shadow-2xl">
              <p className="text-center  pt-12 text-black font-black">50%</p>
            </div>
            <div  className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
              <div  style={{backgroundColor:'#007bff'}} className="h-full w-full bg-red-400 rounded-lg shadow-2xl">
                <p className="text-center pt-12 font-bold text-white ">TAILWIND CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
