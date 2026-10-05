import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 50% at 50% 50%, var(--bg-surface) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <span className="section-label">Contact</span>

              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-medium tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Have a problem worth solving?
              </h2>

              <p className="mx-auto mt-6 max-w-md text-pretty text-sm leading-relaxed text-secondary lg:text-base">
                I'm {profile.name.split(" ")[0]} — if your team is building
                something that requires real engineering, I'd like to hear about
                it.
              </p>

              <div className="mt-10 flex justify-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
