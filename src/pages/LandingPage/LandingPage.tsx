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
import appointment from "../../assets/appointment.png";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  {
    img: appointment,
    title: "Appointment Booking Application",
    textColor: "text-white",
  },
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

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
        <section className="w-screen relative overflow-hidden px-10">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 p-1 md:p-5">
                <div className="w-full h-full relative hover:scale-103 transition-transform duration-300">
                  <img
                    src={card.img}
                    style={{ objectFit: "contain" }}
                    className="rounded-2xl h-full w-full"
                  />
                  <p
                    className={`absolute bottom-0 ${card.textColor} bg-gray-100-800/20 backdrop-blur-xl left-0 right-0 text-center md:text-2xl md:py-5 rounded-b-2xl`}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kontrole */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-white !px-3 !py-3 rounded-xl text-center cursor-pointer bg-gray-800/20 backdrop-blur-3xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-white !px-3 !py-3 rounded-xl text-center cursor-pointer bg-gray-800/20 backdrop-blur-3xl"
          >
            <FaChevronRight />
          </button>
        </section>
      </div>
    </main>
  );
};

export { LandingPage };
