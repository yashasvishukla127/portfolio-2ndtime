import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FunctionComponent<AnimatedTextProps> = ({ text, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  // Reset inView state when the element is out of view
  // useEffect(() => {
  //   if (!inView && entry && entry.isIntersecting === false) {
  //     controls.stop(); // Stop any ongoing animations
  //   }
  // }, [inView, entry, controls]);

  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.01,
        staggerChildren: 0.02,
        duration: 0.2,
      },
    },
  };

  const words = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className='mx-auto py-2 flex items-center justify-center text-center'>
      <motion.h1
        ref={ref}
        variants={quote}
        initial='initial'
        animate={controls}
        className={`inline-block absolute top-24 text-4xl font-extrabold capitalize ${className}`}
      >
        {text.split('').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block' variants={words}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
