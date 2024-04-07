type Props = {
  icon: React.ReactNode;
  sociallink: string;
  className?: string;
};

function SocialIcon({ icon, sociallink, className = "" }: Props) {
  return (
    <a
      href={sociallink}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-1 flex w-fit rounded-full border-2 ${className}`}
    >
      {icon}
    </a>
  );
}

export default SocialIcon;
