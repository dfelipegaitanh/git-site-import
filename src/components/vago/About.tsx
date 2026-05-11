import { SectionEyebrow, H2, Em } from "./VagoUI";

export function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-5xl mx-auto px-7 grid gap-16 items-center" style={{ gridTemplateColumns: ".9fr 1.1fr" }}>
        <div className="photo-frame relative rounded-2xl p-3.5" style={{ aspectRatio: "4/5", background: "var(--sand)", boxShadow: "0 10px 30px -18px rgba(46,42,38,.18)" }}>
          <div
            className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-3 text-center p-6"
            style={{
              background: "repeating-linear-gradient(135deg,rgba(46,42,38,.04) 0 12px,rgba(46,42,38,0) 12px 24px),var(--paper)",
              color: "var(--ink-mute)",
            }}
          >
            <div className="w-14 h-14 rounded-full grid place-items-center" style={{ background: "var(--bg-2)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest">Tu foto aquí</div>
            <div className="text-xs max-w-48 leading-snug">Vertical 4:5, mirando a cámara, fondo limpio.</div>
          </div>
        </div>

        <div>
          <SectionEyebrow>Hola, soy quien escribe esto</SectionEyebrow>
          <H2>Te entiendo porque <Em>fui exactamente eso</Em>: el inteligente que no avanza.</H2>
          <p className="text-base mb-4" style={{ color: "var(--ink-soft)" }}>
            Diplomas, cursos, libros, planes de domingo. Y aun así, lunes tras lunes, en el mismo punto.{" "}
            <strong style={{ color: "var(--ink)" }}>No me sacó del bloqueo la motivación</strong> — me sacó bajar tanto el listón que era ridículo no empezar.
          </p>
          <p className="text-base mb-5" style={{ color: "var(--ink-soft)" }}>
            Hoy escribo, vendo cosas mías y aplico IA al marketing sin sentir que vivo corriendo. Lo que comparto aquí es lo que de verdad uso — no teoría bonita.
          </p>
          <div className="font-semibold text-base" style={{ color: "var(--sage-deep)" }}>— El Vago Disciplinado</div>
          <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "var(--ink-soft)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sage-deep)" }} />
            Si te sientes así: la guía gratis de arriba es el primer empujón.
          </div>
        </div>
      </div>
    </section>
  );
}
