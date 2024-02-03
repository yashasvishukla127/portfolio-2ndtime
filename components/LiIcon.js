import React from 'react'
import { motion , useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
  const{scrollYProgress} = useScroll({
    target:reference,
    offset:["center end","center center"]
  })  
  return (
    <figure className='absolute left-1 stroke-orange-500'>
        <svg className='-rotate-50' width="75" height="75" viewBox='0 0 100 100'> 
            <circle cx='75' cy='50' r='20' className='stroke-orange-500 stroke-1 fill-none' />
            <motion.circle cx='75' cy='50' r='20' className=' stroke-[6px] fill-white'
            style={{pathLength:scrollYProgress}} />
            <circle  cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-black' />
        </svg>
    </figure>
  )
}


export default LiIcon