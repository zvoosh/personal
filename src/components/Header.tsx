import { Divider } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="p-2 text-white flex justify-center bg-black">
      <div className="header-content">
        <div className="flex justify-between w-100">
          <div className="font-18 font-gaming ">dušan</div>
          <div>
            <a href="https://github.com/zvoosh" className="text-white" target="_blank">
              <FaGithub className="scale-15 mr-1" />
            </a>
            <a href="https://www.linkedin.com/in/dusan-ilic-0997b4166/" className="text-white" target="_blank">
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
