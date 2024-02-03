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
      <div className='flex flex-row items-center'>
        <SocialIcon url='https://github.com/yashasvishukla127'
            fgColor='#6e5494' bgColor='transparent'
            className='hover:cursor-pointer'/>

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
      </div> 

      <div className='flex flex-row items-center text-gray-500'>
          <SocialIcon
            className='cursor-pointer'
            url='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqmpjQjTMgNwGqfSNFVBvZxwwjBmvsfGhKnxZRZBKdxQntJgBjbvTFdvCZmKRpQLrdBV'
            fgColor='gray'
            bgColor='transparent'/>
          <p className='uppercase hidden md:inline-flex text-sm'>Get in Touch</p>
  
      </div> 

    </header>

  )

}

export default Header