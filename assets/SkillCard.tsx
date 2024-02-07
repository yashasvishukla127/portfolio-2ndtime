import React from "react";
import { motion } from "framer-motion";

type skillProps = {
  directionLeft?: boolean;
  source: string;
  value: string;
  skill: string;
};

const SkillCard: React.FC<skillProps> = ({
  directionLeft,
  source,
  value,
  skill,
}) => {
  return (
    <>
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          src={source}
          alt={skill}
          className="rounded-full border border-gray-500 object-cover  
        w-24 h-24 xl:w-32 xl:h-32 filter group-hover:bg-blue-300  
        transition duration-300 ease-in-out"
        />

        <div
          className="absolute opacity-0 group-hover:opacity-80 transition duration-500
       ease-in-out group-hover:bg-gray-200 rounded-full h-24 w-24 md:w-28 md:h-28
       xl:w-32 xl:h-32 z-10 "
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{value}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillCard;
