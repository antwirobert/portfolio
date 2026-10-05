import { useState, useCallback } from "react";
import type { Project } from "./types";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenProject = useCallback((project: Project) => {
    setActiveProject(project);
  }, []);

  const handleBackToProjects = useCallback(() => {
    setActiveProject(null);
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  const handleBackToTop = useCallback(() => {
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavigate = useCallback((target: string) => {
    setActiveProject(null);
    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  if (activeProject) {
    return (
      <div className="min-h-screen bg-base">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation onLogoClick={handleBackToTop} onNavigate={handleNavigate} />
        <main id="main-content" tabIndex={-1}>
          <ProjectDetail
            project={activeProject}
            onBack={handleBackToProjects}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation onLogoClick={handleBackToTop} onNavigate={handleNavigate} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects onOpenProject={handleOpenProject} />
        <TechStack />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
