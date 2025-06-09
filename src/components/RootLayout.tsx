import { Outlet } from "react-router";
import { Header } from "./Header";

const RootLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#282725",
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection:"column"
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export { RootLayout };
