"use client";
import { usePathname } from "next/navigation";
interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <a
      href={href}
      className={`my-auto mx-3 text-white ${
        isActive ? "font-semibold" : "font-light"
      }`}
    >
      {label}
    </a>
  );
};

export default NavbarLink;
