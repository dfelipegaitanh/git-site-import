import { Em } from "./VagoUI";

export function Hero() {
  return (
    <header className="relative overflow-hidden" style={{ padding: "80px 0 64px" }}>
      <div className="max-w-5xl mx-auto px-7 grid gap-16 items-center" style={{ gridTemplateColumns: "1.05fr .95fr" }}>
        {/* Left */}
        <div>
          <span
            className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1.5 mb-7"
            style={{ border: "1px solid var(--line)", background: "var(--paper)", color: "var(--ink-soft)" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--sage-deep)", boxShadow: "0 0 0 4px rgba(111,138,106,.18)" }}
            />
            Para mentes brillantes que se atascan
          </span>

          <h1
            className="font-semibold mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(40px,5.4vw,64px)",
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "var(--ink)",
            }}
          >
            No te falta <span className="strike-through">motivación</span>.<br />
            Te falta una <Em>forma fácil</Em>
            <br />
            de empezar.
          </h1>

          <p className="text-lg mb-9 max-w-lg" style={{ color: "var(--ink-soft)" }}>
            Eres inteligente. Tienes ideas. Sabes que podrías más.
            <br />
            Pero llevas semanas pensando lo mismo y haciendo lo mismo. Aquí no vas a encontrar más motivación — vas a encontrar un sistema simple para volver a moverte.
          </p>

          <div className="flex gap-3 flex-wrap items-center mb-6">
            <a
              href="#freebie"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:-translate-y-px"
              style={{ background: "var(--ink)", color: "var(--bg)", textDecoration: "none" }}
            >
              Quiero el sistema gratis →
            </a>
            <a
              href="#dolor"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:border-black"
              style={{ border: "1px solid var(--line)", color: "var(--ink)", textDecoration: "none" }}
            >
              Cómo funciona
            </a>
          </div>
          <p className="text-xs" style={{ color: "var(--ink-mute)" }}>
            <strong style={{ color: "var(--ink-soft)", fontWeight: 500 }}>+2.400 profesionales</strong> ya lo están usando · Sin spam, sin promesas absurdas
          </p>
        </div>

        {/* Right — hero card */}
        <aside
          className="hero-card-decor relative rounded-3xl p-7"
          style={{ background: "var(--paper)", border: "1px solid var(--line)", boxShadow: "0 10px 30px -18px rgba(46,42,38,.18)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>Hoy</h3>
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: "var(--bg-2)", color: "var(--ink-soft)" }}>3 cosas. Solo 3.</span>
          </div>

          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {[
              { label: "Abrir el documento que llevo evitando", state: "done" },
              { label: "Escribir el primer borrador feo (25 min)", state: "active" },
              { label: "Cerrar el día sin culpa", state: "pending" },
            ].map(({ label, state }) => (
              <li
                key={label}
                className="flex gap-3 items-start px-3.5 py-3 rounded-xl text-sm"
                style={{
                  background: state === "active" ? "var(--paper)" : "var(--bg)",
                  border: state === "active" ? "1px solid var(--line)" : "1px solid transparent",
                  color: state === "done" ? "var(--ink-mute)" : state === "active" ? "var(--ink)" : "var(--ink-soft)",
                  textDecoration: state === "done" ? "line-through" : "none",
                }}
              >
                <span
                  className="w-5 h-5 rounded-full grid place-items-center flex-shrink-0 mt-px text-xs"
                  style={{
                    background: state === "active" ? "var(--sand)" : "var(--sage)",
                    color: state === "active" ? "var(--sand-deep)" : "var(--sage-deep)",
                  }}
                >
                  {state === "done" ? "✓" : state === "active" ? "→" : ""}
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-2)" }}>
            <div className="h-full w-3/5 rounded-full" style={{ background: "linear-gradient(90deg,var(--sage),var(--sage-deep))" }} />
          </div>
          <div className="flex justify-between text-xs mt-2" style={{ color: "var(--ink-mute)" }}>
            <span>Avance del día</span>
            <span>1 de 3</span>
          </div>
        </aside>
      </div>
    </header>
  );
}
