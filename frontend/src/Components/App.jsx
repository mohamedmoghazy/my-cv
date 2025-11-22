import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Resume_01 from "./Resume_01";
import ProjectPage from "./ProjectPage";

const AppContent = () =>
{
  const location = useLocation();

  return (
    <div>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="/Resume_01" element={<Resume_01 />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </div>
  );
};

const App = () =>
{
  return (
    <Router basename="/my-cv">
      <AppContent />
    </Router>
  );
};

export default App;