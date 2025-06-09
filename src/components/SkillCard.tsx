const SkillCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex">
      <div className="bg-green p-1 border-20 mr-1">{icon}</div>
      <div className="text-center pr-1 ml-05 flex align-center">{title}</div>
    </div>
  );
};
export { SkillCard };
