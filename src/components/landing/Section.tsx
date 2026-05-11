import type { ReactNode } from "react";

export function Section({
  children,
  id,
  className = "",
  width = "narrow",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  width?: "narrow" | "wide";
}) {
  const max = width === "narrow" ? "max-w-2xl" : "max-w-3xl";
  return (
    <section
      id={id}
      className={`mx-auto w-full ${max} px-6 py-20 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-6">{children}</p>;
}
