import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'

const ProjectCard = ({name ,link ,image,tech1 , tech2 , tech3, 
    tech1img ,tech2img , tech3img ,date}) => {
  return (
    <article className='snap-center flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[400px] md:w-[500px] xl:w-[650px] bg-slate-500 hover:opacity-100 opacity-80
     transition-opacity duration-1000 overflow-hidden relative '>
        <motion.div initial={{x:-200,opacity:0,}}
            transition={{duration:0.8}}whileInView={{x:0,opacity:1,}} 
            className=''>
            <h4 className='font-bold text-center text-blue-200 hover:text-black uppercase text-2xl mt-2'>{name}</h4>

            <Link href={link} target='_blank'>
                <Image className='object-cover object-center relative -left-[40%] ' width={300} height={400} src={image} alt={name}/>
            </Link>
        </motion.div>

        <div className='px-0 md:px-10 relative -left-[25%] '>
            <div className='flex space-x-5 my-5'>
                <Image  src={tech1img} width={30} height={40} alt={tech1}/>
                <Image src={tech2img} width={30} height={40} alt={tech2}/>
                <Image src={tech3img} width={30} height={40} alt={tech3}/>
            </div>
            <p>{date}</p>
        </div>
    </article>
  )

}

export default ProjectCard