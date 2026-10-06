import type { Project } from "../types";
import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  onOpenProject: (project: Project) => void;
}

export function Projects({ onOpenProject }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 border-b border-line pb-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-label">Selected Projects</span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Two products, from interface to infrastructure.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A multi-tenant project platform and a real-time AI meeting
              product. Explore the case studies for implementation details.
            </p>
          </div>
        </Reveal>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
