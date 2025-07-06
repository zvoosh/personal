import { Divider } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="p-2 text-white flex justify-center bg-black">
      <div className="header-content">
        <div className="flex justify-between w-100">
          <div className="font-18 font-gaming user-none">dušan</div>
          <div className="flex font-14 font-gaming user-none">
            <Link to={'/'} className="ml-1 mr-1 pointer text-white">home</Link>
            <Link to={'/about'} className="ml-1 mr-1 pointer text-white">about me</Link>
            <Link to={'/contact'} className="ml-1 mr-1 pointer text-white">contact</Link>
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
  );
};

export { Header };
