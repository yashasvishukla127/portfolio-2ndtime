"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import hashnode from "@/assets/hashnode.png";

type Props = {};

function Header({}: Props) {
  return (
    <header className="fixed  h-[70px] flex items-start justify-between  mx-auto z-20 xl:items-center 
     w-full mix-blend-difference backdrop:filter backdrop-blur-md ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center mx-60"
      >
        <SocialIcon
          url="https://github.com/yashasvishukla127"
          fgColor="#6e5494"
          bgColor="transparent"
          className="hover:cursor-pointer hover:scale-150 transition-transform duration-300"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/yashasvi-shukla-08401b255/"
          fgColor="#0a66c2"
          bgColor="transparent"
          className="hover:scale-150 transform transition-transform duration-300"
        />

        <SocialIcon
          url="https://twitter.com/Yashasvishukl"
          fgColor="#1D9BF0"
          bgColor="transparent"
          className="hover:scale-150  transform transition-transform duration-300  "
        />

        <SocialIcon
          url="https://hashnode.com/@yashasvi127"
          fgColor="transparent"
          bgColor="transparent"
          className="hover:scale-150 absolute transform transition-transform duration-300"
        >
          <Image
            src={hashnode}
            alt="image"
            className=" relative top-3 justify-center items-center h-6 w-6 left-2  "
          />
        </SocialIcon>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center mx-40"
      >
        <Image
          src="/logos/namelogo.svg"
          height={10}
          width={10}
          alt="logo"
          className="w-10 h-10 object-contain"
        />
        {/* mix blend difference not working */}
        <div
          className="h-[35px] w-[250px]  group overflow-hidden  "
          // style={{ mixBlendMode: "difference" }}
        >
          <p className="text-white text-[20px] font-bold cursor-pointer flex px-5 group-hover:mt-[-35px]  transition-all duration-5000">
            Yashasvi &nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>
          <p className="text-white text-[20px] font-bold cursor-pointer top-1 relative flex px-5">
            Yashasvi &nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
