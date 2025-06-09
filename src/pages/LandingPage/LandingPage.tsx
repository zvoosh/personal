import { FaAngular, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { ExpirianceCard, SkillCard } from "../../components";
import portfolioImage from "../../assets/DusanIlicPortfolioImage.jpg";
import vaco from "../../assets/vaco.png";
import china from "../../assets/china.png";
import hotel from "../../assets/hotel.png";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { Divider } from "antd";

const expirianceData = [
  {
    src: vaco,
  },
  {
    src: china,
  },
  {
    src: hotel,
  },
];

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
];

const LandingPage = () => {
  return (
    <div className="w-100 h-100 flex justify-center p-3 pt-2 text-white font-space">
      <div className="w-50">
        <div className="pt-5">
          <p className="font-gaming font-30 text-yellow">
            Hello my name is Dusan
          </p>
          <p className="pt-1 font-16">
            I am a Software Developer / Engineer based in Belgrade, Serbia
          </p>
        </div>
        <div className="w-100 mt-5">
          <p className="font-gaming font-14 letter-spacing">About me</p>
          <div className="flex mt-2">
            <div className="w-25">
              <img
                src={portfolioImage}
                alt="Profile image"
                className="w-100 h-100 cover"
              />
            </div>
            <div className="w-75 ml-4 flex align-center justify-center text-justify">
              <p className="font-14 line-height-18 letter-spacing">
                Graduated Informatics student with a passion for Web
                development. I worked as a Software Developer I at FactoryWW for
                a year, after that I spent time educating myself with various
                courses like Angular, Flask, React etc. During my time at
                University of Singidunum I’ve grown custom to working in
                different programming languages and frameworks at the same time.
                Other then web programming I am very interested in Data Science
                and AI.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 mt-5">
          <p>Skills</p>
          <div
            className="mt-2"
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
        </div>
        <div className="w-100 mt-5">
          <p className="font-gaming font-14">Work expiriance</p>
          <div className="w-100 mt-2">
            {expirianceData.map((values, index) => (
              <div>
                {/* <Divider className="bg-white m-2"/> */}
                <ExpirianceCard src={values.src}  key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
