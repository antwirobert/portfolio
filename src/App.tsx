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

  if (activeProject) {
    return (
      <div className="min-h-screen bg-base">
        <Navigation onLogoClick={handleBackToTop} />
        <ProjectDetail project={activeProject} onBack={handleBackToProjects} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base">
      <Navigation onLogoClick={handleBackToTop} />
      <main>
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
