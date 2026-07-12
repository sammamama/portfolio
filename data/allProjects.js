import adoreyou from "@/public/adoreyou.png";
import lyricforge from "@/public/lyricforge.png";
import glassden from "@/public/glass-den.png";
import sthaptya from "@/public/sthaptya.png";
import web3noobie from "@/public/web-3noobie.png";
import snapifi from "@/public/snapifi.png";
import japArchi from "@/public/jap-archi.png";

import ts from "@/public/ts1.png";
import react from "@/public/react.svg";
import next from "@/public/nextjs.svg";
import framer from "@/public/framer.svg";
import tailwind from "@/public/tailwind.svg";
import three from "@/public/three.png";
import prisma from "@/public/prisma.svg";
import nodejs from "@/public/nodejs.svg";
import postgres from "@/public/postgres.svg";
import stripe from "@/public/stripe.svg";
import betterAuth from "@/public/better-auth.svg";

export const allProjects = [
  {
    title: "Adore You",
    desc: "A song gifting platform where users personalize and send songs as gifts — complete with Stripe payments, authentication, and a polished animated experience.",
    link: "https://adoreyou-five.vercel.app/",
    github: "https://github.com/sammamama/adoreyou",
    img: adoreyou,
    tags: [
      {
        img: next,
        tech: "NextJS",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
      {
        img: stripe,
        tech: "Stripe",
      },
      {
        img: betterAuth,
        tech: "Better Auth",
      },
      {
        img: framer,
        tech: "Framer",
      },
    ],
  },
  {
    title: "LyricForge",
    desc: "Full-stack AI SaaS with auth, user dashboards, and real-time song generation — users describe a mood and get complete lyrics with streamed audio output.",
    link: "https://lyricforge.xyz/",
    github: "https://github.com/sammamama/lyrics-forge",
    img: lyricforge,
    tags: [
      {
        img: next,
        tech: "NextJS",
      },
      {
        img: ts,
        tech: "TypeScript",
      },
      {
        img: prisma,
        tech: "Prisma",
      },
      {
        img: postgres,
        tech: "PostgreSQL",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
      {
        img: framer,
        tech: "Framer",
      },
    ],
  },
  {
    title: "Sthaptya",
    desc: "Portfolio website for a Himalayas-based architecture firm showcasing projects across hospitality, residential, and commercial spaces with booking functionality.",
    link: "https://sthaptya.vercel.app/",
    github: "https://github.com/sammamama/sthaptya",
    img: sthaptya,
    tags: [
      {
        img: react,
        tech: "React",
      },
      {
        img: ts,
        tech: "TypeScript",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
      {
        img: framer,
        tech: "Framer",
      },
    ],
  },
  {
    title: "Glass Den",
    desc: "A sleek fine-dining restaurant website with a unique prison-themed aesthetic, featuring a digital menu system with chef's picks and signature dishes.",
    link: "https://glass-den.vercel.app/",
    github: "https://github.com/sammamama/glass-den",
    img: glassden,
    tags: [
      {
        img: next,
        tech: "NextJS",
      },
      {
        img: ts,
        tech: "TypeScript",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
    ],
  },
  {
    title: "Web3 Noobie",
    desc: "An educational Web3 platform for Solana beginners — includes a devnet faucet, SOL transfers, and token launching to learn blockchain development hands-on.",
    link: "https://web3-noobie.vercel.app/",
    github: "https://github.com/sammamama/web3-noobie",
    img: web3noobie,
    tags: [
      {
        img: next,
        tech: "NextJS",
      },
      {
        img: ts,
        tech: "TypeScript",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
    ],
  },
  {
    title: "Snapifi",
    desc: "A code editor for creating, styling, and sharing beautiful code snippets — export as PNG or share with custom themes and fonts.",
    link: "https://snapifi.vercel.app/",
    github: "https://github.com/sammamama/snapifi",
    img: snapifi,
    tags: [
      {
        img: next,
        tech: "NextJS",
      },
      {
        img: ts,
        tech: "TypeScript",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
    ],
  },
  {
    title: "Jap Archi",
    desc: "A minimalist design studio portfolio showcasing Japanese-inspired architectural spaces with 3D model viewing and contemplative spatial storytelling.",
    link: "https://jap-archi.vercel.app/",
    github: "https://github.com/sammamama/jap-archi",
    img: japArchi,
    tags: [
      {
        img: next,
        tech: "NextJS",
      },
      {
        img: ts,
        tech: "TypeScript",
      },
      {
        img: tailwind,
        tech: "Tailwind",
      },
      {
        img: three,
        tech: "ThreeJS",
      },
    ],
  },
];
