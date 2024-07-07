"use client";
import { navLinks } from "@/lib/nav-links";
import Button from "../ui/button";
import GlassMorph from "../ui/glass-morph";
import NavbarLink from "../ui/navbar-link";
import { useEffect, useState } from "react";
import aboutMe from "@/lib/about-me";
import { IconMenu2, IconMenuDeep, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
type Props = {};

function Navbar({}: Props) {
  const [activeSection, setActiveSection] = useState("about-me");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav
      className={cn("fixed top-0 right-0 left-0 z-50", {
        "top-0 bottom-10": isMenuOpen,
      })}
    >
      <GlassMorph
        className={cn(
          "my-4 py-2 sm:py-4 px-4 rounded-xl border border-gray-500 flex justify-between items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-40",
          {
            "flex-col h-full": isMenuOpen,
            "flex-row": !isMenuOpen,
          }
        )}
      >
        {/* Name and close button */}
        <div
          className={cn(
            "flex tab:flex-none w-full tab:w-fit justify-between items-center"
          )}
        >
          <h1 className="w-fit text-xl sm:text-2xl my-auto font-bold">
            <span className="text-light-green">&lt;R</span>ohit Patil
            <span className="text-light-green">/&gt;</span>
          </h1>
          {isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="tab:hidden text-6xl text-light-green"
            >
              <IconX size={28} />
            </button>
          )}
        </div>

        {/* Nav links on big screen */}
        <div className="hidden tab:flex flex-between">
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
          className="hidden tab:block"
          href={aboutMe.resumeLink}
          target="__blank"
        >
          <Button>Resume</Button>
        </a>

        {/* Menu bar button in small screen */}
        <div
          className={cn("tab:hidden", {
            hidden: isMenuOpen,
          })}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-light-green"
          >
            {!isMenuOpen ? <IconMenuDeep size={28} /> : undefined}
          </button>
        </div>

        {/* Nav links on mobile screen */}
        {isMenuOpen && (
          <>
            <div className="flex h-full flex-col justify-evenly items-center text-lg">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => setIsMenuOpen(false)}>
                  <NavbarLink
                    label={link.label}
                    href={link.href}
                    activeSection={activeSection}
                  />
                </button>
              ))}
            </div>
            <a href={aboutMe.resumeLink} target="__blank">
              <Button>Resume</Button>
            </a>
          </>
        )}
      </GlassMorph>
    </nav>
  );
}

export default Navbar;
