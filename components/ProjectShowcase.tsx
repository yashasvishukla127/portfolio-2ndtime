import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface ProjectCardProps {
  name: string;
  link: string;
  image: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech1img: string;
  tech2img: string;
  tech3img: string;
  data: string;
}

const ProjectShowcase: React.FC<ProjectCardProps> = ({
  name,
  link,
  image,
  tech1,
  tech2,
  tech3,
  tech1img,
  tech2img,
  tech3img,
  data,
}) => {
  return (
    <motion.article  initial={{ x: -200, opacity: 0 }}
    transition={{ duration: 0.8 }}
    whileInView={{ x: 0, opacity: 1 }}
      className='snap-center  rounded-lg items-center space-y-7 
    flex-shrink-0 w-[400px] md:w-[500px] xl:w-[650px] bg-slate-500 hover:opacity-100 opacity-80
     transition-opacity duration-300 overflow-hidden relative '>
      <div className='flex flex-col relative left-[45%]'>
        <div>
          <h4 className='font-bold text-center text-blue-200 hover:text-black uppercase relative left-[-45%] text-2xl mt-2'>
            {name}
          </h4>

          <Link href={link} target='_blank'>
            <Image
              className='object-cover object-center relative pt-5 -left-[40%] transition-transform duration-300 hover:scale-105 hover:blur-[2px]'
              width={300}
              height={400}
              src={image}
              alt={name}
            />
          </Link>
        </div>

        <div className='px-0 md:px-10 relative -left-[35%] '>
          <div className='flex space-x-5 my-10'>
            <Image src={tech1img} width={30} height={40} alt={tech1} className='hover:scale-110' />
            <Image src={tech2img} width={30} height={40} alt={tech2} className='hover:scale-110' />
            <Image src={tech3img} width={30} height={40} alt={tech3} className='hover:scale-110' />
          </div>
        </div>
      </div>

      <p className='text-center absolute top-10 right-5 w-[280px] uppercase text-black '>
        {data}
      </p>
    </motion.article>
  );
};

export default ProjectShowcase;
