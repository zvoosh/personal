import expenseTrack from "../../assets/expenseTrack.png";
import anotherPortfolio from "../../assets/another-portfolio.png";
import mypetlite from "../../assets/mypetlite.png";
import supermall from "../../assets/supermall3.png";
import recipes from "../../assets/recipes.png";
import appointment from "../../assets/appointment.png";

const ProjectsPage = () => {
  return (
    <main style={{maxWidth:"100vw", padding: "24px", display: "flex", justifyContent: "center"}}>
      <div className="container font-space text-white">
        <div className="project-grid">
            <a target="_blank" className="project-card" href="https://expensetrack.dusanprogram.eu/">
              <img src={expenseTrack} style={{objectFit: "contain"}}/>
              <p className="project-title">Expense Tracker</p>
            </a>
            <a target="_blank" className="project-card" href="https://portfolio.dusanprogram.eu/">
              <img src={anotherPortfolio} style={{objectFit: "contain"}}/>
              <p className="project-title">Another Portfolio</p>
            </a>
            <a target="_blank" className="project-card" href="https://mypetlite.dusanprogram.eu/">
              <img src={mypetlite} style={{objectFit: "contain"}}/>
              <p className="project-title">My pet lite</p>
            </a>
            <a target="_blank" className="project-card" href="https://supermall.dusanprogram.eu/">
              <img src={supermall} style={{objectFit: "contain"}}/>
              <p className="project-title">Supermall Fullstack Application</p>
            </a>
            <a target="_blank" className="project-card" href="https://recipes.dusanprogram.eu/">
              <img src={recipes} style={{objectFit: "contain"}}/>
              <p className="project-title">Explore Recipe Full stack Application</p>
            </a>
            <a target="_blank" className="project-card" href="https://apointments.dusanprogram.eu/page/home">
              <img src={appointment} style={{objectFit: "contain"}}/>
              <p className="project-title">Appointment Booking Application</p>
            </a>
        </div>
      </div>
    </main>
  );
};

export { ProjectsPage };
