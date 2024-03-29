"use client";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import ExperienceReact from "@/components/ExperienceReact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Skills2 from "@/components/Skill2";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectsSec from "@/components/ProjectsSec";
import Bubble from "@/components/exper/Bubble";


export default function Home() {
  return (
    <><main className=" snap-y snap-mandatory">
      <Head>
        <title> yash portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className=" snap-center ">
        <Bubble/>       
      </section>

      <section 
        id="projects"
        className="snap-start"
        style={{ height: "1200px" }}
      >
        <Projects />
      </section>

      {/* expreiment section 
      <section id="projects" className="snap-start">
      <ProjectsSec/>
    </section> */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* <section id="skills" className="snap-start">
        <Skills2 />
      </section> */}

      <section id="experience" className="snap-center">
        <ExperienceReact />
      </section>

      <footer>
        <Footer/>
      </footer>

      

      </main>
    </>
  );
}
