import project2 from "../../assets/Screenshot 2025-10-16 122531.png";
import project3 from "../../assets/Screenshot 2025-11-19 100035.png";
import project1 from "../../assets/Screenshot 2025-11-03 190108.png";

const ProjectsPage = () => {
  return (
    <main className="w-100 h-100 flex justify-center  pt-2 text-white font-space">
      <div className="container">
        <div className="hello-padding">
          <h1 className="font-gaming font-30 text-yellow">Projects</h1>
          <p className="mt-1 font-16 pl-1">
            Here are some of the projects I’ve worked on recently.
          </p>
        </div>
        <div className="w-100 flex justify-center">
          <div className="width">
            <div className="p-2 mb-4">
              <img
                src={project1}
                alt="Project 1"
                className="w-100 h-100 cover mb-2"
              />
              <h2 className="font-28 mb-1 font-gaming">Web Supermall</h2>
              <p className="mb-2 font-12">
                A full-stack online store built with React, and
                Node.js. Features secure authentication, product management, and
                payment integration.
              </p>
              <a
                href="https://supermall.dusanprogram.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-2 text-white"
              >
                View Project
              </a>
            </div>
            <div className="p-2 mb-4">
              <img
                src={project2}
                alt="Project 2"
                className="w-100 h-100 cover mb-2"
              />
              <h2 className="font-28 mb-1 font-gaming">Finance Tracker</h2>
              <p className="mb-2 font-12">
                A personal finance dashboard built with React. Users can monitor
                spending habits, set budgets, and gain actionable insights into
                their financial health.
              </p>
              <a
                href="https://expensetrack.dusanprogram.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-2"
              >
                View Project
              </a>
            </div>
            <div className="p-2 mb-4">
              <img
                src={project3}
                alt="Project 3"
                className="w-100 h-100 cover mb-2"
              />
              <h2 className="font-28 mb-1 font-gaming">
                Soil agent
              </h2>
              <p className="mb-2 font-12">
                A full-stack soil-health tracker built with React, and
                Node.js. It features secure authentication, interactive
                dashboards for monitoring soil details and distributors and a responsive UI —
                empowering users to explore, track, and understand long-term
                soil quality trends.
              </p>
              <a
                href="https://soil.dusanprogram.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-2 text-white"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { ProjectsPage };
