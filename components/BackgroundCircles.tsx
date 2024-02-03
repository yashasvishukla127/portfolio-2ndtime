"use client"
import React from 'react'
import {motion} from 'framer-motion'
type Props = {}
function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    animate={{
      scale:[.2,.5,1,1.5,2],
      opacity:[0.1,0.2,0.4,0.6,0.8,1],
      borderRadius:["20%","40%","60%","80%","50%"]
    }}
    transition={{
      duration:2.5
    }}
    className='flex justify-center relative items-center'>
        <div className=' absolute border border-[#86b1f1] rounded-full h-[50px] w-[50px] mt-52 animate-ping'/>
        <div className=' absolute border border-[#86b1f1] rounded-full h-[100px] w-[100px] mt-52 animate-ping'/>
        <div className=' absolute border border-[#86b1f1] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute rounded full border-[#F7AB0A] opacity-[20] h-[350px] w-[350px] mt-52 animate-pulse'/>
        <div className='absolute rounded full border-[#F7AB0A] opacity-[10] h-[400px] w-[400px] mt-52  animate-spin'/>
    </motion.div>
  )
}

export default BackgroundCircles;
