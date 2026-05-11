import { useState } from "react";
import { SectionEyebrow, H2, Em } from "./VagoUI";

export function Freebie() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="freebie" className="py-20">
      <div className="max-w-5xl mx-auto px-7 grid gap-14 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {/* Visual */}
        <div className="freebie-visual relative rounded-3xl overflow-hidden" style={{ background: "var(--sage)", aspectRatio: "4/5", boxShadow: "0 10px 30px -18px rgba(46,42,38,.18)" }}>
          <div className="freebie-doc absolute rounded-lg p-6" style={{ inset: "14% 18%", background: "var(--paper)", boxShadow: "0 20px 40px -20px rgba(46,42,38,.35)" }}>
            <div className="text-xs mb-3 uppercase tracking-widest" style={{ color: "var(--ink-mute)" }}>Neurociencia práctica</div>
            <h5 className="font-semibold text-lg mb-3 leading-tight" style={{ letterSpacing: "-0.02em" }}>El Reset de 10 minutos para mentes bloqueadas</h5>
            {["full", "short", "accent"].map((t, i) => (
              <div key={i} className="h-1 rounded mb-2" style={{
                background: t === "accent" ? "var(--sand)" : "var(--bg-2)",
                width: t === "short" ? "60%" : t === "accent" ? "30%" : "100%"
              }} />
            ))}
            <div className="my-4" style={{ height: 1, background: "var(--line)" }} />
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex gap-2 mb-2 items-start">
                <span className="w-4 h-4 rounded-full grid place-items-center flex-shrink-0 text-xs font-semibold mt-px"
                  style={{ background: "var(--sage)", color: "var(--sage-deep)", fontSize: 10 }}>{n}</span>
                <div className="flex-1">
                  <div className="h-1 rounded mb-1" style={{ background: "var(--bg-2)" }} />
                  <div className="h-1 rounded w-3/5" style={{ background: "var(--bg-2)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionEyebrow>Descarga gratis · Guía en PDF</SectionEyebrow>
          <H2>El Reset de <Em>10 minutos</Em> para mentes bloqueadas.</H2>
          <p className="text-base mb-7" style={{ color: "var(--ink-soft)" }}>
            No te falta talento. Te falta un sistema nervioso que te deje empezar. Esta guía usa tu propia biología — el nervio vago — para desbloquearte en menos de lo que tarda tu café en enfriarse.
          </p>

          <ul className="list-none p-0 flex flex-col gap-3 mb-9">
            {[
              "Por qué no es falta de fuerza de voluntad — es tu sistema nervioso en modo supervivencia.",
              "Las 4 herramientas con respaldo científico para activar tu modo creación.",
              "El protocolo de 10 minutos: 3 fases — Enfocar, Soltar, Activar.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm items-start">
                <span className="w-6 h-6 rounded-lg grid place-items-center flex-shrink-0 mt-px text-xs"
                  style={{ background: "var(--blush)", color: "var(--blush-deep)" }}>✓</span>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 p-5 rounded-2xl" style={{ background: "var(--paper)", border: "1px solid var(--line)" }}>
            <input
              type="email"
              placeholder="tu@correo.com"
              className="flex-1 min-w-48 rounded-xl px-4 py-3 text-sm outline-none"
              style={{ border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", fontFamily: "inherit" }}
            />
            <button
              onClick={() => setSubmitted(true)}
              className="rounded-xl px-5 py-3 font-semibold text-sm transition-colors"
              style={{ background: "var(--ink)", color: "var(--bg)", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              {submitted ? "Revisa tu correo ✓" : "Quiero el Reset gratis"}
            </button>
            <span className="w-full text-xs mt-1" style={{ color: "var(--ink-mute)" }}>PDF de 4 páginas. Llega en 1 minuto. Sin spam.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
