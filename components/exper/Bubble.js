"use client"
import useMousePosition from './useMousePosition';
import React from 'react';
import { motion } from 'framer-motion';
import Styles from "./page.module.scss";
import { useState } from 'react';



const Bubble = () => {
    const { x, y } = useMousePosition();
    const [isHovered, setisHovered] = useState(false);
    const size = isHovered ? 400 :100;

  return (
    <main className={Styles.main} >
      <motion.div className={Styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{type: "tween" , ease: "backOut"}}
      >
        <p className='' onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}>
          I am confident that my hardworking nature, coupled with my passion for frontend development, will enable meaningful contributions to your team's success</p>
      </motion.div>

      <div className={Styles.body}>
        <p> As a <span> passionate and skilled </span> web developer, I specialize in crafting high-quality designs for web pages that captivate audiences with their eye-catching beauty and functionality. </p>

      </div>
    </main>
  )
}

export default Bubble