import { SectionEyebrow, H2, Em } from "./VagoUI";

export function Testimonios() {
  const testis = [
    { quote: "Llevaba 2 años diciéndome que iba a lanzar algo mío. Bajé el sistema un martes y el jueves tenía el primer producto publicado. No es magia — es que por fin alguien me dio permiso de empezar feo.", name: "Marina R.", role: "Consultora · Madrid", av: "MR", avColor: "sage", feature: true },
    { quote: "Por primera vez cierro el día sin la culpa de costumbre. Eso solo ya cambia cómo amaneces.", name: "Javier S.", role: "Abogado · CDMX", av: "JS", avColor: "blush" },
    { quote: "No es otro método de productividad. Es el primero pensado para gente que ya lo intentó todo y sigue trabada.", name: "Lucía M.", role: "Diseñadora freelance · Bogotá", av: "LM", avColor: "sky" },
    { quote: "Lo mejor: 0 motivación barata. Solo pasos chiquitos que sí puedo hacer aunque esté agotado.", name: "Daniel P.", role: "Ingeniero · Lima", av: "DP", avColor: "sand" },
    { quote: "Volví a terminar cosas. Tenía 6 proyectos a medias; ya cerré 2 en un mes.", name: "Carolina A.", role: "Coach de carrera · Buenos Aires", av: "CA", avColor: "sage" },
  ];

  const avColors: Record<string, { bg: string; color: string }> = {
    sage: { bg: "var(--sage)", color: "var(--sage-deep)" },
    blush: { bg: "var(--blush)", color: "var(--blush-deep)" },
    sky: { bg: "var(--sky)", color: "var(--sky-deep)" },
    sand: { bg: "var(--sand)", color: "var(--sand-deep)" },
  };

  return (
    <section id="testimonios" className="py-20">
      <div className="max-w-5xl mx-auto px-7">
        <div className="rounded-3xl p-16" style={{ background: "var(--bg-2)" }}>
          <div className="max-w-2xl mb-12">
            <SectionEyebrow>Lo que dicen quienes ya empezaron</SectionEyebrow>
            <H2>De <Em>"sé que puedo"</Em> a estar moviendo algo real.</H2>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {testis.map((t) => (
              <article
                key={t.name}
                className={`flex flex-col gap-4 p-7 rounded-2xl ${t.feature ? "testi-feature" : ""}`}
                style={{
                  background: t.feature ? "var(--sage)" : "var(--paper)",
                  border: t.feature ? "none" : "1px solid var(--line)",
                }}
              >
                <div className="flex gap-0.5" style={{ color: "var(--sand-deep)", fontSize: 14 }}>★★★★★</div>
                <p
                  className="font-medium m-0 flex-1"
                  style={{
                    fontSize: t.feature ? 22 : 17,
                    lineHeight: t.feature ? 1.3 : 1.45,
                    letterSpacing: t.feature ? "-0.02em" : "-0.01em",
                    color: "var(--ink)",
                  }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-10 h-10 rounded-full grid place-items-center font-semibold text-sm flex-shrink-0"
                    style={t.feature ? { background: "var(--paper)", color: "var(--sage-deep)" } : avColors[t.avColor]}
                  >
                    {t.av}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--ink-mute)" }}>{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
