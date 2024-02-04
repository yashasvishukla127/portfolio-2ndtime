import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

const ProjectCard = ({name ,link ,image,tech1 , tech2 , tech3, 
    tech1img ,tech2img , tech3img ,date}) => {
  return (
    <article className='snap-center flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-slate-500 hover:opacity-100 opacity-80
    cursor-pointer transition-opacity duration-1000 overflow-hidden'>
        <motion.div initial={{x:-200,opacity:0,}}
            transition={{duration:0.8}}whileInView={{x:0,opacity:1,}} >
            <Link href={link} target='_blank'>
                <Image className='object-cover object-center' width={300} height={400} src={image} alt={name}/>

            </Link>
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='font-bold text-blue-200 hover:text-blue-600 uppercase text-2xl mt-2'>{name}</h4>
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