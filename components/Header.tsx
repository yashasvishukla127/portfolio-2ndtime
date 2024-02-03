"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import hashnode from '@/assets/hashnode.png'


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x:-500,
          opacity:0,
          scale:0.2
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}

      transition={{
        duration:1.3
      }}
      
        className='flex flex-row items-center'>
        <SocialIcon url='https://github.com/yashasvishukla127'
            fgColor='#6e5494' bgColor='transparent'
            className='hover:cursor-pointer hover:scale-150 transition-transform duration-300'/>

        <SocialIcon url='https://www.linkedin.com/in/yashasvi-shukla-08401b255/'
            fgColor='#0a66c2' bgColor='transparent'
            className="hover:scale-150 transform transition-transform duration-300"/> 

        <SocialIcon url='https://twitter.com/Yashasvishukl'
            fgColor='#1D9BF0' bgColor='transparent'
            className="hover:scale-150  transform transition-transform duration-300"/>

        <SocialIcon url='https://hashnode.com/@yashasvi127'
            fgColor='transparent' bgColor='transparent'
            className="hover:scale-150 absolute transform transition-transform duration-300">
            <Image src={hashnode} alt='image' className=" relative top-3 justify-center items-center h-6 w-6 left-2  "/>
        </SocialIcon>       
      </motion.div> 

      <motion.div
        initial={{
          x:500,
          opacity:0,
          scale:0.2
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
          
        }}
        
        transition={{
          duration:1.3
        }}
      
        className='flex flex-row items-center  '>
          <SocialIcon
            className='cursor-pointer hover:scale-150 transform transition-transform duration-300'
            url='mailto:yashshukla127@gmail.com?cc=opportunity for frontend devlopment'
            network='email'
            fgColor='gray'
            bgColor='transparent'/>

    
  
      </motion.div> 

    </header>

  )

}

export default Header