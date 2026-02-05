import {
  FaAngular,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoFlask } from "react-icons/bi";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { SkillCard } from "../../components";

const skillData = [
  {
    icon: <FaReact className="" />,
    title: "React",
  },
  {
    icon: <FaAngular className="" />,
    title: "Angular",
  },
  {
    icon: <RiNextjsFill className="" />,
    title: "NextJs",
  },
  {
    icon: <BiLogoFlask className="" />,
    title: "Flask",
  },
  {
    icon: <FaNodeJs className="" />,
    title: "NodeJs",
  },
  {
    icon: <FaPython className="" />,
    title: "Python",
  },
  {
    icon: <FaJava className="" />,
    title: "Java",
  },
  {
    icon: <SiTypescript className="" />,
    title: "TypeScript",
  },
  {
    icon: <SiJavascript className="" />,
    title: "JavaScript",
  },
  {
    icon: <FaWordpress className="" />,
    title: "WordPress",
  },
];
const Skills = () => {
  return (
    <section className="w-full pb-5 hello-padding">
      <div className="font-gaming font-20 ">Skills</div>
      <div
        className="mt-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px, 1fr))",
          gap: "50px",
        }}
      >
        {skillData.map((values, index) => (
          <SkillCard key={index} icon={values.icon} title={values.title} />
        ))}
      </div>
    </section>
  );
};

export { Skills };
