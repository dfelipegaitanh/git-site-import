import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import heroApp from "@/assets/hero-app.jpg";
import guideCover from "@/assets/guide-cover.jpg";
import { EmailForm } from "@/components/landing/EmailForm";
import { Section, Eyebrow } from "@/components/landing/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Vago Disciplinado — Empieza sin abrumarte" },
      {
        name: "description",
        content:
          "Para mentes brillantes que se atascan. Descarga gratis el Reset de 10 minutos y vuelve a moverte sin fuerza de voluntad.",
      },
      { property: "og:title", content: "El Vago Disciplinado — Empieza sin abrumarte" },
      {
        property: "og:description",
        content:
          "Sistema simple para mentes que se atascan. Descarga gratis el Reset de 10 minutos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: guideCover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: guideCover },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <LeadMagnet />
      <Divider />
      <HowItWorks />
      <Divider />
      <About />
      <Divider />
      <Resources />
      <Divider />
      <Testimonials />
      <Divider />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <div className="rule" />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <Section className="pt-16 sm:pt-20">
      <Eyebrow>El Vago Disciplinado · Descarga gratis</Eyebrow>
      <p className="mb-3 text-sm text-muted-foreground">
        Para mentes brillantes que se atascan
      </p>
      <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
        No te falta{" "}
        <span className="italic text-muted-foreground line-through decoration-foreground/40">
          motivación
        </span>
        .<br />
        Te falta una forma fácil de empezar.
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Eres inteligente. Tienes ideas. Sabes que podrías más. Pero llevas
        semanas pensando lo mismo y haciendo lo mismo. Aquí no vas a encontrar
        más motivación — vas a encontrar un sistema simple para volver a
        moverte.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#descarga"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Quiero el sistema gratis
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#como-funciona"
          className="text-sm text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          Cómo funciona
        </a>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        +2.400 profesionales ya lo están usando · Sin spam, sin promesas absurdas
      </p>

      <div className="mt-14 overflow-hidden rounded-lg border border-foreground/10 bg-muted">
        <img
          src={heroApp}
          alt="Vista previa del sistema: tareas pequeñas para empezar el día sin abrumarte"
          className="h-auto w-full"
          loading="eager"
        />
      </div>
    </Section>
  );
}

/* ───────────────────────── PROBLEM ───────────────────────── */
function Problem() {
  const items = [
    {
      n: "01",
      title: "Sobreanálisis",
      head: "Planeas tanto que nunca empiezas.",
      body: "Comparas opciones, abres pestañas, vuelves a planear. La acción se posterga otro día más.",
    },
    {
      n: "02",
      title: "Culpa acumulada",
      head: "Cada día sin avanzar pesa más.",
      body: "Y mientras más pesa, menos quieres abrir el archivo. El círculo se cierra solo.",
    },
    {
      n: "03",
      title: "Empezar y no terminar",
      head: "Tienes 7 proyectos a medio hacer.",
      body: "No es que no sirvas. Es que nadie te enseñó a terminar con poco — y siempre te exiges demasiado al inicio.",
    },
  ];

  return (
    <Section>
      <Eyebrow>El problema real</Eyebrow>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        No estás siendo flojo.<br />
        Estás <mark>sobrecargado</mark> por dentro.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Has leído libros, tomado cursos, hecho planes nuevos un domingo por la
        noche. El lunes seguís en el mismo lugar. No es falta de capacidad. Es
        parálisis acumulada.
      </p>

      <div className="mt-14 space-y-12">
        {items.map((it) => (
          <div key={it.n}>
            <p className="eyebrow mb-3">
              {it.n} — {it.title}
            </p>
            <h3 className="font-serif text-2xl leading-snug sm:text-3xl">
              {it.head}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {it.body}
            </p>
          </div>
        ))}
      </div>

      <blockquote className="mt-16 border-l-2 border-foreground pl-6">
        <p className="font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
          “Sé exactamente lo que tengo que hacer. Llevo meses sabiéndolo. Y ahí
          sigue.”
        </p>
        <footer className="mt-3 text-sm text-muted-foreground">
          — Probablemente algo que has pensado esta semana.
        </footer>
      </blockquote>
    </Section>
  );
}

