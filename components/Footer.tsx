import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-neutral-50 via-gray-300 to-gray-400 h-[50vh] relative ">
      <img
        src="/webdevloper.svg"
        className="h-[340px] w-auto animate-spin-slow absolute bottom-10 left-20 rounded-full "
      />
      <Link href="mailto:yashshukla127@gmail.com?cc=opportunity for frontend devlopment" className="flex items-center justify-center 
        absolute left-[180px] bottom-[140px] font-extrabold text-3xl text-light uppercase border border-solid border-black
         bg-black rounded-full h-[140px] w-[140px] shadow-2xl text-center"> hire me</Link>
      
    </div>
  );
};

export default Footer;
