import React from "react";
import { motion } from "framer-motion";
import ProjectShowcase from "./ProjectShowcase";
import AnimatedText from "@/assets/AnimatedText";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 
    justify-evenly mx-auto items-center   "
    >
      {/* <h3 className='text-4xl font-extrabold absolute top-24 tracking-[12px] text-[#F94C10] shadow-2xl shadow-orange-500'> PROJECTS</h3> */}
      <AnimatedText
        className="text-indigo-950 shadow-[#0766AD] shadow-2xl tracking-[25px]"
        text="PROJECTS"
      />
      <div className="w-full flex  absolute space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory top-[30%] mb-7  ">
        <motion.div
          className="flex-none  "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectShowcase
            name="restaurant landing page"
            link="https://yashasvishukla127.github.io/restaurantwebsite/"
            image="/laurels2.jpg"
            tech1="react"
            tech2="js"
            tech3="css"
            tech1img={"/react.svg"}
            tech2img={"/js.svg"}
            tech3img={"/css.png"}
            data="a modern restaurant landing page built with React, Tailwind CSS, JavaScript, and CSS. Highlights include a responsive design, engaging video integration, dynamic gallery, and mastery of Tailwind CSS for streamlined styling. This project showcases my expertise in React, Tailwind CSS, and responsive web design "
          />
        </motion.div>

        <motion.div
          className="flex-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectShowcase
            name="portfolio"
            link="https://portfolio-2ndtime-9az6yr2m4-yashasvi-shuklas-projects.vercel.app"
            image="/programmer.jpg"
            tech1="next"
            tech2="tailwind"
            tech3="typescript"
            tech1img={"/next.svg"}
            tech2img={"/tailwind-css.svg"}
            tech3img={"/typescript.png"}
            data="jan24-feb24"
          />
        </motion.div>

        <motion.div
          className="flex-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectShowcase
            name="portfolio"
            link="https://portfolio-2ndtime-9az6yr2m4-yashasvi-shuklas-projects.vercel.app"
            image="/programmer.jpg"
            tech1="next"
            tech2="tailwind"
            tech3="typescript"
            tech1img={"/next.svg"}
            tech2img={"/tailwind-css.svg"}
            tech3img={"/typescript.png"}
            data="jan24-feb24"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
