import AnimatedText from "@/assets/AnimatedText";
import React from "react";
import { motion } from "framer-motion";
import SkillCard from "@/assets/SkillCard";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="h-screen flex flex-col relative items-center justify-center "
    >
      <AnimatedText
        className="text-indigo-900 shadow-indigo-900  shadow-2xl font-bold uppercase tracking-[15px]"
        text="Skills" 
      />

      {/* parent div of left and right side div */}
      <div className="flex justify-center items-center max-w-screen-lg " >

        {/* flex left side */}
        <div
          className="absolute left-[15%] top-[20%]   "
          style={{ width: "350px" }}
        >
          <AnimatedText
            className="bottom-2 pt-[30%] text-purple-900 tracking-[4px]"
            text="Crafting digital experiences that transcend functionality and embrace innovation"
          />
        </div>

        {/* flex right side */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className=" flex relative flex-col text-center md:text-left
           xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
            xl:space-y-0 mx-auto items-center top-20 "
          style={{ left: "40%", width: "calc(50% - 100px)" }}
        >
          {/* <h3 className="absolute top-24 left-0 uppercase tracking-[20px] text-black text-4xl">
            Skills
          </h3> */}

          {/* <h3 className="absolute top-36 left-0 uppercase tracking-[3px] text-gray-500 text-sm">
            Hover over for currently skill proficiency
          </h3> */}
          <div className="grid grid-cols-3 gap-5 justify-center items-center text-center">
            <SkillCard source="/html.png" value="90" skill="HTML" />
            <SkillCard source="/css.png" value="90" skill="CSS" />
            <SkillCard source="/github.png" value="80" skill="Github" />
            <SkillCard source="/java.png" value="80" skill="Java" />
            <SkillCard source="/js.svg" value="80" skill="Javascript" />
            <SkillCard source="next.svg" value="80" skill="Next.js" />
            <SkillCard source="/typescript.png" value="80" skill="Typescript" />
            <SkillCard source="/react.svg" value="80" skill="React" />
            <SkillCard source="/tailwind-css.svg" value="80" skill="Tailwind" />
            <SkillCard source="/framer.svg" value="80" skill="Framer" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
