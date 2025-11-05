import { Divider } from "antd";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className={`ham-trans ${!isOpen ? "closed" : ""}`}>
        <div className="flex flex-col font-14 font-gaming user-none w-100 justify-center">
          <Link
            to={"/"}
            className="m-1 pointer text-white text-center"
            style={{ textDecoration: "none" }}
          >
            home
          </Link>
          <Link
            to={"/about"}
            className="m-1 pointer text-white text-center"
            style={{ textDecoration: "none" }}
          >
            about me
          </Link>
          <Link
            to={"/projects"}
            className="m-1 pointer text-white text-center"
            style={{ textDecoration: "none" }}
          >
            projects
          </Link>
          <Link
            to={"/contact"}
            className="m-1 pointer text-white text-center"
            style={{ textDecoration: "none" }}
          >
            contact
          </Link>
        </div>
      </div>
      <div className="p-2 text-white flex justify-center bg-black">
        <div className="header-content">
          <div className="flex justify-between w-100">
            <div className="font-18 font-gaming user-none flex">
              <div className="mobile-size-on pr-1">
                <RxHamburgerMenu
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                />
              </div>
              dušan
            </div>
            <div className="flex font-14 font-gaming user-none mobile-size-off">
              <Link to={"/"} className="ml-1 mr-1 pointer text-white">
                home
              </Link>
              <Link to={"/about"} className="ml-1 mr-1 pointer text-white">
                about me
              </Link>
              <Link to={"/projects"} className="ml-1 mr-1 pointer text-white">
                projects
              </Link>
              <Link to={"/contact"} className="ml-1 mr-1 pointer text-white">
                contact
              </Link>
            </div>
            <div>
              <a
                href="https://github.com/zvoosh"
                className="text-white"
                target="_blank"
              >
                <FaGithub className="scale-15 mr-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                className="text-white"
                target="_blank"
              >
                <FaLinkedin className="scale-15" />
              </a>
            </div>
          </div>
          <Divider style={{ backgroundColor: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export { Header };
