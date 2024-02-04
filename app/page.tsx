"use client"
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import ExperienceReact from "@/components/ExperienceReact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import About2 from "@/components/About2";

export default function Home() {
  return (
    <>
      <Head>
            <title> yash portfolio</title>
      </Head>

      <Header/>
      
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-start'>
        <About/>
      </section>

      {/* <About2/>      // for experimental learning */}

      <section id="experience" className="snap-center">
        <ExperienceReact/>
      </section>

      {/* in project section use scroll snap align */}
     
    </>
  );
}
