"use client"
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import ExperienceReact from "@/components/ExperienceReact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectsSec from "@/components/ProjectsSec";


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

      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      
      {/* expreiment section 
      <section id="projects" className="snap-start">
        <ProjectsSec/>
      </section> */}
      
      
      <section id="skills" className="snap-start">
          <Skills/>
        </section>

      <section id="experience" className="snap-center">
        <ExperienceReact/>
      </section>
      
      
      
     
    </>
  );
}
