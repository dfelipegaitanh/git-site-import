import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 py-5"
      style={{
        background: "rgba(246,241,233,.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "border-color .2s",
      }}
    >
      <div className="max-w-5xl mx-auto px-7 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-base" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
          <span className="logo-mark" />
          El Vago Disciplinado
        </a>
        <div className="flex gap-7 items-center text-sm" style={{ color: "var(--ink-soft)" }}>
          {["#dolor:El problema", "#sistema:El sistema", "#recursos:Recursos", "#sobre:Sobre mí"].map((s) => {
            const [href, label] = s.split(":");
            return (
              <a key={href} href={href} className="hidden md:block hover:text-black transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
                {label}
              </a>
            );
          })}
          <a
            href="#freebie"
            className="px-4 py-2 rounded-full text-sm transition-all hover:border-black"
            style={{ border: "1px solid var(--line)", background: "var(--paper)", color: "var(--ink)", textDecoration: "none" }}
          >
            Descarga gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
