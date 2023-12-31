"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type Projectprops = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl, href }: Projectprops) {
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacity,
      }}
      className=" mb-3 sm:mb-8 "
    >
      <section
        onClick={() => router.push(href)}
        className=" group bg-gray-100 max-w-[42rem] dark:bg-white/10 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3   sm:mb-8  hover:bg-gray-200  dark:hover:bg-white/20 transition"
      >
        <div className="py-4 px-5 sm:pl-10 sm:pr-2 pb-8 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className=" text-2xl font-semibold dark:text-gray-100 ">
            {title}
          </h3>
          <p className=" mt-2 leading-relaxed text-gray-800 dark:text-gray-100 ">
            {description}
          </p>
          <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider  text-white rounded-full  "
                key={index}
              >
                {tag}{" "}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="IMage"
          quality={95}
          className=" absolute hidden  sm:block  top-14  h-full  object-fill -right-40 w-[28.25rem] shadow-2xl  rounded-t-lg  group-hover:-rotate-2  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 transition "
        />
      </section>
    </motion.div>
  );
}
export default Project;
