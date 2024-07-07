import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import aboutMe from "@/lib/about-me";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row justify-center items-center h-screen">
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold py-1">
          Hi, I&apos;m
        </h2>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold py-1 text-light-green">
          {aboutMe.name}
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 py-1">
          {aboutMe.heading}
        </h3>
        <a href="#projects">
          <Button className="my-6 py-1 px-2 md:py-2 md:px-4">
            See My Projects
          </Button>
        </a>
      </div>
      <Image
        className="lg:w-1/2"
        src="/developer1.svg"
        alt="Developer Illustration by Undraw"
        width={700}
        height={700}
      />
    </div>
  );
}

export default Hero;
