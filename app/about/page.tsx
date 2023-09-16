"use client"
import Heading from '@/components/Heading'
import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    
<div className=' flex  items-center justify-center '>

<motion.section className=' mb-28 max-w-[45rem] text-center   leading-8 sm:mb-40' initial={{opacity:0,y:100}}
animate={{opacity:1,y:0}}
transition={{delay:0.175}}
>
<Heading title='About Archit'/>
 
 

      <p className="mb-3 text-2xl ">
        Currently He is pursuing Btech in {" "}
        <span className="font-medium">Computer Seience</span>, His passion for coding and curiosity to explore new technologies fuels my motivation to excel in this field. {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="">His favorite part of programming</span> is the
        problem-solving aspect. He <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. His core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express and React Native
        </span>
        . He  is also familiar with TypeScript and MongoDB. He is always looking to
        learn new technologies. He is currently looking for a{" "}
        <span className="font-medium">Intern position</span> as a software
        developer.
      </p>

      <p className='text-2xl mb-3 '>
        <span className="">When he is not coding</span>, He enjoy playing
        video games, watching movies and vibing on music. He also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
      </motion.section>
 
</div>

  )
}

export default page
