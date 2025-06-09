import { Divider } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="p-2 text-white flex justify-center bg-black">
      <div className="w-50 pl-5 flex flex-col">
        <div className="flex justify-between w-100">
          <div className="font-18 font-gaming ">dušan</div>
          <div>
            <FaGithub className="scale-15 mr-1"/>
            <FaLinkedin className="scale-15"/>
          </div>
        </div>
        <Divider style={{ backgroundColor: "gray" }} />
      </div>
    </div>
  );
};

export { Header };
