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
    icon: <FaReact className="scale-15" />,
    title: "React",
  },
  {
    icon: <FaAngular className="scale-15" />,
    title: "Angular",
  },
  {
    icon: <RiNextjsFill className="scale-15" />,
    title: "NextJs",
  },
  {
    icon: <BiLogoFlask className="scale-15" />,
    title: "Flask",
  },
  {
    icon: <FaNodeJs className="scale-15" />,
    title: "NodeJs",
  },
  {
    icon: <FaPython className="scale-15" />,
    title: "Python",
  },
  {
    icon: <FaJava className="scale-15" />,
    title: "Java",
  },
  {
    icon: <SiTypescript className="scale-15" />,
    title: "TypeScript",
  },
  {
    icon: <SiJavascript className="scale-15" />,
    title: "JavaScript",
  },
  {
    icon: <FaWordpress className="scale-15" />,
    title: "WordPress",
  },
];
const Skills = () => {
  return (
    <section className="w-100 pb-5 hello-padding">
      <div className="font-gaming font-20 ">Skills</div>
      <div
        className="mt-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px, 1fr))",
          gap: "30px",
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
