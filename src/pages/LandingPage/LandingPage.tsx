import {
  FaAngular,
  FaBoxOpen,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { CountUp, SkillCard } from "../../components";
import start from "../../assets/start.png";
import office from "../../assets/office.jpg";
import Dusan from "../../assets/Dusan Ilic CV.jpeg";
import singidunum from "../../assets/singidunum.jpg";
import { SiJavascript, SiStackblitz, SiTypescript } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { useState } from "react";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";

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

const LandingPage = () => {
  const [index, setIndex] = useState<number>(0);
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
        <div className="w-100 pb-5 hello-padding">
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
        </div>
        <div className="w-100 ">
          <p className="font-gaming font-20 mb-5 hello-padding ">Portfolio</p>
          <div className="card-grid">
            <div className="card">
              <img src={start} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <div className="overlay-text bold">Vaco photo gallery</div>
                  <div className="overlay-text thin">React application</div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={office} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <div className="overlay-text bold">Portfolio websites</div>
                  <div className="overlay-text thin">Wordpress</div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={singidunum} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <div className="overlay-text bold">
                    10+ Practical Projects
                  </div>
                  <div className="overlay-text thin">
                    University of Singiduum
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={office} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <div className="overlay-text bold">Front-end developer</div>
                  <div className="overlay-text thin">FactoryWW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 hello-padding" style={{ userSelect: "none" }}>
          <div className="font-gaming font-20  mb-4 ">About me</div>
          <div className="font-12 line-height-18 letter-spacing text-font mt-1 flex justify-center">
            <div
              className="text"
              style={{ backgroundColor: "rgba(16,15,15,0.5)" }}
            >
              <div
                className="w-100 font-10 font-gaming"
                style={{
                  borderRadius: "20px 20px 0px 0px",
                  textAlign: "start",
                }}
              >
                <div
                  className="font-14"
                  style={{
                    opacity: ".5",
                    padding: ".5rem 0 0 0",
                    borderRadius: "20px 20px 0px 0px",
                    textAlign: "center",
                  }}
                >
                  Paragraph {index + 1}
                </div>
              </div>
              <div
                className="w-100 flex justify-center align-center h-100"
                style={{ opacity: "1", borderRadius: "10px" }}
              >
                <div
                  style={{
                    transform: "scale(1.3)",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log("clicked", index);
                    setIndex((prev) => (prev > 0 ? prev - 1 : 5));
                  }}
                >
                  {"<"}
                </div>
                {/* paragraphs */}
                <div className="w-75 h-100 flex justify-center align-center">
                  {index === 0 && (
                    <div className="w-75 text-transition">
                      Hello, my name is Dusan and I'm a software developer
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-75 text-transition">
                      Through my 4 years of collage I have programmed 20+
                      projects in different technologies.
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-75 text-transition">
                      Currently I am experienced in multiple programming
                      languages and frameworks and also interested in Data
                      Science and AI.
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-75 text-transition">
                      I have one year of proffesional expiriance as a React
                      front-end developer
                    </div>
                  )}
                  {index === 4 && (
                    <div className="w-75 text-transition">
                      I hope you enjoy this website as much as I do.
                    </div>
                  )}
                  {index === 5 && <div className="w-75">{":)"}</div>}
                </div>
                <div
                  style={{
                    transform: "scale(1.3)",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log("plus", index);
                    setIndex((prev) => (prev < 5 ? prev + 1 : 0));
                  }}
                >
                  {">"}
                </div>
              </div>
              {/* ______ */}
              <div className="flex justify-center">
                <div
                  style={{
                    color: index === 0 ? "white" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(0)}
                >
                  {"_"}
                </div>
                <div
                  style={{
                    color: index === 1 ? "white" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(1)}
                >
                  {"_"}
                </div>
                <div
                  style={{
                    color: index === 2 ? "white" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(2)}
                >
                  {"_"}
                </div>
                <div
                  style={{
                    color: index === 3 ? "white" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(3)}
                >
                  {"_"}
                </div>
                <div
                  style={{
                    color: index === 4 ? "white" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(4)}
                >
                  {"_"}
                </div>
                <div
                  style={{
                    color: index === 5 ? "white" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(5)}
                >
                  {"_"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-100 justify-center ">
          <div className=" h-100 mb-5  flex wrap justify-between font-20 text-center text-red change-flex-cont">
            <div className="m-1 p-1">
              <CountUp target={3} duration={1000} />
              <div className="font-12 bolder">Professional Projects</div>
            </div>
            <div  className="m-1 p-1">
              <CountUp target={10} duration={1000} suffix="+" />
              <div className="font-12 bolder">Courses</div>
            </div>
            <div className="m-1 p-1"> 
              <CountUp target={1} duration={1000} suffix="+" />
              <div className="font-12 bolder">Years of expiriance</div>
            </div>
            <div className="m-1 p-1">
              <CountUp target={2} duration={1000} />
              <div className="font-12 bolder">Collaborations</div>
            </div>
          </div>
        </div>
        <div className="w-100 flex justify-center pb-5 user-none">
          <div className="proffesion-grid">
            <div className="proffesion bg-red text-white">
              <div className="pl-3 pt-3 pb-1">
                <HiOutlineSquare3Stack3D className="scale-25" />
              </div>
              <div className="pl-2 p-05 font-20 w-50 first-letter bold">
                Design planning
              </div>
              <div className="pl-2 p-05 uppercase">
                strategic design planning
              </div>
              <div className="pl-2 pb-5 thin">
                Design planning streamlines development, enhances collaboration,
                and transforms concepts into reality.
              </div>
            </div>
            <div className="proffesion bg-green text-white">
              <div className="pl-3 pt-3 pb-1">
                <SiStackblitz className="scale-25" />
              </div>
              <div className="pl-2 p-05 font-20 w-50 first-letter bold">
                Reactive websites
              </div>
              <div className="pl-2 p-05 uppercase">dynamic web solution</div>
              <div className="pl-2 pb-5 thin">
                Reactive websites create engaging digital environments that
                respond instantly to user interactions.
              </div>
            </div>
            <div className="proffesion bg-red text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaReact className="scale-25" />
              </div>
              <div className="pl-2 p-05 font-20 w-50 first-letter bold">
                React specialist
              </div>
              <div className="pl-2 p-05 uppercase">maximazing reach</div>
              <div className="pl-2 pb-5 thin">
                Digital advertising is a powerful tool for reaching audiences
                and boosting brand visibility.
              </div>
            </div>
            <div className="proffesion bg-green text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaAngular className="scale-25" />
              </div>
              <div className="pl-2 p-05 font-20 w-50 first-letter bold">
                SPA frameworks
              </div>
              <div className="pl-2 p-05 uppercase">
                Powering your expiriance
              </div>
              <div className="pl-2 pb-5 thin">
                Design planning streamlines development, enhances collaboration,
                and transforms concepts into reality.
              </div>
            </div>
            <div className="proffesion bg-red text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaMobileScreen  className="scale-25" />
              </div>
              <div className="pl-2 p-05 font-20 w-50 bold">Responsive design</div>
              <div className="pl-2 p-05 uppercase">
                adaptable, engaging, effortless
              </div>
              <div className="pl-2 pb-5 thin">
                Design planning streamlines development, enhances collaboration,
                and transforms concepts into reality.
              </div>
            </div>
            <div className="proffesion bg-green text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaBoxOpen className="scale-25" />
              </div>
              <div className="pl-2 p-05 font-20 w-50 bold">API integration</div>
              <div className="pl-2 p-05 uppercase">limitless possibilities</div>
              <div className="pl-2 pb-5 thin">
                API integration bridges the gap between different applications,
                communications and data exchange.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
