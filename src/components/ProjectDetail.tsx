import { useEffect } from "react";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "../types";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./icons/github";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.id]);

  return (
    <div className="min-h-screen bg-base pt-20">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
        <button
          onClick={onBack}
          className="group mb-10 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-300 hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to projects
        </button>

        <Reveal>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="section-label">Case Study</span>
            <span className="font-mono text-xs text-faint">
              {project.category}
            </span>
          </div>

          <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-secondary">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                  link.type === "github"
                    ? "border border-line text-secondary hover:border-strong hover:text-primary hover:bg-elevated/40"
                    : "bg-accent text-accent-foreground hover:bg-accent-dark"
                }`}
              >
                {link.type === "github" ? (
                  <GitHubIcon className="h-4 w-4" />
                ) : (
                  <ExternalLink className="h-4 w-4" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-1 gap-6 border-y border-line py-6 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Role
              </dt>
              <dd className="mt-1.5 text-sm text-primary">
                {project.contribution}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Category
              </dt>
              <dd className="mt-1.5 text-sm text-primary">
                {project.category}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Stack
              </dt>
              <dd className="mt-1.5 text-sm text-primary">
                {project.technologies.slice(0, 5).join(", ")}
                {project.technologies.length > 5 &&
                  ` +${project.technologies.length - 5}`}
              </dd>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {project.detail.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 50}>
                <section className="mb-12">
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-medium tracking-tight text-primary">
                      {section.heading}
                    </h2>
                  </div>
                  {section.body.split("\n").map((para, j) => (
                    <p
                      key={j}
                      className="mb-4 text-pretty leading-relaxed text-secondary last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}

            {project.detail.keyDecisions &&
              project.detail.keyDecisions.length > 0 && (
                <Reveal>
                  <section className="mb-12">
                    <h2 className="mb-6 text-xl font-medium tracking-tight text-primary">
                      Key Technical Decisions
                    </h2>
                    <div className="space-y-4">
                      {project.detail.keyDecisions.map((decision) => (
                        <div
                          key={decision.title}
                          className="rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-strong"
                        >
                          <h3 className="font-mono text-sm text-accent">
                            {decision.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-secondary">
                            {decision.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </Reveal>
              )}

            {project.detail.challenges &&
              project.detail.challenges.length > 0 && (
                <Reveal>
                  <section className="mb-12">
                    <h2 className="mb-6 text-xl font-medium tracking-tight text-primary">
                      Engineering Challenges
                    </h2>
                    <div className="space-y-4">
                      {project.detail.challenges.map((challenge) => (
                        <div
                          key={challenge.title}
                          className="rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-strong"
                        >
                          <h3 className="font-mono text-sm text-signal">
                            {challenge.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-secondary">
                            {challenge.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </Reveal>
              )}

            {project.detail.results && (
              <Reveal>
                <section className="mb-12 rounded-xl border border-accent/25 bg-accent/5 p-6">
                  <h2 className="mb-3 text-lg font-medium text-accent">
                    Results &amp; Impact
                  </h2>
                  <p className="text-pretty leading-relaxed text-secondary">
                    {project.detail.results}
                  </p>
                </section>
              </Reveal>
            )}

            {project.detail.learnings && (
              <Reveal>
                <section className="mb-12 border-l-2 border-accent/40 pl-6">
                  <h2 className="mb-3 text-lg font-medium text-primary">
                    What I Learned
                  </h2>
                  <p className="text-pretty leading-relaxed text-secondary">
                    {project.detail.learnings}
                  </p>
                </section>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="section-label mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-line bg-surface px-3 py-1.5 font-mono text-xs text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.detail.features &&
                project.detail.features.length > 0 && (
                  <div>
                    <h3 className="section-label mb-4">Key Features</h3>
                    <ul className="space-y-2.5">
                      {project.detail.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              <div>
                <h3 className="section-label mb-4">Links</h3>
                <div className="flex flex-col gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3 text-sm transition-all duration-300 hover:border-strong hover:bg-elevated/30"
                    >
                      <span className="text-primary">{link.label}</span>
                      {link.type === "github" ? (
                        <GitHubIcon className="h-4 w-4 text-faint transition-colors group-hover:text-primary" />
                      ) : (
                        <ExternalLink className="h-4 w-4 text-faint transition-colors group-hover:text-primary" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
