import { Em } from "./VagoUI";

export function Manifesto() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-5xl mx-auto px-7">
        <h2
          className="font-semibold mx-auto mb-6"
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "clamp(32px,4.2vw,52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            maxWidth: 800,
            color: "var(--ink)",
          }}
        >
          Empieza pequeño. <Em>Empieza hoy.</Em>
          <br />Mañana ya tendrás algo, no otra deuda mental.
        </h2>
        <p className="text-base mx-auto mb-9 max-w-lg" style={{ color: "var(--ink-soft)" }}>
          No vas a salir del bloqueo leyendo otro hilo de Twitter. Sal del bloqueo bajando una guía de 4 páginas y haciendo un paso en los próximos 25 minutos.
        </p>
        <a
          href="#freebie"
          className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:-translate-y-px"
          style={{ background: "var(--ink)", color: "var(--bg)", textDecoration: "none" }}
        >
          Descargar el sistema gratis →
        </a>
      </div>
    </section>
  );
}
