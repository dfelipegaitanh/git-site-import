import { SectionEyebrow, H2, Em } from "./VagoUI";

export function Recursos() {
  const cards = [
    {
      type: "contenido",
      tag: "Recomendación 01 · Contenido & productos digitales",
      tagStyle: { background: "var(--blush)", color: "var(--blush-deep)" },
      title: "Convierte tus ideas en algo que sí vende, sin volverte creador a tiempo completo.",
      desc: "Para profesionales con conocimiento que quieren empacarlo en contenido y producto digital — sin algoritmos, sin bailar en cámara.",
      points: ["Sistema simple para publicar sin sentirte expuesto.", "Cómo armar tu primer producto digital esta semana.", "Pensado para mentes que se atascan analizando."],
      ctaLabel: "Ver de qué va",
      ctaStyle: { background: "var(--blush-deep)", color: "var(--paper)" },
    },
    {
      type: "skool",
      tag: "Recomendación 02 · Comunidad IA + marketing digital",
      tagStyle: { background: "var(--sky)", color: "var(--sky-deep)" },
      title: "La comunidad donde la IA deja de ser teoría y empieza a hacerte ganar tiempo (y dinero).",
      desc: "Skool con sesiones, plantillas y gente moviéndose en marketing digital con IA.",
      points: ["Casos reales aplicando IA al marketing — no humo.", "Plantillas y prompts listos para usar hoy.", "Comunidad activa que te mueve cuando tú no puedes solo."],
      ctaLabel: "Unirme a la comunidad",
      ctaStyle: { background: "var(--sky-deep)", color: "var(--paper)" },
    },
  ];

  return (
    <section id="recursos" className="py-20" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="max-w-5xl mx-auto px-7">
        <div className="text-center mb-14">
          <SectionEyebrow>Recursos que sí valen la pena</SectionEyebrow>
          <H2>Lo que uso (y recomiendo) cuando ya hay <Em>tracción.</Em></H2>
          <p className="text-base mx-auto max-w-xl" style={{ color: "var(--ink-soft)" }}>
            Cuando estés listo para construir algo real con tu cabeza — no antes — estos dos espacios son los que más me ayudaron.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {cards.map((c) => (
            <article key={c.type} className="flex flex-col rounded-3xl p-9 transition-transform hover:-translate-y-1"
              style={{ background: "var(--bg)", border: "1px solid var(--line)" }}>
              <span className="inline-flex self-start px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium mb-5" style={c.tagStyle}>
                {c.tag}
              </span>
              <h3 className="font-semibold text-2xl mb-3 leading-snug" style={{ letterSpacing: "-0.025em" }}>{c.title}</h3>
              <p className="text-sm mb-6 flex-grow-0" style={{ color: "var(--ink-soft)" }}>{c.desc}</p>
              <ul className="list-none p-0 flex flex-col gap-2 flex-1 mb-7">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm items-start">
                    <span style={{ color: "var(--ink-mute)" }}>→</span>{p}
                  </li>
                ))}
              </ul>
              <a href="#" className="rec-cta inline-flex items-center justify-between gap-3 px-5 py-4 rounded-2xl font-semibold text-sm"
                style={{ ...c.ctaStyle, textDecoration: "none" }}>
                <span>{c.ctaLabel}</span>
                <span className="arrow">→</span>
              </a>
              <p className="text-xs mt-3" style={{ color: "var(--ink-mute)" }}>Enlace de afiliado. Solo recomiendo lo que sí uso.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
