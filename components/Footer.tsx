import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" h-[40vh] relative" >
      <img
        src="/CircularText.svg"
        className="h-[200px] w-auto animate-spin-slow absolute bottom-10 left-20 rounded-full "
      />
      <Link href="mailto:yashshukla127@gmail.com?cc=opportunity for frontend devlopment" className="flex items-center justify-center 
        absolute left-[128px] bottom-[90px] font-extrabold text-2xl text-light uppercase border border-solid 
         bg-black rounded-full h-[100px] w-[10s0px] shadow-2xl shadow-black text-center
          hover:text-black hover:bg-white hover:scale-110 transition-transform duration-300"> hire me
      </Link>

      <div>
        <img src="/lightbulb.svg" className="h-[200px] w-auto absolute bottom-10 right-20" />
      </div>
      
    </div>
  );
};

export default Footer;
