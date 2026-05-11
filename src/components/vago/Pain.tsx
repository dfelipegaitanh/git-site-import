import { SectionEyebrow, H2, Em } from "./VagoUI";

export function Pain() {
  const cards = [
    { num: "01 — Sobreanálisis", title: "Planeas tanto que nunca empiezas.", body: "Comparas opciones, abres pestañas, vuelves a planear. La acción se posterga otro día más." },
    { num: "02 — Culpa acumulada", title: "Cada día sin avanzar pesa más.", body: "Y mientras más pesa, menos quieres abrir el archivo. El círculo se cierra solo." },
    { num: "03 — Empezar y no terminar", title: "Tienes 7 proyectos a medio hacer.", body: "No es que no sirvas. Es que nadie te enseñó a terminar con poco — y siempre te exiges demasiado al inicio." },
  ];

  return (
    <section id="dolor" className="py-20" style={{ background: "var(--bg-2)", borderRadius: 32 }}>
      <div className="max-w-5xl mx-auto px-7">
        <div className="max-w-2xl">
          <SectionEyebrow>El problema real</SectionEyebrow>
          <H2>No estás siendo flojo. Estás <Em>sobrecargado</Em> por dentro.</H2>
          <p className="text-base mb-10" style={{ color: "var(--ink-soft)" }}>
            Has leído libros, tomado cursos, hecho planes nuevos un domingo por la noche. El lunes seguís en el mismo lugar. No es falta de capacidad. Es parálisis acumulada.
          </p>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {cards.map((c) => (
            <div key={c.num} className="p-7 rounded-2xl" style={{ background: "var(--paper)", border: "1px solid var(--line)" }}>
              <span className="block mb-4 uppercase text-xs tracking-widest" style={{ color: "var(--ink-mute)" }}>{c.num}</span>
              <h4 className="font-semibold text-xl mb-2" style={{ letterSpacing: "-0.02em" }}>{c.title}</h4>
              <p className="text-sm" style={{ color: "var(--ink-soft)", margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>

        <blockquote
          className="mt-14 text-center mx-auto font-medium"
          style={{ maxWidth: 700, fontSize: "clamp(20px,2.4vw,28px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "var(--ink)", margin: "56px auto 0" }}
        >
          "Sé exactamente lo que tengo que hacer. Llevo meses sabiéndolo. Y ahí sigue."
          <span className="block text-xs mt-4" style={{ color: "var(--ink-mute)", letterSpacing: ".04em" }}>— Probablemente algo que has pensado esta semana.</span>
        </blockquote>
      </div>
    </section>
  );
}
