import image from "../../assets/Dusan Ilic CV.jpeg";
import image2 from "../../assets/portoflioimage.jpg";
import image3 from "../../assets/viber_image_2025-07-06_18-19-18-316.jpg";
import image4 from "../../assets/viber_image_2025-07-06_18-19-18-426.jpg";
import image5 from "../../assets/viber_image_2025-07-06_18-19-18-458.jpg";
import image6 from "../../assets/viber_image_2025-07-06_18-19-18-509.jpg";
import image7 from "../../assets/viber_image_2025-07-06_18-19-18-553.jpg";

const AboutMePage = () => {
  return (
    <div className="w-100 flex justify-center" style={{height: "fit-content"}}>
      <div className="contactpage-cont mt-5">
        <div className="intro-about-contiainter">
          <div className="w-100 mt-1 mb-5">
            <img
              src={image}
              alt="portfolio image"
              className="w-100 h-100 cover"
            />
            <p className="font-space under-image-title">
              Dušan Ilić Software Engineer
            </p>
          </div>
          <div className="font-space line-height-18 about-me-cont">
            <h1 className="mb-1 font-30">About me</h1>
            <p className="mb-2">
              I'm an Informatics graduate with a deep passion for web
              development and modern technologies. During my third year of
              university, I joined FactoryWW as a Software Developer 1, where I
              spent a year sharpening my skills in a professional development
              environment. Since then, I've continued growing through hands-on
              projects and coursework in frameworks like Angular, Flask, and
              React. I have experience across a variety of programming languages
              and tools and take a particular interest in the intersection of
              web engineering, Data Science, and AI. I'm hardworking, positive,
              and purpose-driven — always focused on delivering high-quality
              results on time.
            </p>
            <p className="mb-2">
              In my most recent role as a Software Engineer 1 focused on
              Front-end development, I contributed to two key projects using:
              <ul className="mt-1 ml-1">
                <li style={{ marginBottom: ".5rem" }}>React.js & TypeScript</li>
                <li style={{ marginBottom: ".5rem" }}>
                  Axios, React Query, React Context, Redux, React Router
                </li>
                <li style={{ marginBottom: ".5rem" }}>
                  Ant Design for UI components
                </li>
                <li style={{ marginBottom: ".5rem" }}>
                  Jest.js for rigorous unit and integration testing
                </li>
              </ul>
            </p>
            <p className="mb-5">
              Currently, I’m a part-time intern at Unified Mentors — diving into
              exciting projects and expanding my technical horizons every day.
              It’s been a fantastic experience, full of learning and growth.
            </p>
          </div>
        </div>
        <div className="w-100">
          <div className="text-white font-20 font-space underline text-center">
            <p>Gallery</p>
          </div>
          <div className="gallery-about-cont">
            <div >
              <div className="p-1">
                <img
                  src={image2}
                  alt="graduate"
                  className="w-100 h-100 cover"
                />
              </div>
              <div className="p-1">
                <img
                  src={image3}
                  alt="graduate"
                  className="w-100 h-100 cover"
                />
              </div>
              <div className="p-1">
                <img
                  src={image4}
                  alt="graduate"
                  className="w-100 h-100 cover"
                />
              </div>
            </div>
            <div>
              <div className="p-1">
                <img
                  src={image5}
                  alt="graduate"
                  className="w-100 h-100 cover"
                />
              </div>
              <div className="p-1">
                <img
                  src={image6}
                  alt="graduate"
                  className="w-100 h-100 cover"
                />
              </div>
              <div className="p-1">
                <img
                  src={image7}
                  alt="graduate"
                  className="w-100 h-100 cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutMePage };
