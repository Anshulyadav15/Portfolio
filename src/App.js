import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
