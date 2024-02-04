"use client"
import React from 'react'
import {motion} from "framer-motion"
// import Tilt from "react-parallax-tilt"
import {Tilt} from 'react-tilt'

import programmer from '@/public/programmer.jpg'
import worker from '@/public/programmer.svg'
import { text } from 'stream/consumers'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
   <>
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 mx-auto justify-evenly items-center space-y-8  md:space-y-0'>
      <h3 className='tracking-[20px] uppercase text-blue-800 absolute top-24 text-3xl
      md:top-20 sm:top-5 font-bold shadow-blue-800 shadow-lg hover:-skew-y-3'>about</h3>

      
       {/* <div className='flex-shrink-0 '>        
        <Tilt className=' h-[350px] w-[300px] bg-transparent '>
          <Image src={programmer} alt='programer'
           height={400}  width={300} 
          className='blur-[1px] grayscale-0 py-10 object-fill hover:grayscale hover:blur-0 shadow-2xl shadow-black 
          sm:rounded-full sm:h-50 sm:w-25
          '/>
        </Tilt>
      </div> */}

      <div className='flex-shrink-0 mt-5 translate-y-20 justify-center'>        
        <Tilt className=' h-[350px] w-[300px] bg-transparent '>
          <img src='/programmer.jpg' alt='programer'
          className='sm:rounded-full  flex-shrink-0 object-cover
          sm:h-45 sm:w-40  -mb-20
          md:h-80 md:w-80 md:rounded-none
          lg:h-120 lg:w-120 
          xl:h-[500px] xl:w-[600px] xl:-translate-y-40 '/>

        </Tilt>
      </div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className=' text-pretty uppercase tracking-[20px] text-4xl font-extrabold
         shadow-black shadow-lg hover:-skew-y-3 text-[#161A30] '>
           here is a   <span className='underline'>little</span> BACKGROUND</h4>

        <p className='tracking-[2px] text-slate-950 uppercase text- font-serif'>
        Greetings,I am a dedicated web developer proficient in a comprehensive range of technologies 
        essential for modern web applications. My expertise encompasses React, JavaScript, 
        HTML, CSS, and Next.js, ensuring that I can craft intuitive and dynamic web interfaces 
        tailored to specific needs. Additionally, my proficiency extends to algorithmic problem-solving,
        having tackled numerous Data Structures and Algorithms questions on LeetCode using the Java programming language.

        Throughout my professional journey, I have successfully conceptualized and executed two distinct projects, 
        each showcasing my commitment to delivering quality and innovation. My passion for web development transcends
        mere coding; I take immense pleasure in constructing aesthetically pleasing web pages that not only function 
        seamlessly but also captivate users with their design elements.

        I am eager to leverage my skills and enthusiasm to contribute meaningfully to challenging web development endeavors, 
        ensuring excellence and user satisfaction at every step.
        </p>
        
        

      </div>






    </div>
  </>   
  )
}

export default About


//notes
// mx-auto centered the text
// 