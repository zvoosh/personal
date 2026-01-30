import start from "../../assets/pressOffice.png";
import unifiedMentor from "../../assets/unifiedMentor.png";
import office from "../../assets/office.jpg";
import singidunum from "../../assets/singidunum.jpg";

const Portfolio = () => {
  return (
    <section className="w-100 mb-5">
      <p className="font-gaming font-20 hello-padding ">Portfolio</p>
      <div className="card-grid">
        <div className="card">
          <img
            src={start}
            alt="press Office"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "blur(1px)",
            }}
          />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">Press Office</p>
              <p className="overlay-text thin">
                React Portfolio Website 30+ static pages
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src={unifiedMentor}
            alt="Unified mentor"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "blur(1px)",
            }}
          />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">Unified Mentor</p>
              <p className="overlay-text thin">Internship</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={singidunum} alt="Singidunum" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "blur(1px)",
            }}/>
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">10+ Practical Projects</p>
              <p className="overlay-text thin">University of Singiduum</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={office} alt="Factory Group Office" style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "blur(1px)",
            }} />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">Front-end developer</p>
              <p className="overlay-text thin">Factory Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Portfolio };
