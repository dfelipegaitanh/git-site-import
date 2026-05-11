import React from "react";

export const VagoStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

    :root {
      --bg:         #f6f1e9;
      --bg-2:       #efe7da;
      --paper:      #fbf7f0;
      --ink:        #2e2a26;
      --ink-soft:   #5a5249;
      --ink-mute:   #8a8275;
      --line:       #e3d9c8;
      --sage:       #b9cdb3;
      --sage-deep:  #6f8a6a;
      --blush:      #e9c7c2;
      --blush-deep: #b87a72;
      --sand:       #e8d6b3;
      --sand-deep:  #a88a4a;
      --sky:        #c6d4df;
      --sky-deep:   #6c8aa1;
    }

    * { box-sizing: border-box; }
    
    .logo-mark {
      width: 28px; height: 28px; border-radius: 50%;
      background: var(--sage); display: inline-block; position: relative; flex-shrink: 0;
    }
    .logo-mark::after {
      content: ""; position: absolute; inset: 6px;
      border-radius: 50%; background: var(--bg);
    }
    .logo-mark::before {
      content: ""; position: absolute; left: 13px; top: 6px;
      width: 2px; height: 16px; background: var(--sage-deep);
      transform-origin: bottom center; transform: rotate(28deg);
    }

    .hero-card-decor::before {
      content: ""; position: absolute; inset: -12px -12px auto auto;
      width: 84px; height: 84px; border-radius: 50%;
      background: var(--blush); z-index: -1;
    }
    .hero-card-decor::after {
      content: ""; position: absolute; inset: auto auto -16px -16px;
      width: 120px; height: 120px; border-radius: 50%;
      background: var(--sage); z-index: -1; opacity: .7;
    }

    .photo-frame::before {
      content: ""; position: absolute; inset: auto -18px -18px auto;
      width: 120px; height: 120px; border-radius: 50%;
      background: var(--sage); z-index: -1;
    }
    .photo-frame::after {
      content: ""; position: absolute; inset: -18px auto auto -18px;
      width: 80px; height: 80px; border-radius: 50%;
      background: var(--blush); z-index: -1;
    }

    .strike-through { position: relative; display: inline-block; color: var(--ink-mute); }
    .strike-through::after {
      content: ""; position: absolute; left: -2px; right: -2px; top: 55%;
      height: 3px; background: var(--blush-deep); border-radius: 2px; transform: rotate(-2deg);
    }

    .freebie-visual:hover .freebie-doc { transform: rotate(-1deg) translateY(-4px); }
    .freebie-doc { transform: rotate(-3deg); transition: transform .4s ease; }

    .rec-cta:hover .arrow { transform: translateX(4px); }
    .arrow { transition: transform .15s ease; display: inline-block; }

    .testi-feature { grid-column: span 2; }
    @media (max-width: 880px) { .testi-feature { grid-column: span 1; } }
  `}</style>
);

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="uppercase tracking-widest text-xs mb-3" style={{ color: "var(--ink-mute)" }}>
      {children}
    </div>
  );
}

export function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-semibold leading-tight tracking-tight mb-5 ${className}`}
      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-0.03em", color: "var(--ink)" }}
    >
      {children}
    </h2>
  );
}

export function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: "normal", color: "var(--sage-deep)", fontWeight: 600 }}>{children}</em>;
}
