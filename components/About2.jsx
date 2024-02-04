import React from 'react'
import Tilt from 'react-parallax-tilt'
import programmer from '../public/programmer.jpg'
import Image from 'next/image'

const About2 = () => {
  return (
    <div className='justify-evenly flex items-center text-center space-y-10 mx-auto max-w-7xl'>
        <div className='justify-evenly items-center text-center'>

        
            <Tilt className=' h-[400px] w-[400px] bg-black'>
            <Image src={programmer} alt='programer'
            width={500} height={500}
            className='blur-[1px] grayscale hover:grayscale-0 hover:blur-0 -skew-y-3 hover:skew-y-3'/>
            </Tilt>
        </div>
        <div>
            <h4 className='font-bold text-3xl'>here is a little background</h4>
            <p>Greetings,I am a dedicated web developer proficient in a comprehensive range of technologies 
            essential for modern web applications. My expertise encompasses React, JavaScript, 
            HTML, CSS, and Next.js, ensuring that I can craft intuitive and dynamic web interfaces 
            tailored to specific needs. Additionally, my proficiency extends to algorithmic problem-solving,
            having tackled numerous Data Structures and Algorithms questions on LeetCode using the Java programming language.

            Throughout my professional journey, I have successfully conceptualized and executed two distinct projects, 
            each showcasing my commitment to delivering quality and innovation. My passion for web development transcends
            mere coding; I take immense pleasure in constructing aesthetically pleasing web pages that not only function 
            seamlessly but also captivate users with their design elements.

            I am eager to leverage my skills and enthusiasm to contribute meaningfully to challenging web development endeavors, 
            ensuring excellence and user satisfaction at every step.</p>
        </div>
    </div>
  )
}

export default About2