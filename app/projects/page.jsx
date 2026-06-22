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
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
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
