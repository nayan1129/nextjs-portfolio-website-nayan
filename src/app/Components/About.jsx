'use client'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    
      return (
        <div data-aos="fade-down-right"  id="about" className="w-full md:h-screen p-2 flex items-center py-16 ">
            <div className="max-w-[1340px] m-auto md:grid grid-cols-3 gap-8">
              <div  className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#007bff] font-bold" >
                  About 
                </p>
                <p className="py-2 text-gray-600">
                  Courteous and enthusiastic, I am interested in IT and everything in
                  its orbit. I recently began to be fascinated by web programming,
                  e.g. developing apps and building websites. I made projects by
                  myself and I made experience while making them. For this reason, I
                  am looking for a company willing to offer me a placement among their
                  developers. In return, I would offer my full commitment, and be a
                  pleasant and friendly addition to your team. I am therefore
                  currently looking for a job or an internship as a front-end
                  developer.
                </p>
                <Link href="/#projects">
                  <p className="py-2 text-gray-600 underline cursor-pointer ">
                    Check out some of my latest projects.
                  </p>
                </Link>
              </div>
              <div data-aos='fade-down-right' className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image  src='/assets/about.jpg' className="rounded-xl" alt="/" width='500'  height='900' />
              </div>
            </div>
          </div>
        );
      };
      
      export default About;
      