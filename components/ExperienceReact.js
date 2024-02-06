import React from 'react'
import { motion,useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';
import AnimatedText from '@/assets/AnimatedText';

const Details = ({position , company , time , work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-6 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{x:500}}
        whileInView={{x:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-extrabold text-2xl text-[#0C2D57]'>
                {position}&nbsp;
                <span className='font-sans text-3xl font-medium uppercase text-[#FC6736]'> @{company}</span>
                <p className='capitalize text-[15px]  font-semibold text-black/75' >{time}</p>
                <p className='font-semibold text-[20px] w-full text-gray-900'>{work}</p>
            </h3>
        </motion.div>
    </li>
  }


const ExperienceReact = () => {

    const ref = useRef(null);
    const{scrollYProgress} = useScroll({
      target:ref,
      offset:['start end','center start']
    })  
  return (
    <div   className=' my-64 h-screen relative flex flex-col  text-left 
    md:flex-row max-w-full z-0 justify-center items-center'>
      <motion.h3 initial={{
          x:-200,
          opacity:0,
        }}
        transition={{
          duration:0.8
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
      className='absolute top-24 right-100 font-bold uppercase tracking-[25px] text-[#525CEB] shadow-[#0766AD] shadow-2xl text-5xl '>experience...</motion.h3>


        
        <div ref={ref} className='z-10 mx-auto relative mt-32 justify-center left-[4%]'>
           <motion.div style={{scaleY:scrollYProgress}}
           className='absolute   top-10 w-[5px] h-full  bg-indigo-950 origin-top left-[6%]' />
            
            {/* the cirlcle motion which was not working was solved by alligning this👆 left */}
            <ul className='w-full flex flex-col items-start justify-between ml-4  left-100'>
              <Details position="Freelancer" company="self-employed" time="2022-2023" work="worked on various projects as an react devlopers for clients and i"/>
              <Details position="Intern" company="Slash-Mark" time="feb24-may24" work="as an frontend intern worked on  react frontend technologies built projects on varius problem ."/>
              <Details position="Intern" company="Slash-Mark" time="feb24-may24" work="as an frontend intern worked on  react frontend technologies built projects on varius problem ."/>
              <Details position="Intern" company="Slash-Mark" time="feb24-may24" work="as an frontend intern worked on  react frontend technologies built projects on varius problem ."/>
              
              
            </ul>
        </div>

        <div className='w-full absolute top-[30%] bg-gradient-to-r   from-yellow-500 h-[500px] -skew-y-12 z-0'></div>
    </div>
  )
}

export default ExperienceReact