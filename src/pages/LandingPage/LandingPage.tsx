import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { About } from "./About";
import { Expiriance } from "./Expiriance";
import { Cards } from "./Cards";
import { Contact } from "./Contact";
import { Intro } from "./Intro";

const LandingPage = () => {
  return (
    <main className="w-100 h-100 flex justify-center  pt-2 text-white font-space">
      <div className="container">
        <Intro />
        <Skills />
        <Portfolio />
        <About />
        <Expiriance />
        <Cards />
        <Contact />
      </div>
    </main>
  );
};

export { LandingPage };
