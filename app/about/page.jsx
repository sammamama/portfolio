"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-neutral-300 font-mono px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.h1
            className="text-[40px] md:text-[60px] mb-6"
            variants={childVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-300 leading-relaxed mb-6"
            variants={childVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            I&apos;m Samridh Sharma — a full-stack developer. Currently I am
            building a gifting songs for special occasions software. Other than
            that I am passionate about building premium experiences, and
            building apps that I personally would have fun building.
          </motion.p>

          <motion.p
            className="text-lg text-neutral-300 leading-relaxed mb-6"
            variants={childVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            My stack centers around Next.js, React, TypeScript, and Tailwind on
            the frontend, with Node.js, Prisma, and Postgres on the backend. I
            also work with Web3 (Solana), Three.js for 3D experiences, and
            Framer Motion for polished interactions.
          </motion.p>

          <motion.p
            className="text-lg text-neutral-300 leading-relaxed mb-10"
            variants={childVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            I&apos;m targeting full-stack developer roles where I can ship
            features end-to-end and work with teams that care about craft.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={childVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="https://github.com/sammamama"
              target="_blank"
              className="px-5 py-2 bg-neutral-300 text-black font-semibold rounded-full hover:bg-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/samridh-sharma-0201a8259/"
              target="_blank"
              className="px-5 py-2 border border-neutral-500 rounded-full hover:border-neutral-300 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/samm_ammm"
              target="_blank"
              className="px-5 py-2 border border-neutral-500 rounded-full hover:border-neutral-300 transition-colors"
            >
              X
            </Link>
            <Link
              href="/"
              className="px-5 py-2 border border-neutral-500 rounded-full hover:border-neutral-300 transition-colors"
            >
              &larr; Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
