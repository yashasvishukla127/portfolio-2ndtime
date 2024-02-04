import React from 'react'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative'>
        <div className='w-full flex absolute space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <motion.div className='flex-none'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} >  
                <ProjectCard name="modernrestaurant" 
                link="https://yashasvishukla127.github.io/restaurantwebsite/" 
                image="/laurels2.jpg" tech1="react" tech2="js" tech3="css" 
                tech1img={"/react.svg"} tech2img={"/js.svg"} tech3img={"/css.png"}
                date="nov23-dec23 " />
            </motion.div>      

            <motion.div className='flex-none'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} >
                <ProjectCard name='portfolio'
                link='https://portfolio-2ndtime-9az6yr2m4-yashasvi-shuklas-projects.vercel.app'
                image='/programmer.jpg' tech1="next" tech2="tailwind" tech3="typescript"
                tech1img={"/next.svg"} tech2img={"/tailwind-css.svg"} tech3img={"/typescript.png"}
                date='jan24-feb24'/>
            </motion.div>
                
                           
        </div>
    </div>
  )
}

export default Projects