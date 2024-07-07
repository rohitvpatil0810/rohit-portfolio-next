import { cn } from "@/lib/utils";

type Props = {
  icon: React.ReactNode;
  sociallink: string;
  className?: string;
  username?: string;
};

function SocialIcon({ icon, sociallink, className = "", username }: Props) {
  return (
    <a
      href={sociallink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1 bounce-up"
    >
      <div className={cn("p-1 flex w-fit rounded-full border-2", className)}>
        {icon}
      </div>
      {username && <h1 className="hidden md:block text-base">{username}</h1>}
    </a>
  );
}

export default SocialIcon;
