import AnimatedText from '@/assets/AnimatedText'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{x:-200,opacity:0,}}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }} whileInView={{ x: 0, opacity: 1, }}
      className='h-screen flex flex-col relative'>
      
        <AnimatedText className='text-[#525CEB] shadow-[#0766AD]  shadow-2xl font-bold uppercase tracking-[15px] ]' text='Skills'/>
        
        <div className=' absolute left-[8%] top-[5%]  ' style={{ width: '350px' }} >
          <AnimatedText className='bottom-2 pt-[30%] !text-[#0C2D57] !tracking-[4px]'
          text="Crafting digital experiences that transcend functionality and embrace innovation" />
        </div>

        
 
    </motion.div>
  )
}

export default Skills