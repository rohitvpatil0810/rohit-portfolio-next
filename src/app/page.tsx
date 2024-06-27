import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
