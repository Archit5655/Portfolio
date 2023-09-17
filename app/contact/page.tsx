"use client"
import Heading from "@/components/Heading";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Sendemail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SumbitButton from "@/components/SumbitButton";
import { error } from 'console';



const page = () => {
  

  return (
    <div className=" flex items-center justify-center">

    <motion.section className=" mb-20 sm:mb-28 w-[min(100%,38rem)]   mx-96" initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}
    transition={{delay:0.175}}>
      <Heading title="Contact" />
      <p className=" text-gray-800 text-xl flex flex-col items-center justify-center dark:text-gray-200">
     
        Please contact me  at{" "}
        <a className="underline dark:text-gray-200" href="mailto:archit.dev.app@gmail.com">
          archit.dev.app@gmail.com{" "}
        </a>{" "}
        <span className="font-bold text-2xl dark:text-gray-200">OR</span>
        <span className=" font-medium text-xl dark:text-gray-200">Or directly through this form</span>
      </p>
      <form className="  mt-3 flex flex-col"  action={ async FormData=>{
   
         const {data,error}= await Sendemail(FormData)
         if(error){
           
           toast.error("Please Enter the correct email or try again later")
           return
         }
          toast.success("message send")

      
  


      }}>
        <input
        name="senderemail"
          type="email"
          required
          maxLength={500}
          className=" h-14 px-4 rounded-lg dark:bg-gray-600 border outline-none dark:bg-opacity-80 dark:text-gray-200 border-black/10  "
          placeholder="Your Email"
          />
        <textarea
        name="message"
          className=" h-52 my-3  p-4 rounded-lg outline-none dark:bg-opacity-80  border-black/10 dark:text-gray-200 dark:bg-gray-600 "
          placeholder="Message"
          required
          maxLength={5000}
        />
        <div className=" flex items-center justify-center">

      <SumbitButton/>
          </div>
      </form>
    </motion.section>
          </div>
  );
};

export default page;
