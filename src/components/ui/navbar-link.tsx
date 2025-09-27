import { cn } from "@/lib/utils";

interface NavbarLinkProps {
  href: string;
  label: string;
  activeSection: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  label,
  activeSection,
}) => {
  const isActive = activeSection === href;

  return (
    <a
      href={`/#${href}`}
      className={cn("my-auto mx-3 text-white hover:bounce-up", {
        "font-semibold": isActive,
        "font-light": !isActive,
      })}
    >
      {label}
    </a>
  );
};

export default NavbarLink;
