import { Routes, Route, useLocation } from "react-router-dom"; // ✅ use `react-router-dom`, not `react-router`
import { AnimatePresence } from "framer-motion";
import { ContactPage, LandingPage, ProjectsPage } from "../pages";
import { RootLayout } from "../components";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
