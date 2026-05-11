import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Download, Loader2 } from "lucide-react";

const emailSchema = z
  .string()
  .trim()
  .min(5, "Escribe un email válido")
  .max(255, "Email demasiado largo")
  .email("Escribe un email válido");

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Email inválido");
      return;
    }

    setStatus("loading");
    const { error } = await supabase
      .from("subscribers")
      .insert({ email: parsed.data, source: "reset-10min" });

    if (error && error.code !== "23505") {
      // 23505 = unique_violation (ya estaba suscrito) — lo tratamos como éxito
      setStatus("idle");
      toast.error("Algo falló. Intenta de nuevo en un momento.");
      return;
    }

    setStatus("success");
    toast.success("¡Listo! Aquí tienes la guía.");
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-foreground/15 bg-paper-2 p-6 text-center">
        <p className="font-serif text-2xl text-foreground">
          Te llega en 1 minuto.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Mientras tanto, descárgala directo aquí.
        </p>
        <a
          href="/el-reset-de-10-minutos.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Descargar la guía ahora
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Tu email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border border-foreground/20 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            "Quiero el Reset gratis"
          )}
        </button>
      </div>
      <p className="text-xs text-muted-foreground">
        PDF de 4 páginas. Llega en 1 minuto. Sin spam.
      </p>
    </form>
  );
}
