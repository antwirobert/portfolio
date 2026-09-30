import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 px-6 sm:flex-row lg:px-10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line font-mono text-xs font-semibold text-accent">
            {"</>"}
          </span>
          <span className="font-mono text-xs text-muted">{profile.name}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-muted transition-colors duration-300 hover:text-primary"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors duration-300 hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors duration-300 hover:text-primary"
          >
            LinkedIn
          </a>
        </div>

        <span className="font-mono text-xs text-faint">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
