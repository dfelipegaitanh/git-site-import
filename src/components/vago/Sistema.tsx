import { SectionEyebrow, H2, Em } from "./VagoUI";

export function Sistema() {
  const steps = [
    { num: "01", color: "sage", title: "Bajar el listón.", body: "Define una tarea tan ridículamente pequeña que te dé vergüenza no hacerla. Eso es la entrada al día." },
    { num: "02", color: "blush", title: "Mover, no perfeccionar.", body: "25 minutos, feo, sin público. La meta no es buen trabajo — es romper la inercia. Lo bueno viene después." },
    { num: "03", color: "sand", title: "Cerrar sin culpa.", body: "Cuentas lo que sí hiciste, no lo que no. Mañana no empiezas desde cero — empiezas desde algo." },
  ];

  const colorMap: Record<string, { bg: string; color: string }> = {
    sage: { bg: "var(--sage)", color: "var(--sage-deep)" },
    blush: { bg: "var(--blush)", color: "var(--blush-deep)" },
    sand: { bg: "var(--sand)", color: "var(--sand-deep)" },
  };

  return (
    <section id="sistema" className="py-20">
      <div className="max-w-5xl mx-auto px-7">
        <div className="max-w-2xl">
          <SectionEyebrow>Cómo funciona</SectionEyebrow>
          <H2>Tres movimientos. <Em>Nada de fuerza de voluntad.</Em></H2>
          <p className="text-base mb-12" style={{ color: "var(--ink-soft)" }}>
            El nombre lo dice: vago, sí. Pero disciplinado en lo mínimo. Mejor empezar pequeño todos los días que prometerte gigante un domingo.
          </p>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          {steps.map((s) => (
            <article key={s.num} className="p-8 rounded-2xl" style={{ background: "var(--paper)", border: "1px solid var(--line)" }}>
              <div className="w-10 h-10 rounded-xl grid place-items-center font-bold text-base mb-5"
                style={{ background: colorMap[s.color].bg, color: colorMap[s.color].color }}>
                {s.num}
              </div>
              <h4 className="font-semibold text-xl mb-2" style={{ letterSpacing: "-0.02em" }}>{s.title}</h4>
              <p className="text-sm" style={{ color: "var(--ink-soft)", margin: 0 }}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
