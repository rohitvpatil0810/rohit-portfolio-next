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
      className={`my-auto mx-3 text-white hover:bounce-up ${
        isActive ? "font-semibold" : "font-light"
      }`}
    >
      {label}
    </a>
  );
};

export default NavbarLink;
