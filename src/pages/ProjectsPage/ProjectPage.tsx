import project2 from "../../assets/Screenshot 2025-10-16 122531.png";
import project3 from "../../assets/Screenshot 2025-10-16 115057.png";
import project1 from "../../assets/Screenshot 2025-11-03 190108.png";

const ProjectsPage = () => {
  return (
    <main className="w-100 h-100 flex justify-center  pt-2 text-white font-space">
      <div className="container">
        <h1 className="font-gaming font-30 text-yellow">Projects</h1>
        <p className="mt-1 font-16 pl-5">
          Here are some of the projects I’ve worked on recently. 
        </p>
        <div className="w-100 flex justify-center mt-3">
          <div className="w-75">
            <div className="project-card p-2 mb-4">
              <img
                src={project1}
                alt="Project 1"
                className="w-100 h-100 cover mb-2"
              />
              <h2 className="font-28 mb-1 font-gaming">Web Supermall</h2>
              <p className="mb-2 font-12">
                A full-stack online store built with React, Next.js, and
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
            <div className="project-card p-2 mb-4">
              <img
                src={project2}
                alt="Project 2"
                className="w-100 h-100 cover mb-2"
              />
              <h2 className="font-28 mb-1 font-gaming">Finance Tracker</h2>
              <p className="mb-2 font-12">
                A playful browser game with animated pets, responsive UI, and
                stat tracking. Built with React, custom hooks, and Framer
                Motion.
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
            <div className="project-card p-2 mb-4">
              <img
                src={project3}
                alt="Project 3"
                className="w-100 h-100 cover mb-2"
              />
              <h2 className="font-28 mb-1 font-gaming">Student-Teacher Scheduler</h2>
              <p className="mb-2 font-12">
                My personal portfolio showcasing projects, skills, and
                experience. Built with React, Tailwind, and Ant Design for a
                clean, responsive layout.
              </p>
              <a
                href="https://apointments.dusanprogram.eu"
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
