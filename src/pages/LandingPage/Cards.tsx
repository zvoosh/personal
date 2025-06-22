import { FaAngular, FaBoxOpen, FaReact } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { SiStackblitz } from "react-icons/si";

const Cards = () => {
  return (
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
            Design planning streamlines development, enhances collaboration, and
            transforms concepts into reality.
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
            Reactive websites create engaging digital environments that respond
            instantly to user interactions.
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
            Digital advertising is a powerful tool for reaching audiences and
            boosting brand visibility.
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
          <p className="pl-2 p-05 uppercase">adaptable, engaging, effortless</p>
          <p className="pl-2 pb-5 thin">
            Responsive Design ensures that websites adapt smoothly to different
            screen sizes and devices.
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
  );
};

export { Cards };
