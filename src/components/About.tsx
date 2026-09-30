import { about } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { BookOpen, Compass } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-line py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="section-label">About</span>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl">
                The engineer behind the code.
              </h2>
            </Reveal>

            <div className="mt-8 max-w-prose space-y-5">
              {about.paragraphs.map((para: string, i: number) => (
                <Reveal key={i} delay={i * 90}>
                  <p className="text-pretty text-base leading-relaxed text-secondary lg:text-[1.05rem]">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-strong lg:p-7">
                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                      Currently Learning
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {about.learning.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary"
                      >
                        <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-6 h-px bg-border" />

                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <Compass className="h-4 w-4 text-signal" />
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                      Looking For
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {about.interestedIn.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary"
                      >
                        <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
