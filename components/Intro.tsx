"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDiscord, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Intro = () => {
  return (
    <section className=" mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className=" flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
        >
          <Image
            src="/dp.png"
            className=" h-28 w-28 rounded-full object-contain border-[0.35rem] border-slate-300 shadow-xl "
            width={200}
            height={200}
            quality={95}
            priority={true}
            alt="Image"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className=" font-bold">Hey, I'm Archit.</span> <span>I'm a </span>
        <span className=" font-bold">Full Stack Developer </span>
        <span>
          With a passion for crafting{" "}
          <span className=" font-bold"> web applications </span> and
          <span className=" font-bold"> mobile apps</span>
        </span>
        <span> excels in utilizing</span>
        <span className=" font-bold">
          {" "}
          Next.js and React Native technologies
        </span>
      </motion.p>
      <motion.div className=" flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"    initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }} transition={{
          delay:0.2
        }} >

        <Link
          className=" bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-100 "
          href="#contact"
        >
          Contact me <BsArrowRight />
        </Link>
        <a className=" bg-gray-400 text-black px-7 py-3 flex items-center gap-2 rounded-full " >
          <HiDownload />
          Download CV
        </a>
        <a className=" bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full" target="blank" href="https://www.linkedin.com/in/architgarg08/">
          <BsLinkedin />
        </a>
        <a className=" bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full"  target="blank"  href="https://github.com/Archit5655">
          <AiFillGithub />
        </a>
        <a className=" bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full" target="blank"   href="https://twitter.com/Archit_gargg">
          <AiOutlineTwitter />
        </a>
      
      </motion.div>
    </section>
  );
};

export default Intro;
