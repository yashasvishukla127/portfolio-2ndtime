import React from 'react';
import {motion} from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FunctionComponent<AnimatedTextProps> = ({ text, className = '' }) => {
  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      }
    }
  }

  const words = {
    initial: {
      opacity: 0,
      y:-10,
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        duration:.5,
         
      }
    }
  }


  return (
    <div className='  mx-auto py-2 flex  items-center justify-center text-center '>
      <motion.h1 variants={quote} initial='initial' animate='animate'
      className={` inline-block absolute top-24   text-4xl font-extrabold   capitalize  ${className}`}>
        {text.split('').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block'
           variants={words}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1 >
    </div>
  );
};

export default AnimatedText;
