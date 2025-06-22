import start from "../../assets/start.png";
import office from "../../assets/office.jpg";
import singidunum from "../../assets/singidunum.jpg";

const Portfolio = () => {
  return (
    <section className="w-100 mb-5">
      <p className="font-gaming font-20 hello-padding ">Portfolio</p>
      <div className="card-grid">
        <div className="card">
          <img src={start} alt="" />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">Vaco photo gallery</p>
              <p className="overlay-text thin">React application</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={office} alt="" />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">Portfolio websites</p>
              <p className="overlay-text thin">Wordpress</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={singidunum} alt="" />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">10+ Practical Projects</p>
              <p className="overlay-text thin">University of Singiduum</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={office} alt="" />
          <div className="overlay">
            <div className="p-1">
              <p className="overlay-text bold">Front-end developer</p>
              <p className="overlay-text thin">FactoryWW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {Portfolio}
