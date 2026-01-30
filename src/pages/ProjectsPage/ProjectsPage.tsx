import expenseTrack from "../../assets/expenseTrack.png";
import gallery from "../../assets/mygallery.png";
import mypetlite from "../../assets/mypetlite.png";
import supermall from "../../assets/supermall3.png";
import todo from "../../assets/todo.png";

const ProjectsPage = () => {
  return (
    <main style={{maxWidth:"100vw"}}>
      <div className="container">
        <div className="project-grid">
            <div className="project-card">
              <img src={expenseTrack} style={{objectFit: "contain"}}/>
              dusan ilic
            </div>
            <div className="project-card">
              <img src={gallery} style={{objectFit: "contain"}}/>
            </div>
            <div className="project-card">
              <img src={mypetlite} style={{objectFit: "contain"}}/>
            </div>
            <div className="project-card">
              <img src={supermall} style={{objectFit: "contain"}}/>
            </div>
            <div className="project-card">
              <img src={todo} style={{objectFit: "contain"}}/>
            </div>
        </div>
      </div>
    </main>
  );
};

export { ProjectsPage };
