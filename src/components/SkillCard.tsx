const SkillCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex gap-5">
      <div className="scale-150 bg-green p-1 rounded-lg">{icon}</div>
      <div className="text-center pr-1 ml-05 flex align-center">{title}</div>
    </div>
  );
};
export { SkillCard };
