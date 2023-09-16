import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import news from "@/public/Screenshot 2023-09-12 010843.png"
import spotify from "@/public/Screenshot 2023-09-10 014929.png"
import car from "@/public/Screenshot 2023-09-10 015137.png"
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Experience",
    hash: "/experience",
  },  {
    name: "Testimonials",
    hash: "/testimonials",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Updated Soon",
    location: "location",
    description:
      "DESCRIPTION",
    icon: React.createElement(LuGraduationCap),
    date: "date",
  },
  {
    title: "Updated Soon",
    location: "location",
    description:
      "DESCRIPTION",
    icon: React.createElement(CgWorkAlt),
    date: "date",
  },
  {
    title: "Updated Soon",
    location: "location",
    description:
      "DESCRIPTION",
    icon: React.createElement(FaReact),
    date: "date",
  }, {
    title: "Updated Soon",
    location: "location",
    description:
      "DESCRIPTION",
    icon: React.createElement(FaReact),
    date: "date",
  },
] as const;

export const projectsData = [
  {
    title: "Car Renting",
    description:
      "A car renting website fetching the data of the cars  from rapidapi and showcasing them built using nextjs and typescript ",
    tags: ["React", "Next.js",  "Tailwind","RapidAPi","Fetching Data" ],
    imageUrl:  car,
    href:"https://bussiness-level-carshow-website-nextjs.vercel.app/"
  },
  {
    title: "Spotify Clone",
    description:
      "A clone of Spotify app with song playing functionality made using nextjs and supabase for backend and authentication.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand","Supabase",],
    imageUrl:spotify ,
    href:"https://spotify-clone-orcin-tau.vercel.app/"
  },
  {
    title: "News app",
    description:
      "A Web App Fetching News from news API and showing them in different cards also give the options to choose from different categeries of news.",
    tags: ["React", "API", "CSS","Javascript"],
    imageUrl: news,
    href:""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "SQL",
  
] as const;