/* ───────────────────────── LEAD MAGNET ───────────────────────── */
function LeadMagnet() {
  return (
    <Section id="descarga">
      <Eyebrow>Descarga gratis · Guía en PDF</Eyebrow>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        El Reset de 10 minutos para mentes bloqueadas.
      </h2>

      <div className="mt-10 overflow-hidden rounded-lg border border-foreground/10 bg-muted">
        <img
          src={guideCover}
          alt="Portada de la guía: Neurociencia Práctica — El Reset de 10 minutos para mentes bloqueadas"
          className="h-auto w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        No te falta talento. Te falta un sistema nervioso que te deje empezar.
        Esta guía usa tu propia biología — el nervio vago — para desbloquearte
        en menos de lo que tarda tu café en enfriarse.
      </p>

      <ul className="mt-8 space-y-4 text-base">
        <Bullet>
          Por qué no es falta de fuerza de voluntad — es tu sistema nervioso en
          modo supervivencia.
        </Bullet>
        <Bullet>
          Las 4 herramientas con respaldo científico para activar tu modo
          creación.
        </Bullet>
        <Bullet>
          El protocolo de 10 minutos: 3 fases — Enfocar, Soltar, Activar.
        </Bullet>
      </ul>

      <div className="mt-10">
        <EmailForm />
      </div>
    </Section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden className="mt-[0.55rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
      <span className="leading-relaxed text-foreground">{children}</span>
    </li>
  );
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Bajar el listón.",
      body: "Define una tarea tan ridículamente pequeña que te dé vergüenza no hacerla. Eso es la entrada al día.",
    },
    {
      n: "02",
      title: "Mover, no perfeccionar.",
      body: "25 minutos, feo, sin público. La meta no es buen trabajo — es romper la inercia. Lo bueno viene después.",
    },
    {
      n: "03",
      title: "Cerrar sin culpa.",
      body: "Cuentas lo que sí hiciste, no lo que no. Mañana no empiezas desde cero — empiezas desde algo.",
    },
  ];

  return (
    <Section id="como-funciona">
      <Eyebrow>Cómo funciona</Eyebrow>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        Tres movimientos.<br />
        Nada de fuerza de voluntad.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        El nombre lo dice: vago, sí. Pero disciplinado en lo mínimo. Mejor
        empezar pequeño todos los días que prometerte gigante un domingo.
      </p>

      <div className="mt-14 space-y-12">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-6">
            <span className="font-serif text-5xl leading-none text-muted-foreground/60 sm:text-6xl">
              {s.n}
            </span>
            <div>
              <h3 className="font-serif text-2xl leading-snug sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */
function About() {
  return (
    <Section>
      <Eyebrow>Hola, soy quien escribe esto</Eyebrow>
      <div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-8">
        <div className="aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-md border border-dashed border-foreground/30 bg-muted">
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <span className="eyebrow">Tu foto aquí</span>
            <span className="mt-2 text-xs text-muted-foreground">
              Vertical 4:5
            </span>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Te entiendo porque fui exactamente <mark>eso</mark>: el inteligente
            que no avanza.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Diplomas, cursos, libros, planes de domingo. Y aun así, lunes tras
            lunes, en el mismo punto.{" "}
            <strong className="font-medium text-foreground">
              No me sacó del bloqueo la motivación
            </strong>{" "}
            — me sacó bajar tanto el listón que era ridículo no empezar.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Hoy escribo, vendo cosas mías y aplico IA al marketing sin sentir
            que vivo corriendo. Lo que comparto aquí es lo que de verdad uso —
            no teoría bonita.
          </p>
          <p className="mt-6 font-serif text-lg italic">
            — El Vago Disciplinado
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── RESOURCES ───────────────────────── */
function Resources() {
  return (
    <Section>
      <Eyebrow>Recursos que sí valen la pena</Eyebrow>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        Lo que uso (y recomiendo) cuando ya hay tracción.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Cuando estés listo para construir algo real con tu cabeza — no antes —
        estos dos espacios son los que más me ayudaron a pasar de “sé que puedo”
        a “estoy moviendo algo”.
      </p>

      <div className="mt-12 space-y-10">
        <ResourceCard
          tag="Recomendación 01 · Contenido & productos digitales"
          title="Convierte tus ideas en algo que sí vende, sin volverte creador a tiempo completo."
          body="Para profesionales con conocimiento que quieren empacarlo en contenido y producto digital — sin algoritmos, sin bailar en cámara, sin tener que “construir audiencia” durante 2 años antes de cobrar."
          bullets={[
            "Sistema simple para publicar sin sentirte expuesto.",
            "Cómo armar tu primer producto digital esta semana.",
            "Pensado para mentes que se atascan analizando.",
          ]}
          ctaLabel="Ver de qué va"
          href="#"
        />
        <ResourceCard
          tag="Recomendación 02 · Comunidad IA + Marketing digital"
          title="La comunidad donde la IA deja de ser teoría y empieza a hacerte ganar tiempo (y dinero)."
          body="Skool con sesiones, plantillas y gente moviéndose en marketing digital con IA. Ideal si quieres dejar de coleccionar tutoriales y por fin aplicar — con gente al lado, no solo en YouTube."
          bullets={[
            "Casos reales aplicando IA al marketing — no humo.",
            "Plantillas y prompts listos para usar hoy.",
            "Comunidad activa que te mueve cuando tú no puedes solo.",
          ]}
          ctaLabel="Unirme a la comunidad"
          href="#"
        />
      </div>
    </Section>
  );
}

function ResourceCard({
  tag,
  title,
  body,
  bullets,
  ctaLabel,
  href,
}: {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
  href: string;
}) {
  return (
    <article className="rounded-lg border border-foreground/10 bg-muted/40 p-7 sm:p-9">
      <p className="eyebrow">{tag}</p>
      <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
      <ul className="mt-5 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-base text-foreground">
            <span aria-hidden className="text-muted-foreground">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-md border border-foreground bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
        <span className="text-xs text-muted-foreground">
          Enlace de afiliado. Solo recomiendo lo que sí uso.
        </span>
      </div>
    </article>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
function Testimonials() {
  const items = [
    {
      quote:
        "Llevaba 2 años diciéndome que iba a lanzar algo mío. Bajé el sistema un martes y el jueves tenía el primer producto publicado. No es magia — es que por fin alguien me dio permiso de empezar feo.",
      name: "Marina R.",
      meta: "Consultora · Madrid",
    },
    {
      quote:
        "Por primera vez cierro el día sin la culpa de costumbre. Eso solo ya cambia cómo amaneces.",
      name: "Javier S.",
      meta: "Abogado · CDMX",
    },
    {
      quote:
        "No es otro método de productividad. Es el primero pensado para gente que ya lo intentó todo y sigue trabada.",
      name: "Lucía M.",
      meta: "Diseñadora freelance · Bogotá",
    },
    {
      quote:
        "Lo mejor: 0 motivación barata. Solo pasos chiquitos que sí puedo hacer aunque esté agotado.",
      name: "Daniel P.",
      meta: "Ingeniero · Lima",
    },
    {
      quote:
        "Volví a terminar cosas. Tenía 6 proyectos a medias; ya cerré 2 en un mes.",
      name: "Carolina A.",
      meta: "Coach de carrera · Buenos Aires",
    },
  ];

  return (
    <Section>
      <Eyebrow>Lo que dicen quienes ya empezaron</Eyebrow>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        De “sé que puedo” a estar moviendo algo real.
      </h2>

      <div className="mt-12 space-y-10">
        {items.map((t) => (
          <figure key={t.name} className="border-t border-foreground/10 pt-8">
            <div className="mb-3 flex gap-0.5" aria-label="5 estrellas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
              ))}
            </div>
            <blockquote className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium text-foreground">{t.name}</span>
              <span className="text-muted-foreground"> · {t.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <Section>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
        Empieza pequeño. <mark>Empieza hoy.</mark><br />
        Mañana ya tendrás algo, no otra deuda mental.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        No vas a salir del bloqueo leyendo otro hilo de Twitter. Sal del bloqueo
        bajando una guía de 4 páginas y haciendo un paso en los próximos 25
        minutos.
      </p>
      <div className="mt-8">
        <a
          href="#descarga"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Descargar el sistema gratis
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-2xl flex-col gap-3 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© El Vago Disciplinado · Hecho sin presión.</p>
        <nav className="flex gap-5">
          <a href="#descarga" className="hover:text-foreground">Freebie</a>
          <a href="#" className="hover:text-foreground">Recursos</a>
          <a href="#" className="hover:text-foreground">Aviso legal</a>
        </nav>
      </div>
    </footer>
  );
}
