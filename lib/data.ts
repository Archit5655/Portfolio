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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Car Renting",
    description:
      "A car renting website fetching the data of the cars  from rapidapi and showcasing them built using nextjs and typescript ",
    tags: ["React", "Next.js",  "Tailwind","RapidAPi","Fetching Data" ],
    imageUrl: spotify,
  },
  {
    title: "Spotify Clone",
    description:
      "A clone of Spotify app with song playing functionality made using nextjs and supabase for backend and authentication.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand","Supabase",],
    imageUrl: car,
  },
  {
    title: "News app",
    description:
      "A Web App Fetching News from news API and showing them in different cards also give the options to choose from different categeries of news.",
    tags: ["React", "API", "CSS","Javascript"],
    imageUrl: news,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",

  "Express",

  "Framer Motion",
] as const;