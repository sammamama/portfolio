"use client";

import Image from "next/image";
import {
  animate,
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, Suspense } from "react";
import Link from "next/link";

const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), { ssr: false });

import { projects } from "@/data/projects";
import Timeline from "@/components/Timeline";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";

import wsapp from '@/public/wsapp.svg' 
import Services from "@/components/Services";

import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

import z from 'zod';

const MAX_EMAILS_PER_DAY = 5;

function checkRateLimit() {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const stored = JSON.parse(localStorage.getItem("emailTimestamps") || "[]");
  const recent = stored.filter((t) => now - t < dayMs);
  localStorage.setItem("emailTimestamps", JSON.stringify(recent));
  return recent.length < MAX_EMAILS_PER_DAY;
}

function recordEmail() {
  const stored = JSON.parse(localStorage.getItem("emailTimestamps") || "[]");
  stored.push(Date.now());
  localStorage.setItem("emailTimestamps", JSON.stringify(stored));
}

const COLORS = ["#433256", "#1a4673", "#604137", "#743d00", "#DD335C"];

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  const form = useRef();
  const projectRef = useRef(null);
  const serviceRef = useRef(null);
  const scrollRef = useRef(null);
  
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 105% at 50% 0%, #020617 50%, ${color})`;
  const backgroundImageBottom = useMotionTemplate`radial-gradient(100% 120% at 50% 100%, #020617, ${color})`;

  function handleSubmit(e){
    e.preventDefault();

    if (!checkRateLimit()) {
      toast.error("Too many emails sent. Try again later.");
      return;
    }

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, {
      publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    }).then(() => {
      recordEmail();
      toast.success("Email sent!");
    }).catch(() => {
      toast.error("Failed to send email.");
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
        <motion.h1
          className="md:text-[60px] sm:text-[30px] text-[20px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Samridh{" "}
          </motion.span>
          <motion.span
            className="text-[16px] italic font-light"
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            you can call me Sam
          </motion.span>
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {" "}Sharma
          </motion.span>
        </motion.h1>
        <motion.h3
          style={{ wordSpacing: "20px" }}
          className="text-[14px] md:text-[18px] text-center w-inherit tracking-[4px] italic text-neutral-400"
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
        >
          &quot;Creating Real-World Ready Web Applicaitons&quot;
        </motion.h3>
        <motion.div
          className="flex space-x-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
          }}
        >
          <motion.button
            className="mt-5 bg-neutral-300 text-black font-semibold
            rounded-full px-7 py-2 flex items-center justify-center"
            onClick={() => handleScroll(serviceRef)}
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Services
          </motion.button>
          <Link href="/projects">
            <motion.button
              className={`mt-5 bg-black rounded-full px-7 py-2 border-2 border-[${color}] flex items-center justify-center`}
              variants={{
                hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
                visible: { y: 0, opacity: 1, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              See Projects
            </motion.button>
          </Link>
        </motion.div>
        <div className="absolute inset-0 -z-10">
          <StarsCanvas />
        </div>
      </motion.section>
      
      <motion.section
        style={{
          backgroundImage: backgroundImageBottom,
        }}
      >
        <div className="relative flex flex-col items-center lg:flex-row
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
              <div className="relative">
                <button
                  onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70
                  rounded-full p-2 text-neutral-300 hover:bg-black lg:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70
                  rounded-full p-2 text-neutral-300 hover:bg-black lg:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              <div ref={scrollRef} className="overflow-hidden overflow-x-scroll custom-scrollbar">
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
            <div className="sticky bottom-6 flex justify-center z-20 pb-4">
              <Link
                href="/projects"
                className="bg-neutral-300 text-black font-semibold rounded-full
                px-5 py-2 text-sm flex items-center gap-2
                hover:bg-white transition-colors"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center
            w-full">
              <div className="flex lg:flex-col justify-center gap-3 p-3 sm:p-0">
                <Technologies />
                <div className="hidden lg:block">
                  <Timeline />
                </div>
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