import Image from "next/image";
import React from "react";
import Button from "../ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="w-1/2">
        <h2 className="text-5xl font-semibold py-1">Hi, I&apos;m</h2>
        <h1 className="text-8xl font-bold py-1 text-light-green">
          Rohit Patil
        </h1>
        <h3 className="text-3xl font-semibold text-gray-200 py-1">
          A Passionate Software Engineer and Computer Engineering Student from
          India 🇮🇳
        </h3>
        <a href="#projects">
          <Button className="my-6">See My Projects</Button>
        </a>
      </div>
      <Image
        src="/developer1.svg"
        alt="Picture of the author"
        width={700}
        height={700}
      />
    </div>
  );
}

export default Hero;
