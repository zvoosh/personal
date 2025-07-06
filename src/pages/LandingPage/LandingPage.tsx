import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Expiriance } from "./Expiriance";
import { Cards } from "./Cards";
import { Intro } from "./Intro";

const LandingPage = () => {
  return (
    <main className="w-100 h-100 flex justify-center  pt-2 text-white font-space">
      <div className="container">
        <Intro />
        <Skills />
        <Portfolio />
        <div className="font-gaming font-20  mb-4 mt-3">About me</div>
        <Expiriance />
        <Cards />
        <div className="w-100 flex justify-center text-white  font-space">
          <div className="pl-5 pr-5 mr-5 ml-5 flex justify-between w-100 font-30">
            <div className="mt-5">
              <div className="pb-1 font-18">Follow me</div>
              <div className="pl-4 pb-5">
                <div className="font-16">
                  <a
                    href="https://github.com/zvoosh"
                    target="_blank"
                    className="text-decoration-none text-white"
                  >
                    Github
                  </a>
                </div>
                <div className="font-16 pt-1 pb-1">
                  <a
                    href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                    target="_blank"
                    className="text-decoration-none text-white"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="pt-1 pb-1 font-18">Contact</div>
              <div className="pb-5 ">
                <div className="pb-1 pt-05 font-12">Belgrade, 11000</div>
                <div className="pb-1 pt-05 font-12">+381603311223</div>
                <div className="pb-1 pt-05 font-12">
                  dusan.ilic1999@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { LandingPage };
