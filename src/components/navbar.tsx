import { navLinks } from "@/lib/nav-links";
import Button from "./ui/button";
import GlassMorph from "./ui/glass-morph";
import NavbarLink from "./ui/navbar-link";
type Props = {};

function Navbar({}: Props) {
  return (
    <GlassMorph className="py-4 px-4 rounded-xl border border-gray-500 flex justify-between">
      <h1 className="text-white text-2xl my-auto font-bold">
        <span className="text-light-green">&lt;R</span>ohit Patil
        <span className="text-light-green">/&gt;</span>
      </h1>
      <div className="flex flex-between">
        {navLinks.map((link) => (
          <NavbarLink key={link.href} label={link.label} href={link.href} />
        ))}
      </div>
      <a
        href="https://drive.google.com/file/d/1RIylVko-_jGaG6_YU6sYHh9xO6qY8BW6/view"
        target="__blank"
      >
        <Button text="Resume" />
      </a>
    </GlassMorph>
  );
}

export default Navbar;
