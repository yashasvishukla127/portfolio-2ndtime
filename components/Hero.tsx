"use client"
import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'

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

                                                {/* this button changes are in GLOBALL.CSS  */}
            <div className='pt-5 translate-y-40 text-[#8bb2c5] flex space-x-2'>
                    <Link href= '#about'>   <button className='heroButton shadow-blue-800 shadow-2xl items-center before:ease relative flex h-14 w-40  overflow-hidden border-6 
                     bg-transparent font-bold text-orange-600 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-12
                      before:border-[#FC6736] before:duration-100 before:ease-linear  hover:text-white hover:shadow-orange-800 
                      hover:before:border-[80px]  px-[30%] ' >
                         <span className='relative z-10 hover:-translate-y-2'> About</span></button>  
                    </Link>
                      
                    <Link href= '#projects'> <button className='heroButton  shadow-blue-800 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                     bg-transparent font-bold text-orange-600 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-12
                      before:border-[#FC6736] before:duration-100 before:ease-linear  hover:text-white hover:shadow-orange-800 
                      hover:before:border-[80px]'><span className='relative z-10 px-2 hover:-translate-y-2'> Projects</span></button>  </Link>


                    <Link href= '#skills'> <button className='heroButton  shadow-blue-800 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                     bg-transparent font-bold text-orange-600 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-12
                      before:border-[#FC6736] before:duration-100 before:ease-linear  hover:text-white hover:shadow-orange-800 
                      hover:before:border-[80px] '><span className='relative z-10 px-6 hover:-translate-y-2'> Skills</span></button> </Link>

                    <Link href= '#experience'> <button className=" heroButton shadow-blue-800 shadow-2xl before:ease relative flex h-14 w-40  overflow-hidden border-6 
                     bg-transparent font-bold text-orange-600 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-12
                      before:border-[#FC6736] before:duration-100 before:ease-linear  hover:text-white hover:shadow-orange-800 
                      hover:before:border-[80px]">
                        <span className="relative z-10 hover:-translate-y-2">experience</span>
                        </button>  
                    </Link>
                    
            </div>
        </div>    


    </div>
  )
}

export default Hero


// notes for this section
// applied shadow 