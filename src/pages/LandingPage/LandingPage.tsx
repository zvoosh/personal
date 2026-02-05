import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Expiriance } from "./Expiriance";
import { Intro } from "./Intro";
import start from "../../assets/startsoil.png";
import expenseTrack from "../../assets/expenseTrack.png";
import anotherPortfolio from "../../assets/another-portfolio.png";
import mypetlite from "../../assets/mypetlite.png";
import supermall from "../../assets/supermall3.png";
import recipes from "../../assets/recipes.png";
import appointment from "../../assets/appointment.png";

const LandingPage = () => {
  return (
    <main className="w-100 h-100 flex justify-center text-white font-space">
      <div className="container">
        <Intro />
        <Skills />
        <Portfolio />
        <div className="font-gaming font-20 mb-1 mt-1 hello-padding">
          About me
        </div>
        <div className="flex flex-col md:!flex-row items-center gap-10 w-full mb-5 ">
          <div className="w-[300px] md:w-full">
            <img
              src={start}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-space mb-2 w-[300px] md:w-[500px]">
              I am a graduated informatics student with over a year of
              professional experience in web development. Other than my
              professional experience, I code for fun and learning, which I find
              very rewarding. I am a quick learner, and I am always looking for
              new challenges and opportunities to grow as a developer.
            </p>
          </div>
        </div>
        <Expiriance />
        <div className="font-gaming font-20 mb-1 mt-1 hello-padding">
          Projects
        </div>
        <main className="w-full hello-padding">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                target="_blank"
                className="w-full h-full relative hover:scale-105 transition-transform duration-300"
                href="https://expensetrack.dusanprogram.eu/"
              >
                <img src={expenseTrack} style={{ objectFit: "contain" }} />
                <p className="absolute bottom-0 text-black bg-gray-200/20 backdrop-blur-sm left-0 right-0 text-center text-lg">
                  Expense Tracker
                </p>
              </a>
              <a
                target="_blank"
                className="w-full h-full relative hover:scale-105 transition-transform duration-300"
                href="https://portfolio.dusanprogram.eu/"
              >
                <img src={anotherPortfolio} style={{ objectFit: "contain" }} />
                <p className="absolute bottom-0 text-black bg-gray-200/20 backdrop-blur-sm left-0 right-0 text-center text-lg">
                  Another Portfolio
                </p>
              </a>
              <a
                target="_blank"
                className="w-full h-full relative hover:scale-105 transition-transform duration-300"
                href="https://mypetlite.dusanprogram.eu/"
              >
                <img src={mypetlite} style={{ objectFit: "contain" }} />
                <p className="absolute bottom-0 text-black bg-gray-200/20 backdrop-blur-sm left-0 right-0 text-center text-lg">
                  My pet lite
                </p>
              </a>
              <a
                target="_blank"
                className="w-full h-full relative hover:scale-105 transition-transform duration-300"
                href="https://supermall.dusanprogram.eu/"
              >
                <img src={supermall} style={{ objectFit: "contain" }} />
                <p className="absolute bottom-0 text-black bg-gray-200/20 backdrop-blur-sm left-0 right-0 text-center text-lg">
                  Supermall Fullstack Application
                </p>
              </a>
              <a
                target="_blank"
                className="w-full h-full relative hover:scale-105 transition-transform duration-300"
                href="https://recipes.dusanprogram.eu/"
              >
                <img src={recipes} style={{ objectFit: "contain" }} />
                <p className="absolute bottom-0 text-black bg-gray-200/20 backdrop-blur-sm left-0 right-0 text-center text-lg">
                  Explore Recipes
                </p>
              </a>
              <a
                target="_blank"
                className="w-full h-full relative hover:scale-105 transition-transform duration-300"
                href="https://apointments.dusanprogram.eu/page/home"
              >
                <img src={appointment} style={{ objectFit: "contain" }} />
                <p className="absolute bottom-0 text-black bg-gray-200/20 backdrop-blur-sm left-0 right-0 text-center text-lg">
                  Appointment Booking Application
                </p>
              </a>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export { LandingPage };
