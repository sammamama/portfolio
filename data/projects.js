import sthaptya from "@/public/staptya.png";
import banking from "@/public/banking.png";
import docs from "@/public/docs.png";
import iphone from "@/public/iphone.png";
import tindog from "@/public/tindog.png";


import ts from "@/public/ts1.png";
import css from "@/public/css.svg";
import docker from "@/public/docker.svg";
import react from "@/public/react.svg";
import next from "@/public/nextjs.svg";
import jenkins from "@/public/jenkins12.svg";
import mongo from "@/public/mongo12.svg";
import framer from "@/public/framer.svg";
import html from "@/public/html.svg";
import recoil from "@/public/recoil.svg";
import tailwind from "@/public/tailwind.svg";
import three from "@/public/three.png";
import js from "@/public/js.svg";
import bootstrap from '@/public/bootstrap.svg'
import gsap from '@/public/gsap.svg'

export const projects = [
{
    title: "Sushil Sharma Associates",
    desc: "Developed a modern, responsive website for Sushil Sharma Associates, an architecture firm based in Himachal Pradesh. ",
    link: "https://tourmaline-kashata-99886f.netlify.app/",
    img: sthaptya,
    tags: [{
        img: react,
        tech: "React"
    },
    {
        img: ts,
        tech: "TypeScript"
    },
    {
        img: tailwind,
        tech: "Tailwind"
    },
    {
        img: framer,
        tech: "Framer"
    },
]
},
{
    title: "Banking Application",
    desc: "Designed and developed a mock banking application to simulate real-world banking operations and user interactions.",
    link: "https://bankingapplicaiton.netlify.app",
    img: banking,
    tags: [{
        img: react,
        tech: "React"
    },
    {
        img: ts,
        tech: "TypeScript"
    },
    {
        img: tailwind,
        tech: "Tailwind"
    },
]
},
{
    title: "Live Docs",
    desc: "Developed a Google Docs clone that allows users to create, edit, and share documents in real-time. Integrated advanced features for collaborative editing and document management.",
    link: "https://samridh-live-docs.netlify.app",
    img: docs,
    tags: [{
        img: next,
        tech: "NextJS"
    },
    {
        img: ts,
        tech: "TypeScript"
    },
    {
        img: tailwind,
        tech: "Tailwind"
    },
    ]
},
{
    title: "iPhone Clone",
    desc: "Created a visually stunning iPhone clone showcasing a realistic 3D model of an iPhone using Three.js.",
    link: "https://iphone-clone-samridh.netlify.app",
    img: iphone,
    tags: [{
        img: react,
        tech: "React"
    },
    {
        img: ts,
        tech: "TypeScript"
    },
    {
        img: tailwind,
        tech: "Tailwind"
    },
    {
        img: three,
        tech: "ThreeJS"
    },
    {
        img: gsap,
        tech: "GSAP"
    },
    ]
},
{
    title: "TinDog",
    desc: "Created a whimsically sarcastic dog dating website, designed to bring a bit of humor to the world of pet matchmaking.",
    link: "https://tindog-samridh.netlify.app/",
    img: tindog,
    tags: [{
        img: html,
        tech: "HTML"
    },
    {
        img: css,
        tech: "CSS"
    },
    {
        img: js,
        tech: "JavaScript"
    },
    {
        img: bootstrap,
        tech: "Bootstrap"
    }
    ]
},
]