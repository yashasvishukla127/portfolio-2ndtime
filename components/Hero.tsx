"use client"
import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

import BackgroundCircles from './BackgroundCircles'
import clgstudent from '@/public/clgStuDe.jpg'
import programmer from '@/public/programmer.jpg'

type Props = {}

const Hero = (props: Props) => {
    const[text,count]  = useTypewriter({
        words:[
            "hello i am Yashasvi Shukla",
            "I'm a FRONT-END developer,",
            " software developer",
            "loves , to code and design",
        ],
        loop:true,
        delaySpeed: 100,
    });
  return (
    <div className='h-screen  flex flex-col space-y-10 items-center justify-center text-center overflow-hidden'>
        
        <div className='-translate-y-40'>
            <h1 className='uppercase text-3xl text-[#0f0f0f] pb-2 tracking-[15px]
            translate-y-20 relative top-[-20px] font-semibold shadow-black shadow-lg border-2 border-blue-950'>Software developer</h1>
            
        
            <BackgroundCircles />  
            <Image className='h-32 w-32 relative rounded-full object-cover top-20 mx-auto 
            translate-y-[70px] blur-[1px] grayscale hover:grayscale-0 hover:blur-0' src= {clgstudent} alt='yash'/>
        </div>


        <div className='z-20'>
            <h2 className='translate-y-20 bottom-6 text-4xl font-semibold px-10 text-[#43433f]'>
                <span className='mr-3 uppercase' >{text}</span>
                <Cursor cursorColor= "#3876BF" />
            </h2>

                                                {/* these button changes are in GLOBALL.CSS  */}
            <div className='pt-5 translate-y-40 text-[#8bb2c5] flex space-x-10'>
                    <Link href= '#about'>   <motion.button initial={{ opacity: 0.6 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        className=" heroButton shadow-blue-700 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                     bg-transparent font-bold text-[#4E4FEB] transition-all duration-300 before:absolute before:inset-0 before:border-12
                      before:border-[#4E4FEB] before:duration-100 before:ease-linear   hover:text-white hover:shadow-black items-center justify-center
                      hover:before:border-[80px]">
                        <span className="relative z-10 text-center">about</span>
                        </motion.button>    
                    </Link>
                      
                    <Link href= '#projects'> <motion.button initial={{ opacity: 0.6 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        className=" heroButton shadow-blue-700 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                     bg-transparent font-bold text-[#4E4FEB] transition-all duration-300 before:absolute before:inset-0 before:border-12
                      before:border-[#4E4FEB] before:duration-100 before:ease-linear   hover:text-white hover:shadow-black items-center justify-center
                      hover:before:border-[80px]">
                        <span className="relative z-10 text-center">projects</span>
                        </motion.button>   </Link>


                    <Link href= '#skills'> <motion.button initial={{ opacity: 0.6 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        className=" heroButton shadow-blue-700 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                           bg-transparent font-bold text-[#4E4FEB] transition-all duration-300 before:absolute before:inset-0 before:border-12
                           before:border-[#4E4FEB] before:duration-100 before:ease-linear   hover:text-white hover:shadow-black items-center justify-center
                          hover:before:border-[80px]">
                        <span className="relative z-10 text-center">skills</span>
                        </motion.button>   </Link>

                       <Link href= '#experience'> <motion.button initial={{ opacity: 0.6 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        className=" heroButton shadow-blue-700 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                          bg-transparent font-bold text-[#4E4FEB] transition-all duration-300 before:absolute before:inset-0 before:border-12
                        before:border-[#4E4FEB] before:duration-100 before:ease-linear   hover:text-white hover:shadow-black items-center justify-center
                          hover:before:border-[80px] ">
                          <span className="relative z-10 text-center">experience</span>
                        </motion.button>  
                      </Link>
      
    
            </div>
        </div>    


    </div>
  )
}

export default Hero


// notes for this section
// applied shadow 