import aboutMe from "@/lib/about-me";
import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="text-white text-center py-4">
        <p>🎯 Never Stop Learning - Rohit Patil</p>
        <p className="flex flex-col sm:flex-row justify-center items-center mt-2 text-gray-200 hover:text-white hover:cursor-pointer">
          <span className="mr-2">View source code at</span>
          <a
            href={aboutMe.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center hover:text-light-green"
          >
            <IconBrandGithub className="mr-2" />
            <span>rohitvpatil0810/rohit-portfolio-next</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
