import { experience } from "../data/portfolio";
import type { ExperienceEntry } from "../types";
import { Reveal } from "./Reveal";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const typeConfig: Record<
  ExperienceEntry["type"],
  { label: string; icon: typeof Briefcase }
> = {
  experience: { label: "Experience", icon: Briefcase },
  education: { label: "Education", icon: GraduationCap },
  certification: { label: "Certification", icon: Award },
};

export function Experience() {
  const groups = experience.reduce<Record<string, ExperienceEntry[]>>(
    (acc, entry) => {
      (acc[entry.type] = acc[entry.type] || []).push(entry);
      return acc;
    },
    {},
  );

  const orderedTypes = ["experience", "education", "certification"].filter(
    (type) => groups[type]?.length,
  );

  return (
    <section
      id="experience"
      className="relative border-t border-line py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 lg:mb-16">
            <span className="section-label">Experience &amp; Education</span>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Where I've worked and what I've learned.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {orderedTypes.map((type) => {
            const config = typeConfig[type as ExperienceEntry["type"]];
            const Icon = config.icon;
            const entries = groups[type];

            return (
              <div key={type}>
                <Reveal>
                  <div className="mb-7 flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-accent" />
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                      {config.label}
                    </h3>
                  </div>
                </Reveal>

                {/* Timeline */}
                <div className="relative">
                  {entries.map((entry, i) => (
                    <Reveal key={entry.id} delay={i * 70}>
                      <div
                        className={`relative border-l border-line pl-6 ${
                          i === entries.length - 1 ? "pb-0" : "pb-9"
                        }`}
                      >
                        {/* Dot */}
                        <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-base bg-accent" />

                        <div className="mb-1.5 font-mono text-xs text-faint">
                          {entry.period}
                        </div>

                        <h4 className="text-base font-medium tracking-tight text-primary">
                          {entry.role}
                        </h4>

                        <div className="mt-0.5 text-sm text-accent">
                          {entry.org}
                        </div>

                        {entry.location && (
                          <div className="mt-0.5 font-mono text-xs text-faint">
                            {entry.location}
                          </div>
                        )}

                        {Array.isArray(entry.description) ? (
                          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-secondary">
                            {entry.description.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-3 text-sm leading-relaxed text-secondary">
                            {entry.description}
                          </p>
                        )}

                        {entry.tags && entry.tags.length > 0 && (
                          <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {entry.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
