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
      </div>
    </main>
  );
};

export { LandingPage };
