"use client";
import { navLinks } from "@/lib/nav-links";
import Button from "../ui/button";
import GlassMorph from "../ui/glass-morph";
import NavbarLink from "../ui/navbar-link";
import { useEffect, useState } from "react";
type Props = {};

function Navbar({}: Props) {
  let [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let sections = navLinks.map((link) => document.getElementById(link.href));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section && observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        section && observer.unobserve(section);
      });
    };
  }, []);

  return (
    <GlassMorph className="py-4 px-4 rounded-xl border border-gray-500 flex justify-between fixed left-4 sm:left-6 md:left-8 lg:left-10 xl:left-20 2xl:left-40 right-4 sm:right-6 md:right-8 lg:right-10 xl:right-20 2xl:right-40 top-4 z-50">
      <h1 className="text-2xl my-auto font-bold">
        <span className="text-light-green">&lt;R</span>ohit Patil
        <span className="text-light-green">/&gt;</span>
      </h1>
      <div className="flex flex-between">
        {navLinks.map((link) => (
          <NavbarLink
            key={link.href}
            label={link.label}
            href={link.href}
            activeSection={activeSection}
          />
        ))}
      </div>
      <a
        href="https://drive.google.com/file/d/1RIylVko-_jGaG6_YU6sYHh9xO6qY8BW6/view"
        target="__blank"
      >
        <Button>Resume</Button>
      </a>
    </GlassMorph>
  );
}

export default Navbar;
