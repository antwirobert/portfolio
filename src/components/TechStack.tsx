import { techStack } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative border-t border-line py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 lg:mb-16">
            <span className="section-label">Engineering / Tech Stack</span>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl">
              The tools I reach for.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              Not a skill bar in sight. These are the technologies I use in my
              projects and day-to-day work.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {techStack.map((group, index) => (
            <Reveal key={group.category} delay={index * 70}>
              <div className="group h-full rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:border-strong hover:bg-elevated/20 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[11px] text-faint">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="space-y-0">
                  {group.items.map(
                    (item: { name: string; note?: string }, i) => (
                      <li
                        key={item.name}
                        className={`flex items-center justify-between py-2.5 ${
                          i !== group.items.length - 1
                            ? "border-b border-line"
                            : ""
                        }`}
                      >
                        <span className="text-sm text-primary transition-colors duration-300 group-hover:text-primary">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                            {item.note}
                          </span>
                        )}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
