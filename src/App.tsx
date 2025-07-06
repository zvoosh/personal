import "./App.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
