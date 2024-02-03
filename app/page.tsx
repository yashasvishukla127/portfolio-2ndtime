"use client"
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import ExperienceReact from "@/components/ExperienceReact";

export default function Home() {
  return (
    <>
      <Head>
            <title> yash portfolio</title>
      </Head>

      <Header/>
      <ExperienceReact/>
    </>
  );
}
