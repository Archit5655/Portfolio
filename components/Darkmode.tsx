"use client";


import { useTheme } from "@/context/theme-context";
import { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";


const Darkmode = () => {
const {theme,toggletheme} =useTheme()
  return (
    <button
      className=" fixed  bottom-10 right-5 sm:top-5 sm:right-5 md:bottom-10 md:right-5 lg:bottom-10  bg-gray-100 w-[3rem] h-[3rem] bg-opacity-80 rounded-full flex items-center justify-center 
   border  border-gray-600 border-opacity-40 shadow-2xl
    hover:scale-[1.15] active:scale-105
 transition-all dark:bg-gray-950 dark:border-white/5"
      onClick={toggletheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default Darkmode;
