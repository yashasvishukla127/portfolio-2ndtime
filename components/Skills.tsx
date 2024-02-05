import AnimatedText from '@/assets/AnimatedText'
import React from 'react'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative'>
        <AnimatedText className='text-[#525CEB] shadow-[#0766AD] shadow-2xl' text='Skills'/>
        <div className='' style={{height:'500px'}} >
          <AnimatedText className='bottom-2 pt-[30%] !text-[#0C2D57] !tracking-[4px]'  text ="Crafting digital experiences that transcend functionality and embrace innovation"/>

        </div>

        
 
    </div>
  )
}

export default Skills