import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";

const RootLayout = () => {
  const location = useLocation();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#282725",
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div style={{ height: "fit-content" }}>
        <Outlet />
      </div>
      {location.pathname !== "/contact" && (
        <div className="flex justify-center text-white font-space w-100">
          <div
            className="flex justify-around w-100 font-30"
            style={{ maxWidth: "1300px" }}
          >
            <div className="mt-5">
              <div className="pb-1 font-18">Follow me</div>
              <div className="pl-4 pb-5">
                <div className="font-16">
                  <a
                    href="https://github.com/zvoosh"
                    target="_blank"
                    className="text-decoration-none text-white"
                  >
                    Github
                  </a>
                </div>
                <div className="font-16 pt-1 pb-1">
                  <a
                    href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                    target="_blank"
                    className="text-decoration-none text-white"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="pb-1 font-18">Contact</div>
              <div className="pb-5 ">
                <div className="pb-1 pt-05 font-12">Belgrade, 11000</div>
                <div className="pb-1 pt-05 font-12">+381603311223</div>
                <div className="pb-1 pt-05 font-12">
                  dusan.ilic1999@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { RootLayout };
