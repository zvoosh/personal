import { useState } from "react";
const About = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <section className="mt-3 hello-padding" style={{ userSelect: "none" }}>
      <div className="font-gaming font-20  mb-4 ">About me</div>
      <div className="font-12 line-height-18 letter-spacing text-font mt-1 flex justify-center">
        <div className="text" style={{ backgroundColor: "rgba(16,15,15,0.5)" }}>
          <div
            className="w-100 font-10 font-gaming"
            style={{
              borderRadius: "20px 20px 0px 0px",
              textAlign: "start",
            }}
          >
            <p
              className="font-14"
              style={{
                opacity: ".5",
                padding: ".5rem 0 0 0",
                borderRadius: "20px 20px 0px 0px",
                textAlign: "center",
              }}
            >
              Paragraph {index + 1}
            </p>
          </div>
          <div
            className="w-100 flex justify-center align-center h-100"
            style={{ opacity: "1", borderRadius: "10px" }}
          >
            <div
              style={{
                transform: "scale(1.3)",
                userSelect: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("clicked", index);
                setIndex((prev) => (prev > 0 ? prev - 1 : 5));
              }}
            >
              {"<"}
            </div>
            {/* paragraphs */}
            <div className="w-75 h-100 flex justify-center align-center">
              {index === 0 && (
                <p className="w-75 text-transition">
                  Hello, my name is Dusan and I'm a software developer
                </p>
              )}
              {index === 1 && (
                <p className="w-75 text-transition">
                  Through my 4 years of collage I have programmed 20+ projects
                  in different technologies.
                </p>
              )}
              {index === 2 && (
                <p className="w-75 text-transition">
                  Currently I am experienced in multiple programming languages
                  and frameworks and also interested in Data Science and AI.
                </p>
              )}
              {index === 3 && (
                <p className="w-75 text-transition">
                  I have one year of proffesional expiriance as a React
                  front-end developer
                </p>
              )}
              {index === 4 && (
                <p className="w-75 text-transition">
                  I hope you enjoy this website as much as I do.
                </p>
              )}
              {index === 5 && <div className="w-75">{":)"}</div>}
            </div>
            <div
              style={{
                transform: "scale(1.3)",
                userSelect: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("plus", index);
                setIndex((prev) => (prev < 5 ? prev + 1 : 0));
              }}
            >
              {">"}
            </div>
          </div>
          {/* ______ */}
          <div className="flex justify-center">
            <div
              style={{
                color: index === 0 ? "white" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setIndex(0)}
            >
              {"_"}
            </div>
            <div
              style={{
                color: index === 1 ? "white" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setIndex(1)}
            >
              {"_"}
            </div>
            <div
              style={{
                color: index === 2 ? "white" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setIndex(2)}
            >
              {"_"}
            </div>
            <div
              style={{
                color: index === 3 ? "white" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setIndex(3)}
            >
              {"_"}
            </div>
            <div
              style={{
                color: index === 4 ? "white" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setIndex(4)}
            >
              {"_"}
            </div>
            <div
              style={{
                color: index === 5 ? "white" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setIndex(5)}
            >
              {"_"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { About };
