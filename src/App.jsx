import "./App.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { Route, Routes } from "react-router-dom";
import Travel from "./pages/Travel";
import GeminiClone from "./pages/GeminiClone";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <div className="relative overflow-hidden">
      <Background />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Services />
              <Projects />
              <Skills />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/projects/travel" element={<Travel />} />
        <Route path="/projects/gemini-clone" element={<GeminiClone />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
