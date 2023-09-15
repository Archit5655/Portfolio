"use client"
import Heading from '@/components/Heading'
import { skillsData } from '@/lib/data'
import React from 'react'
import { motion } from 'framer-motion';



const fadeinanimation={
  initial:{
    opacity:0,
    y:100
  },
  animate:(index:number)=>({
    
    opacity:1,
    y:0,
    transition:{
      delay:0.05*index,
    },
  })
}
const page = () => {
  return (
    <div>

    <Heading title='Skills' />
    
    <div className=' flex items-center justify-center mt-20'>
  
    <section className=' mb-28 max-w-[53rem]  items-center justify-center scroll-mt-28 text-center sm:mb-40'>


    <ul className=' flex flex-wrap justify-center  gap-2 text-lg text-gray-800'>
      {skillsData.map((skills,index)=>(
        
        <motion.li variants={fadeinanimation} initial="initial" whileInView="animate" viewport= {{
          once:true
        }} custom={index} className='  bg-gray-400 border border-black/[0.1] text-white   text-opacity-80 rounded-xl px-8 py-7 ' key={index}> {skills}</motion.li>

      ))}

    </ul>


    </section>
    </div>
        </div>
  )
}

export default page
