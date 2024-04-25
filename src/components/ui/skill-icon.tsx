type Props = {
  children: React.ReactNode;
  skillName: string;
};

function SkillIcon({ children, skillName }: Props) {
  return (
    <div className="w-32 p-2 flex flex-col items-center justify-between">
      <div className="h-full w-full flex items-center justify-center">
        {children}
      </div>
      <h1 className="py-2 font-semibold">{skillName}</h1>
    </div>
  );
}

export default SkillIcon;
