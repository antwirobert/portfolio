import { useEffect, useRef } from "react";

export function CursorGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const gridImage = (color: string) =>
    `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gridImage("var(--border)"),
          backgroundSize: "48px 48px",
          opacity: 0.5,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gridImage("var(--border-strong)"),
          backgroundSize: "48px 48px",
          opacity: 0.6,
          maskImage:
            "radial-gradient(circle 240px at var(--mx, -400px) var(--my, -400px), black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 240px at var(--mx, -400px) var(--my, -400px), black 0%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gridImage("var(--accent)"),
          backgroundSize: "48px 48px",
          opacity: 0.07,
          maskImage:
            "radial-gradient(circle 130px at var(--mx, -400px) var(--my, -400px), black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 130px at var(--mx, -400px) var(--my, -400px), black 0%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 30% 45%, transparent 0%, var(--bg) 88%)",
        }}
      />
    </div>
  );
}
