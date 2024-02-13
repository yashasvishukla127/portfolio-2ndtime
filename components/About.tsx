"use client"
import React from 'react'
import {motion} from "framer-motion"
import {Tilt} from 'react-tilt'

interface ProjectCardProps {
  children?: React.ReactNode;
}

type Props = {}

const About = (props: Props) => {

  const DrawOutlineButton = ({
    children,
    ...rest
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
    return (
      <button
        {...rest}
        className="group relative px-4 py-2  font-extrabold uppercase text-black transition-colors duration-[400ms] hover:text-yellow-500"
      >
        <span className='text-4xl font-extrabold
         shadow-black shadow-2xl tracking-[10px]'>{children}</span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[4px] w-0 bg-[#22092C] transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[4px] bg-[#22092C] transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[4px] w-0 bg-[#22092C] transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-[#22092C] transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    );
  };

  return (
   <>
    <motion.div
      initial={{x:-200,opacity:0,}}
      transition={{duration:0.8 ,type:'spring' , stiffness:100}}whileInView={{x:0,opacity:1,}}
     className='h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 mx-auto justify-evenly items-center space-y-8  md:space-y-0'>
      <h3 className='tracking-[20px] uppercase absolute top-24 text-3xl
      md:top-20 sm:top-5 font-bold text-indigo-900 shadow-indigo-900  shadow-2xl hover:-skew-y-3'>about</h3>

      <div className='flex-shrink-0 mt-5 -translate-y-20 justify-center'>        
        <Tilt className=' h-[350px] w-[300px] bg-transparent '>
          <motion.img initial={{
          x:-200,
          opacity:0,
        }}
        transition={{
          duration:1.33
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
           src='/programmer.jpg' alt='programer'
          className='sm:rounded-full  flex-shrink-0 object-cover shadow-2xl shadow-black
          sm:h-45 sm:w-40  -mb-20 sm
          md:h-80 md:w-80 md:rounded-none
          lg:h-120 lg:w-80 lg:-translate-y-30
          xl:h-[500px] xl:w-[300px] xl:-translate-y-40 '/>

        </Tilt>
      </div>

      <div className='space-y-10 px-0 md:px-10 ' >
        {/* <h4 className=' text-pretty uppercase tracking-[20px] text-4xl font-extrabold
         shadow-black shadow-lg  text-[#161A30] '>
            here is a   <span className='underline'>little</span> BACKGROUND</h4>
           */}
         
          {/* <DrawOutlineButton>HERE IS little BACKGROUND</DrawOutlineButton> */}
         

        <p className='tracking-[1px] text-slate-950 uppercase text- font-serif'>
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

    </motion.div>
  </>   
  )
}

export default About


//notes
// mx-auto centered the text
// 