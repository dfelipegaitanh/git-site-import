
# Landing "El Vago Disciplinado"

Recreamos el contenido del PDF como una landing page de una sola columna, estilo editorial (Paper & Ink + Instrument Serif / Work Sans), con formulario que guarda los suscriptores en Lovable Cloud y entrega la guía PDF.

## Estructura de la página (`/`)

Una sola ruta (`src/routes/index.tsx`) con secciones apiladas y centradas (~640–720px de ancho de lectura):

1. **Hero** — "El Vago Disciplinado" + subtítulo "No te falta motivación. Te falta una forma fácil de empezar." + CTA primario "Quiero el sistema gratis" (ancla al formulario) + nota social "+2.400 profesionales".
2. **El problema real** — intro + 3 bloques numerados (01 Sobreanálisis, 02 Culpa acumulada, 03 Empezar y no terminar) + cita destacada en serif grande.
3. **Lead magnet (descarga gratis)** — tarjeta con la portada de la guía, los 3 bullets ("por qué no es fuerza de voluntad", "4 herramientas", "protocolo 10 minutos") y el **formulario de email**.
4. **Cómo funciona** — "Tres movimientos. Nada de fuerza de voluntad." con los 3 pasos: Bajar el listón / Mover, no perfeccionar / Cerrar sin culpa.
5. **Sobre el autor** — bloque "Hola, soy quien escribe esto" con placeholder de foto vertical 4:5 y el texto.
6. **Recursos recomendados** — 2 tarjetas de afiliado (Contenido & productos digitales, Comunidad IA + Marketing) con disclaimer.
7. **Testimonios** — 5 testimonios con estrellas, nombre, profesión y ciudad (Marina, Javier, Lucía, Daniel, Carolina).
8. **CTA final** — "Empieza pequeño. Empieza hoy." + botón ancla al formulario.
9. **Footer** — copyright "Hecho sin presión" + enlaces (Freebie, Recursos, Aviso legal).

## Sistema de diseño

Actualizar `src/styles.css` con la paleta Paper & Ink en oklch:
- `--background`: #f5f3ee (papel)
- `--foreground`: #0d0d0d (tinta)
- `--muted`: #e8e4dd
- `--muted-foreground`: #2d2d2d
- `--primary`: #0d0d0d (botones tinta sólida)
- Acento sutil para resaltadores (`<mark>`): amarillo papel envejecido tipo highlighter

Tipografía:
- Headings: **Instrument Serif** (display, italic ocasional para énfasis)
- Body / UI: **Work Sans**
- Cargar via `<link>` en `__root.tsx` head + variables CSS `--font-serif` / `--font-sans`

Tono visual: márgenes amplios, mucha respiración vertical, líneas finas como separadores, números en serif grande para los pasos, etiquetas en mayúsculas espaciadas (tracking) tipo revista.

## Captura de emails (Lovable Cloud)

- Activar **Lovable Cloud**.
- Tabla `subscribers`: `id uuid pk`, `email text unique not null`, `created_at timestamptz default now()`, `source text default 'reset-10min'`.
- RLS: solo `INSERT` público anónimo permitido (no select/update/delete desde el cliente).
- Componente `EmailForm` (cliente) con validación Zod (`email().max(255)`), estados loading / success / error, toast de feedback.
- Al éxito: mostrar mensaje "Te llega en 1 minuto" + botón visible "Descargar la guía ahora" que apunta al PDF.

## Entrega del PDF

- Copiar el PDF a `public/el-reset-de-10-minutos.pdf` para descarga directa.
- Tras enviar el formulario se revela el botón de descarga inmediato (sin esperar email — el email queda guardado para el creador).

> Nota: el envío automático del PDF por email queda fuera del alcance ahora; se puede sumar después con email transaccional.

## Imágenes

Copiar del PDF a `src/assets/`:
- `hero-app.jpg` (mockup app, página 1)
- `guide-cover.jpg` (portada guía, página 4)
- Placeholder de autor: marco vacío con texto "Tu foto aquí" (el usuario la sustituirá luego).

## SEO

`head()` en `index.tsx`:
- title: "El Vago Disciplinado — Empieza sin abrumarte"
- description: "Para mentes brillantes que se atascan. Descarga gratis el Reset de 10 minutos y vuelve a moverte sin fuerza de voluntad."
- og:title / og:description / og:image (usar `guide-cover.jpg`)
- twitter:card summary_large_image

## Detalles técnicos

- Stack: TanStack Start (ya configurado), no se introduce React Router.
- Formulario: server function `createServerFn` con `requireSupabaseAuth`? **No** — endpoint público; usar inserción desde el cliente con la tabla restringida por RLS solo a INSERT anónimo, suficiente para el caso.
- Reemplazar el `PlaceholderIndex` actual de `src/routes/index.tsx`.
- Smooth scroll a `#descarga` desde los CTAs.
- Componentes nuevos en `src/components/landing/`: `Hero`, `Problem`, `LeadMagnet`, `EmailForm`, `HowItWorks`, `About`, `Resources`, `Testimonials`, `FinalCTA`, `Footer`.
- Botones y tipografía con tokens semánticos del design system, sin colores hardcodeados.

## Pendiente para después (no en este plan)

- Envío automático del PDF al email (email transaccional vía Lovable Cloud).
- Foto real del autor.
- Enlaces reales de afiliado (ahora quedan como `#`).
- Páginas de aviso legal / privacidad.
