import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

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
  children?: React.ReactNode;
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
  const DrawOutlineButton = ({
    children,
    ...rest
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
    return (
      <button
        {...rest}
        className="group relative px-4 py-2 font-bold text-black transition-colors duration-[400ms] hover:text-[#610C9F]"
      >
        <span>{children}</span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[4px] w-0 bg-[#22092C] transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[4px] bg-[#22092C] transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[4px] w-0 bg-[#22092C] transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-[#22092C] transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    );
  };

  return (
  <div className="hover:opacity-100 opacity-90
  transition-opacity duration-500">
      
    
    <motion.article
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="snap-center  rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[650px] 
          overflow-hidden relative bg-slate-700  "
    >
      <div className="flex flex-col relative left-[45%] ">
        <div className="relative group" style={{ height: 550 }}>
          <h4 className="font-bold text-center text-blue-200 hover:text-black uppercase relative left-[-45%] text-2xl mt-2">
            {name}
          </h4>

          <Link href={link} target="_blank" className="">
            <Image
              className="object-cover absolute left-10 top-[15%] transition-transform duration-300 hover:scale-105 hover:blur-[2px]"
              width={300}
              height={400}
              src={image}
              alt={name}
            />

            <div className="relative top-60 left-[20%] ">
              <DrawOutlineButton>click for live app</DrawOutlineButton>
            </div>
          </Link>
        </div>

        <div className="px-0 md:px-10 relative top-1 left-[15%] ">
          <div className="flex space-x-5 my-10">
            <Image
              src={tech1img}
              width={30}
              height={40}
              alt={tech1}
              className="hover:scale-110  transition-transform duration-300"
            />
            <Image
              src={tech2img}
              width={30}
              height={40}
              alt={tech2}
              className="hover:scale-110  transition-transform duration-300 "
            />
            <Image
              src={tech3img}
              width={30}
              height={40}
              alt={tech3}
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <p className="text-center font-bold absolute top-20 left-5 w-[280px] uppercase text-black ">
        {data}
      </p>
      </motion.article>
  </div>     
  );
};

export default ProjectShowcase;
