import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Expiriance } from "./Expiriance";
import { Intro } from "./Intro";
import start from "../../assets/startsoil.png";
import pressOffice from "../../assets/press-office.png";
import expenseTrack from "../../assets/expenseTrack.png";
import anotherPortfolio from "../../assets/another-portfolio.png";
import mypetlite from "../../assets/mypetlite.png";
import supermall from "../../assets/supermall3.png";
import recipes from "../../assets/recipes.png";
import Carousel from "../../components";
const cards = [
  { img: pressOffice, title: "Press Office 2026", textColor: "text-white" },
  { img: expenseTrack, title: "Expense Tracker", textColor: "text-black" },
  {
    img: anotherPortfolio,
    title: "Another Portfolio",
    textColor: "text-white",
  },
  { img: mypetlite, title: "My pet lite", textColor: "text-white" },
  {
    img: supermall,
    title: "Supermall Fullstack Application",
    textColor: "text-black",
  },
  { img: recipes, title: "Explore Recipes", textColor: "text-black" },
];
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
        <div className="flex flex-col md:!flex-row items-center gap-10 w-full  px-7 mb-5 ">
          <div className="flex-1 max-w-sm md:max-w-md  xl:max-w-2xl">
            <img
              src={start}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Tekst */}
          <div className="flex-1">
            <p className="text-lg font-space mb-2 md:max-w-lg xl:max-w-2xl leading-relaxed">
              I am a graduated informatics student with two years of
              professional experience in web development. Other than my
              professional experience, I code for fun and learn everyday, which
              I find very rewarding. I am a quick learner, and I am always
              looking for new challenges and opportunities to grow as a
              developer.
            </p>
          </div>
        </div>
        <Expiriance />
        <div className="font-gaming font-20 mb-1 mt-1 hello-padding">
          Projects
        </div>
        <Carousel cards={cards} />
      </div>
    </main>
  );
};

export { LandingPage };
