import { FaAngular, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { ExpirianceCard, SkillCard } from "../../components";
import portfolioImage from "../../assets/Dusan Ilic CV.jpeg";
import vaco from "../../assets/vaco.png";
import cards from "../../assets/cards.png";
import phots from "../../assets/phots.png";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { Carousel } from "antd";

const expirianceData = [
  {
    src: vaco,
  },
  {
    src: cards,
  },
  {
    src: phots,
  },
  // {
  //   src: china,
  // },
  // {
  //   src: hotel,
  // },
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
    <div className="w-100 h-100 flex justify-center  pt-2 text-white font-space">
      <div className="container">
        <div className="hello-padding">
          <p className="font-gaming font-30 text-yellow">
            Hello my name is Dusan
          </p>
          <p className="pt-1 font-16">
            I am a Software Developer / Engineer based in Belgrade, Serbia
          </p>
        </div>
        <div className="w-100 mt-5">
          <p className="font-gaming font-14 letter-spacing aboutme-padding">
            About me
          </p>
          <div className="about-me-container">
            <div className="image-container">
              <img
                loading="eager"
                src={portfolioImage}
                alt="Profile image"
                className="w-100 h-100 cover"
              />
            </div>
            <div className="text-container">
              <p className="font-14 line-height-18 letter-spacing text-font">
                Informatics graduate passionate about web development. During
                third year of university I worked as a Software Developer 1 at
                FactoryWW for a year, then expanded skills through courses in
                Angular, Flask, React, and more. Experienced in multiple
                programming languages and frameworks. Also interested in Data
                Science and AI.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 mt-5 skills-padding">
          <div>Skills</div>
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
          <p className="font-gaming font-14 portfolio-padding-title">
            Portfolio
          </p>
          <div className="w-100 mt-2">
            <Carousel autoplay arrows className="pl-3 pr-3" dots={false}>
              {expirianceData.map((values, index) => (
                <ExpirianceCard src={values.src} key={index} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
