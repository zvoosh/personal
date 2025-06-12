import "./App.css";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { RootLayout } from "./components";
import { LandingPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;