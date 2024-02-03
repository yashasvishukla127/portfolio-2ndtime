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
            translate-y-20 relative top-[-20px]'>Software developer</h1>
            
        
            <BackgroundCircles />  
            <Image className='h-32 w-32 relative rounded-full object-cover top-20 mx-auto translate-y-[70px]' src= {clgstudent} alt='yash'/>
        </div>


        <div className='z-20'>
            <h2 className='translate-y-20 bottom-6 text-4xl font-semibold px-10 text-[#43433f]'>
                <span className='mr-3' >{text}</span>
                <Cursor cursorColor= "#3876BF" />
            </h2>


            <div className='pt-5 translate-y-40 text-[#8bb2c5]'>
                    <Link href= '#about'>   <button className='heroButton' >About</button>   </Link>
                    <Link href= '#projects'> <button className='heroButton'>Projects</button> </Link>
                    <Link href= '#skills'> <button className='heroButton'>Skills</button> </Link>
                    <Link href= '#experience'> <button className='heroButton'>Experience</button>  </Link>
                    
            </div>
        </div>    


    </div>
  )
}

export default Hero


// notes for this section