import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "../data/portfolio";
import { CursorGrid } from "./CursorGrid";
import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";

const heroTech = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"];

interface FlowNode {
  label: string;
  sublabel?: string;
}

interface SnapshotProject {
  index: string;
  name: string;
  category: string;
  tech: string[];
  note: string;
  nodes: FlowNode[];
  supportLayer?: string;
}

const snapshotProjects: SnapshotProject[] = [
  {
    index: "01",
    name: "WORKLOOM",
    category: "Project Management SaaS",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    note: "95% independently built",
    nodes: [
      { label: "Frontend", sublabel: "React · TanStack Query" },
      { label: "API Services", sublabel: "Node.js · Express" },
      { label: "Database", sublabel: "PostgreSQL · Prisma" },
    ],
    supportLayer: "Redis — caching & sessions",
  },
  {
    index: "02",
    name: "AGENTMEET AI",
    category: "Real-Time AI Meeting SaaS",
    tech: ["Next.js", "OpenAI Realtime", "Stream"],
    note: "Real-time AI meeting agents",
    nodes: [
      { label: "Meeting", sublabel: "Stream Video · Chat" },
      { label: "AI Agent", sublabel: "OpenAI Realtime API" },
      { label: "Transcript", sublabel: "Auto-generated" },
      { label: "AI Summary", sublabel: "Post-meeting insights" },
    ],
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0); // starts on Workloom
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  const switchProject = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % snapshotProjects.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeIndex, isHovered]);

  const project = snapshotProjects[activeIndex];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <CursorGrid />

      <div className="relative mx-auto flex min-h-screen max-w-content flex-col px-6 pt-20 lg:px-10">
        <motion.div
          className="flex items-center gap-2.5 pt-4"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="flex items-center gap-2.5 rounded-full border border-line bg-surface/50 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              {profile.availability}
            </span>
          </span>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.h1
              className="font-sans font-medium tracking-tight text-primary"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.028em",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
            >
              Robert Antwi
            </motion.h1>

            <motion.p
              className="mt-3 text-sm font-medium text-secondary sm:text-base"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            >
              Software Engineer <span className="text-border-strong">|</span>{" "}
              Full-Stack Developer
            </motion.p>

            <motion.div
              className="mt-6 h-px w-full max-w-sm bg-border"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
            />

            <motion.p
              className="mt-6 max-w-lg text-pretty leading-relaxed text-secondary"
              style={{ fontSize: "clamp(1.05rem, 1.7vw, 1.25rem)" }}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
            >
              {profile.positioning}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, ease: easeOut, delay: 0.65 }}
            >
              {heroTech.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2.5">
                  <span className="text-xs text-muted">{tech}</span>
                  {i < heroTech.length - 1 && (
                    <span className="text-border-strong">•</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-2.5"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, ease: easeOut, delay: 0.8 }}
            >
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_-4px_rgba(184,233,134,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5 xl:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.45 }}
          >
            <EngineeringSnapshot
              project={project}
              activeIndex={activeIndex}
              onSwitch={switchProject}
              onHover={setIsHovered}
              onClick={scrollToProjects}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface EngineeringSnapshotProps {
  project: SnapshotProject;
  activeIndex: number;
  onSwitch: (idx: number) => void;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

function EngineeringSnapshot({
  project,
  activeIndex,
  onSwitch,
  onHover,
  onClick,
}: EngineeringSnapshotProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-line bg-surface/60 backdrop-blur-sm"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: easeOut }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-accent/[0.04] blur-3xl" />
      </div>

      <div className="relative flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
          Engineering Snapshot
        </span>

        <div className="flex items-center gap-1 font-mono text-[10px] tracking-wider">
          {snapshotProjects.map((p, i) => (
            <button
              key={p.index}
              onClick={(e) => {
                e.stopPropagation();
                onSwitch(i);
              }}
              className="rounded px-1 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/40"
              style={{
                color:
                  i === activeIndex ? "var(--accent)" : "var(--text-faint)",
              }}
              aria-label={`View ${p.name} snapshot`}
            >
              {p.index}
            </button>
          ))}
          <span className="text-faint mx-0.5">of</span>
          <span className="text-faint">
            {String(snapshotProjects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="relative px-5 py-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-sans text-xl font-medium tracking-tight text-primary">
                {project.name}
              </h3>
              <p className="mt-0.5 text-sm text-secondary">
                {project.category}
              </p>
            </div>
            <span className="flex items-center gap-1.5 shrink-0 pt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                Shipped
              </span>
            </span>
          </div>

          <div className="mt-5">
            <div className="flex flex-col">
              {project.nodes.map((node, i) => (
                <div key={`${activeIndex}-${i}`}>
                  <motion.div
                    className="relative flex items-center gap-3 rounded-lg border border-line bg-elevated/40 px-4 py-2.5 transition-colors duration-300 group-hover:border-strong/60"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: easeOut,
                      delay: 0.08 + i * 0.07,
                    }}
                  >
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-muted" />
                    </span>

                    <div className="flex flex-1 items-baseline justify-between gap-3 min-w-0">
                      <span className="text-sm font-medium text-primary truncate">
                        {node.label}
                      </span>
                      {node.sublabel && (
                        <span className="font-mono text-[10px] text-faint shrink-0">
                          {node.sublabel}
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {i < project.nodes.length - 1 && (
                    <div className="flex justify-start py-0.5 pl-5.75">
                      <div className="w-px h-3 bg-linear-to-b from-border-strong to-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {project.supportLayer && (
              <motion.div
                className="mt-3 flex items-center gap-2 pl-5.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.08 + project.nodes.length * 0.07,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="shrink-0 text-faint"
                >
                  <path
                    d="M2 4 L6 1 L10 4 L6 7 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                  />
                  <path
                    d="M2 8 L6 5 L10 8 L6 11 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    opacity="0.5"
                  />
                </svg>
                <span className="font-mono text-[10px] text-faint">
                  {project.supportLayer}
                </span>
              </motion.div>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="shrink-0 text-xs text-accent text-right">
              {project.note}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={onClick}
        className="group/footer relative flex w-full items-center justify-between border-t border-line px-5 py-3.5 text-left transition-colors duration-300 hover:bg-elevated/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
      >
        <span className="text-xs text-muted transition-colors duration-300 group-hover/footer:text-secondary">
          Explore in projects
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-all duration-300 group-hover/footer:translate-x-0.5 group-hover/footer:-translate-y-0.5 group-hover/footer:text-accent" />
      </button>
    </motion.div>
  );
}
