"use client";

import Image from "next/image";
import {
  animate,
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { projects } from "@/data/projects";
import Timeline from "@/components/Timeline";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";

import wsapp from '@/public/wsapp.svg' 
import Services from "@/components/Services";

import emailjs from '@emailjs/browser'

import z from 'zod';

const COLORS = ["#433256", "#1a4673", "#604137", "#743d00", "#DD335C"];

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  const form = useRef();
  const projectRef = useRef(null);
  const serviceRef = useRef(null);
  
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 105% at 50% 0%, #020617 50%, ${color})`;
  const backgroundImageBottom = useMotionTemplate`radial-gradient(100% 120% at 50% 100%, #020617, ${color})`;

  function handleSubmit(e){
    e.preventDefault();
  
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, {
      publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    }).then(() => {
      console.log(sent)
    })
  }

  useEffect(() => {
    animate(color, COLORS, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    
  }, []);

  const handleScroll = (ref) => {
    try {
      ref.current?.scrollIntoView();
    } catch (error) {
      console.log(error)
    }
  }

  const Form = z.object({
    emailAddress: z.string().email("Invalid email address"),
  })

  return (
    <div className="font-mono ">
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative flex justify-center items-center flex-col
      bg-gray-950 min-h-screen text-neutral-300 z-10 overflow-hidden"
      >
        <h1 className="md:text-[60px] sm:text-[30px] text-[20px]">
          Samridh{" "}
          <span className="text-[16px] italic font-light">
            you can call me Sam
          </span>{" "}
          Sharma
        </h1>
        <h3
          style={{ wordSpacing: "20px" }}
          className="text-[14px] md:text-[18px] text-center w-inherit tracking-[4px] italic text-neutral-400"
        >
          &quot;Creating Real-World Ready Web Applicaitons&quot;
        </h3>
        <div className="flex space-x-10">
          <button
            className="mt-5 bg-neutral-300 text-black font-semibold
            rounded-full px-7 py-2 flex items-center justify-center"
            onClick={() => handleScroll(serviceRef)}
          >
            Services
          </button>
          <button
            className={`mt-5 bg-black rounded-full px-7 py-2 border-2 border-[${color}] flex items-center justify-center`}
            onClick={() => handleScroll(projectRef)}
          >
            See Projects
          </button>
        </div>
        <div className="absolute inset-0 -z-10">
          <Canvas>
            <Stars radius={100} count={1000} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
      
      <motion.section
        style={{
          backgroundImage: backgroundImageBottom,
        }}
      >
        <div className="flex flex-col items-center lg:flex-row 
        justify-center text-neutral-300 sm:space-x-14 pb-[100px]"
        id="projects"
        ref={projectRef}
        >
          <div
            className="lg:w-[40%] w-[80%] bg-red-500 h-min 
            bg-transparent/30 z-10 backdrop-blur-xl rounded-xl"
          >
            <div className=" m-10">
              <h1 className="md:text-[46px] text-[30px]">Projects</h1>
              <div className="overflow-hidden overflow-x-scroll custom-scrollbar">
                <div className="flex lg:flex-col flex-row flex-nowrap 
                flex-shrink-0 justify-center lg:items-center 
                space-x-5 mt-5 w-[2000px] lg:w-full">
                  {
                    projects.map(({index, link, img, title, desc, tags}) => (
                      <div 
                        key={index}
                        className="w-[80%] my-4 bg-black rounded-lg relative"
                      >
                        <div className="relative">
                          <Link
                            href={link}
                            target="_blank"
                          >
                            <Image
                              src={img}
                              onLoad={() => {setLoading(false)}}
                              alt="image 1"
                              className={`w-full h-auto 
                                bg-cover ${loading ? "blue-sm" : "blur-0 rounded-t-lg"}`}
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-b from-transparent from-50% via-black/80 via-70% to-black to-100% 
                            hover:from-transparent hover:to-black/80 transition-all duration-300 cursor-pointer"
                            ></div>
                          </Link>
                        </div>
                        <div className="mt-5 p-3 z-10">
                          <h1 className="text-lg">{title}</h1>
                          <h1 className="text-base text-neutral-400">
                            {desc}
                          </h1>
                        </div>
                        
                        <div
                          className="m-3 flex gap-3 flex-wrap"
                        >
                          {
                            tags?.map(({index, tech, img}) => (
                            <div 
                              key={index}
                              className="flex justify-center items-center px-4 py-2 text-sm bg-neutral-900 text-neutral-300 w-min rounded-3xl">
                              <Image
                                src={img}
                                alt={tech}
                                width={20}
                              />
                              <span className="pl-1">{tech}</span>
                            </div>
                            ))
                          }
                        </div>
                      </div>
                    ))
                  }
                  
                </div>

              </div>
            </div>
          </div>
          
          <div>
            <div className="flex flex-col justify-center items-center
            w-full">
              <div className="flex lg:flex-col justify-center gap-3 p-3 sm:p-0">
                <Technologies />
                <Timeline />
              </div>
              <div className="w-full flex justify-center">
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="text-neutral-300 xl:mx-[270px]"
          id="service"
          ref={serviceRef}
        >
          <Services />
          
          <div className="py-10 mx-10 flex justify-center 
          flex-col items-center">
            <div className="text-[46px] w-full text-start ">Contact Me</div>
              <div className="w-full bg-neutral-500/50 p-5">
                <div className="text-[46px]">Whatsapp</div>
                <div className="text-lg">
                  <div className="">Want to hire me as a freelancer? Let&apos;s discuss</div>
                  <Link aria-label="Chat on WhatsApp" href="https://wa.me/916230099255" target="_blank"> 
                    <Image alt="Chat on WhatsApp" className="w-48" src={wsapp} />
                  </Link>
                  <hr className="my-4 text-neutral-500" />
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      or Drop me your mail, We&apos;ll reach out
                      <input
                        name="email" 
                        type="text" 
                        className="md:w-[40%] w-full rounded-lg px-4 py-1 bg-neutral-800"/>
                      <button className="w-[40%] p-3 mt-2 bg-white/30 
                      hover:bg-green-300 transition-all 
                      ease-out hover:text-neutral-600" type="submit">Submit</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}