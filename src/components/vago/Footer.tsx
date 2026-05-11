export function Footer() {
  return (
    <footer className="py-10 text-xs" style={{ borderTop: "1px solid var(--line)", color: "var(--ink-mute)" }}>
      <div className="max-w-5xl mx-auto px-7 flex justify-between items-center flex-wrap gap-5">
        <div>© El Vago Disciplinado · Hecho sin presión.</div>
        <div className="flex gap-5">
          {["#freebie:Freebie", "#recursos:Recursos", "#:Aviso legal"].map((s) => {
            const [href, label] = s.split(":");
            return (
              <a key={label} href={href} className="hover:text-black transition-colors" style={{ textDecoration: "none", color: "var(--ink-soft)" }}>
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
