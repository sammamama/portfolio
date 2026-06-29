"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { allProjects } from "@/data/allProjects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 text-neutral-300 font-mono px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h1
            className="text-[40px] md:text-[60px] mb-4"
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            All Projects
          </motion.h1>
          <motion.p
            className="text-neutral-400 text-lg mb-12"
            variants={{
              hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            A collection of things I&apos;ve built.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
        >
          {allProjects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-black rounded-xl overflow-hidden group"
              variants={{
                hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
                visible: { y: 0, opacity: 1, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href={project.link} target="_blank">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/90" />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <div className="flex gap-3">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                    )}
                    <Link href={project.link} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm mb-4">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags?.map((tag, j) => (
                    <div
                      key={j}
                      className="flex items-center px-3 py-1 text-xs bg-neutral-900 text-neutral-300 rounded-full"
                    >
                      <Image src={tag.img} alt={tag.tech} width={16} />
                      <span className="pl-1">{tag.tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            &larr; Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
