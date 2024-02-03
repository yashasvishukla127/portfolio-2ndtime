"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import hashnode from '@/assets/hashnode.png'


type Props = {}

function Header({}: Props) {
  return (
    <header>

        <SocialIcon url='https://github.com/yashasvishukla127'
            fgColor='gray' bgColor='transparent'
            className='hover:cursor-pointer'/>

        <SocialIcon url='https://www.linkedin.com/in/yashasvi-shukla-08401b255/'
            fgColor='purple' bgColor='transparent'
            className="hover:scale-150 transform transition-transform duration-300"/> 

        <SocialIcon url='https://twitter.com/Yashasvishukl'
            fgColor='blue' bgColor='transparent'
            className="hover:scale-150 hover:bg-[#cbd5e1] transform transition-transform duration-300"/>

        <SocialIcon url='https://hashnode.com/@yashasvi127'
            fgColor='transparent' bgColor='transparent'
            className="hover:scale-150 hover:bg-[#cbd5e1] absolute transform transition-transform duration-300">
            <Image src={hashnode} alt='image' className=" relative top-3 justify-center align- items-center h-6 w-6 left-2  "/>
        </SocialIcon>       
        
    </header>

  )

}

export default Header