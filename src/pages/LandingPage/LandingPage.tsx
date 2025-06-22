import {
  FaAngular,
  FaBoxOpen,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { CountUp, SkillCard } from "../../components";
import start from "../../assets/start.png";
import office from "../../assets/office.jpg";
import singidunum from "../../assets/singidunum.jpg";
import { SiJavascript, SiStackblitz, SiTypescript } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { useState } from "react";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Button, Col, Form, Input, notification, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";

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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  [key: string]: unknown;
}

const LandingPage = () => {
  const [index, setIndex] = useState<number>(0);
  const [submitForm] = useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = (values: IForm) => {
    emailjs
      .send("service_h9py1vp", "template_yev6wql", values, "AoqdNMr_Mrg_Hzm_T")
      .then(
        (result) => {
          console.log("Email sent!", result.text);

          submitForm.resetFields();
          api.success({
            message: "Email sent successfully",
            description: "Your messsage has been sent successfully",
          });
        },
        () => {
          api.error({
            message: "Message not sent",
            description: "Server error please contact the webiste admin",
          });
        }
      );
  };

  return (
    <main className="w-100 h-100 flex justify-center  pt-2 text-white font-space">
      <div className="container">
        <section className="hello-padding">
          <h1 className="font-gaming font-30 text-yellow">
            Hello my name is Dusan
          </h1>
          <h2 className="pt-1 font-16">
            I am a Software Developer / Engineer based in Belgrade, Serbia
          </h2>
        </section>
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
        <section className="w-100 ">
          <p className="font-gaming font-20 mb-5 hello-padding ">Portfolio</p>
          <div className="card-grid">
            <div className="card">
              <img src={start} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <p className="overlay-text bold">Vaco photo gallery</p>
                  <p className="overlay-text thin">React application</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={office} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <p className="overlay-text bold">Portfolio websites</p>
                  <p className="overlay-text thin">Wordpress</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={singidunum} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <p className="overlay-text bold">10+ Practical Projects</p>
                  <p className="overlay-text thin">University of Singiduum</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={office} alt="" />
              <div className="overlay">
                <div className="p-1">
                  <p className="overlay-text bold">Front-end developer</p>
                  <p className="overlay-text thin">FactoryWW</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3 hello-padding" style={{ userSelect: "none" }}>
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
                <p
                  className="font-14"
                  style={{
                    opacity: ".5",
                    padding: ".5rem 0 0 0",
                    borderRadius: "20px 20px 0px 0px",
                    textAlign: "center",
                  }}
                >
                  Paragraph {index + 1}
                </p>
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
                    <p className="w-75 text-transition">
                      Hello, my name is Dusan and I'm a software developer
                    </p>
                  )}
                  {index === 1 && (
                    <p className="w-75 text-transition">
                      Through my 4 years of collage I have programmed 20+
                      projects in different technologies.
                    </p>
                  )}
                  {index === 2 && (
                    <p className="w-75 text-transition">
                      Currently I am experienced in multiple programming
                      languages and frameworks and also interested in Data
                      Science and AI.
                    </p>
                  )}
                  {index === 3 && (
                    <p className="w-75 text-transition">
                      I have one year of proffesional expiriance as a React
                      front-end developer
                    </p>
                  )}
                  {index === 4 && (
                    <p className="w-75 text-transition">
                      I hope you enjoy this website as much as I do.
                    </p>
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
        </section>
        <section className="flex w-100 justify-center ">
          <div className=" h-100 mb-5  flex wrap justify-between font-20 text-center text-red change-flex-cont">
            <div className="m-1 p-1">
              <CountUp target={3} duration={1000} />
              <p className="font-12 bolder">Professional Projects</p>
            </div>
            <div className="m-1 p-1">
              <CountUp target={10} duration={1000} suffix="+" />
              <p className="font-12 bolder">Courses</p>
            </div>
            <div className="m-1 p-1">
              <CountUp target={1} duration={1000} suffix="+" />
              <p className="font-12 bolder">Years of expiriance</p>
            </div>
            <div className="m-1 p-1">
              <CountUp target={2} duration={1000} />
              <p className="font-12 bolder">Collaborations</p>
            </div>
          </div>
        </section>
        <section className="w-100 flex justify-center pb-5 user-none">
          <div className="proffesion-grid">
            <div className="proffesion bg-red text-white">
              <div className="pl-3 pt-3 pb-1">
                <HiOutlineSquare3Stack3D className="scale-25" />
              </div>
              <p className="pl-2 p-05 font-20 w-50 first-letter bold">
                Design planning
              </p>
              <p className="pl-2 p-05 uppercase">strategic design planning</p>
              <p className="pl-2 pb-5 thin">
                Design planning streamlines development, enhances collaboration,
                and transforms concepts into reality.
              </p>
            </div>
            <div className="proffesion bg-green text-white">
              <div className="pl-3 pt-3 pb-1">
                <SiStackblitz className="scale-25" />
              </div>
              <p className="pl-2 p-05 font-20 w-50 first-letter bold">
                Reactive websites
              </p>
              <p className="pl-2 p-05 uppercase">dynamic web solution</p>
              <p className="pl-2 pb-5 thin">
                Reactive websites create engaging digital environments that
                respond instantly to user interactions.
              </p>
            </div>
            <div className="proffesion bg-red text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaReact className="scale-25" />
              </div>
              <p className="pl-2 p-05 font-20 w-50 first-letter bold">
                React specialist
              </p>
              <p className="pl-2 p-05 uppercase">maximazing reach</p>
              <p className="pl-2 pb-5 thin">
                Digital advertising is a powerful tool for reaching audiences
                and boosting brand visibility.
              </p>
            </div>
            <div className="proffesion bg-green text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaAngular className="scale-25" />
              </div>
              <p className="pl-2 p-05 font-20 w-50 first-letter bold">
                SPA frameworks
              </p>
              <p className="pl-2 p-05 uppercase">Powering your expiriance</p>
              <p className="pl-2 pb-5 thin">
                Revolutionize web development by delivering fast, seamless, and
                interactive user experiences.
              </p>
            </div>
            <div className="proffesion bg-red text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaMobileScreen className="scale-25" />
              </div>
              <p className="pl-2 p-05 font-20 w-50 bold">Responsive design</p>
              <p className="pl-2 p-05 uppercase">
                adaptable, engaging, effortless
              </p>
              <p className="pl-2 pb-5 thin">
                Responsive Design ensures that websites adapt smoothly to
                different screen sizes and devices.
              </p>
            </div>
            <div className="proffesion bg-green text-white">
              <div className="pl-3 pt-3 pb-1">
                <FaBoxOpen className="scale-25" />
              </div>
              <p className="pl-2 p-05 font-20 w-50 bold">API integration</p>
              <p className="pl-2 p-05 uppercase">limitless possibilities</p>
              <p className="pl-2 pb-5 thin">
                API integration bridges the gap between different applications,
                communications and data exchange.
              </p>
            </div>
          </div>
        </section>
        <section about="contact">
          <div className="pb-5 mt-5">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <div className="m-1">
                  <div className="font-30 w-75 pb-5">
                    Let's build amazing things thogether
                  </div>
                  <div>
                    <div>
                      <IoLocationSharp className="text-red pr-1 font-14" />
                      Belgrade
                    </div>
                    <div className="pt-1">
                      <p className="pb-1">Belgrade, BG 11000</p>
                      <p className="pb-1">+381603311553</p>
                      <p className="pb-1">dusan.ilic1999@gmail.com</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className="w-100 flex justify-center"
              >
                {contextHolder}
                <div className="bg-black box-shadow flex w-75 justify-center p-2 pt-4 pb-4 m-1">
                  <Form
                    name="basic"
                    layout="vertical"
                    form={submitForm}
                    style={{ maxWidth: 400 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Row gutter={20}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          labelAlign="left"
                          label={
                            <span className="text-white font-12">
                              First name
                            </span>
                          }
                          className="text-white font-20"
                          name="firstName"
                          rules={[
                            {
                              required: true,
                              message: "Please input first name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label={
                            <span className="text-white font-12">
                              Last name
                            </span>
                          }
                          name="lastName"
                          rules={[
                            {
                              required: true,
                              message: "Please input last name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      label={<span className="text-white font-12">Email</span>}
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please input email adress!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label={
                        <span className="text-white font-12">Message</span>
                      }
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please input your message!",
                        },
                      ]}
                    >
                      <TextArea rows={5} />
                    </Form.Item>
                    <Row justify={"end"}>
                      <Button htmlType="submit" type="primary">
                        Send
                      </Button>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </main>
  );
};

export { LandingPage };
