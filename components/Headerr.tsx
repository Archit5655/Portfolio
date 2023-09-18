"use client";
import React, { useEffect, useState } from "react";
import { motion, spring } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Headerr = () => {
  const pathname = usePathname();
  const [Active, setActive] = useState("Home");
  useEffect(() => {
    if (pathname === "/") {
      setActive("Home");
    } else {
      const newpath: string = pathname.slice(1, pathname.length);
      const newpathh = newpath.charAt(0).toUpperCase() + newpath.slice(1);
      setActive(newpathh);
    }
  }, [pathname]);

  return (
    <header className=" z-[999] relative">
      <motion.div
        className=" fixed top-0 left-1/2 -translate-x-1/2 h-[5rem] w-full rounded-none border border-white border-opacity-50 bg-gray-100 bg-opacity-75 shadow-lg dark:bg-gray-900  shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full dark:border-black/40 dark:bg-opacity-70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className=" fixed flex top-[0.15rem] left-1/2 h-14  -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              className=" h-3/4 flex items-center justify-center relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
            >
              <Link
                className={clsx(
                  " flex items-center justify-center w-full px-3 py-3 hover:text-gray-950  dark:text-gray-300 dark:hover:text-gray-50  transition ",
                  {
                    " text-gray-950": Active === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => setActive(link.name)}
              >
                {link.name}{" "}
                {link.name === Active ? (
                  <motion.span
                    className=" bg-zinc-400  rounded-full absolute inset-0 -z-10 dark:bg-zinc-400"
                    layoutId="Active"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  >
                    {" "}
                  </motion.span>
                ) : (
                  ""
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Headerr;
