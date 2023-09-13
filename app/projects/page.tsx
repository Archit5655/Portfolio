
import Heading from '@/components/Heading'
import React, { useRef } from 'react'
import { projectsData } from '../../lib/data';
import { type } from 'os';
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import Project from '@/components/Project';

const page = () => {
  return (
  <div className=' h-[60rem]'>


    <Heading title='Projects' />

    <div className=' flex items-center justify-center h-[75rem]  '>

    <section>
    
      <div className=''>
        {projectsData.map((project,index)=>(
          <React.Fragment key={index}>

          <Project {...project} />
          </React.Fragment>
        ))}

      </div>
    </section>
    </div>
  </div>
  )
}

export default page

