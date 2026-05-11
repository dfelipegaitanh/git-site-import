import { createFileRoute } from "@tanstack/react-router";
import { VagoStyles } from "@/components/vago/VagoUI";
import { Nav } from "@/components/vago/Nav";
import { Hero } from "@/components/vago/Hero";
import { Pain } from "@/components/vago/Pain";
import { Freebie } from "@/components/vago/Freebie";
import { Sistema } from "@/components/vago/Sistema";
import { About } from "@/components/vago/About";
import { Recursos } from "@/components/vago/Recursos";
import { Testimonios } from "@/components/vago/Testimonios";
import { Manifesto } from "@/components/vago/Manifesto";
import { Footer } from "@/components/vago/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Vago Disciplinado — Empieza sin abrumarte" },
      {
        name: "description",
        content: "Para mentes brillantes que se atascan. Descarga gratis el Reset de 10 minutos y vuelve a moverte sin fuerza de voluntad.",
      },
      { property: "og:title", content: "El Vago Disciplinado — Empieza sin abrumarte" },
      {
        property: "og:description",
        content: "Sistema simple para mentes que se atascan. Descarga gratis el Reset de 10 minutos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VagoDisciplinadoPage,
});

function VagoDisciplinadoPage() {
  return (
    <>
      <VagoStyles />
      <div className="min-h-screen bg-[#f6f1e9] text-[#2e2a26]">
        <Nav />
        <main>
          <Hero />
          <Pain />
          <Freebie />
          <Sistema />
          <About />
          <Recursos />
          <Testimonios />
          <Manifesto />
        </main>
        <Footer />
      </div>
    </>
  );
}
