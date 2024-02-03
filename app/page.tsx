"use client"
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import ExperienceReact from "@/components/ExperienceReact";
import Hero from "@/components/Hero";

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


      <section id="experience" className="snap-center">
        <ExperienceReact/>
      </section>
     
    </>
  );
}
