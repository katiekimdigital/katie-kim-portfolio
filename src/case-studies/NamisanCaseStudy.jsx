import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════════════════════════════
 * NAMISAN MATCHA — Case Study (Magazine Editorial)
 * ═══════════════════════════════════════════════════════════════════
 * Methodology showcase: How Katie directed AI to build a real brand.
 * Typography: Fraunces (display serif) + Inter Tight (body sans) + JetBrains Mono
 * Palette: Warm cream, ink black, matcha green, terracotta accent
 */
const FONT = {
  serif: "'Fraunces', Georgia, serif",
  sans:  "'Inter Tight', sans-serif",
  mono:  "'JetBrains Mono', monospace",
};

const TYPE = {
  eyebrow:    { size: 11, weight: 500, family: FONT.mono,  tracking: "0.14em",  leading: 1.3 },
  hero:       { size: 88, weight: 300, family: FONT.serif, tracking: "-0.04em", leading: 0.95 },
  display:    { size: 56, weight: 300, family: FONT.serif, tracking: "-0.035em",leading: 1.0 },
  title:      { size: 36, weight: 400, family: FONT.serif, tracking: "-0.025em",leading: 1.1 },
  subtitle:   { size: 22, weight: 400, family: FONT.serif, tracking: "-0.015em",leading: 1.3 },
  pullQuote:  { size: 28, weight: 300, family: FONT.serif, tracking: "-0.02em", leading: 1.35 },
  lede:       { size: 20, weight: 400, family: FONT.sans,  tracking: "-0.005em",leading: 1.55 },
  body:       { size: 16, weight: 400, family: FONT.sans,  tracking: "0em",     leading: 1.7 },
  bodySm:     { size: 14, weight: 400, family: FONT.sans,  tracking: "0em",     leading: 1.6 },
  caption:    { size: 12, weight: 400, family: FONT.sans,  tracking: "0.01em",  leading: 1.4 },
  label:      { size: 11, weight: 600, family: FONT.mono,  tracking: "0.1em",   leading: 1.3 },
  meta:       { size: 11, weight: 400, family: FONT.mono,  tracking: "0.02em",  leading: 1.4 },
  stat:       { size: 64, weight: 300, family: FONT.serif, tracking: "-0.04em", leading: 1 },
  statLabel:  { size: 12, weight: 500, family: FONT.mono,  tracking: "0.06em",  leading: 1.3 },
};

const t = (tk) => ({
  fontSize: tk.size, fontWeight: tk.weight, fontFamily: tk.family,
  letterSpacing: tk.tracking, lineHeight: tk.leading,
});

const SP = { xxs: 2, xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48, xxxxl: 64, section: 96, hero: 120 };
const R = { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, pill: 100 };

const C = {
  cream:        "#F4EFE6",
  creamLight:   "#FAF6EE",
  creamDark:    "#EBE3D4",
  paper:        "#FBF8F1",
  ink:          "#1A1714",
  inkSoft:      "#3A332C",
  textSecondary:"#6B6157",
  textTertiary: "#9C9082",
  textMuted:    "#BCB1A0",
  border:       "#D9CFB8",
  borderSubtle: "#E5DCC7",
  matcha:       "#5A7A3A",
  matchaLight:  "#7A9550",
  matchaBg:     "rgba(90,122,58,0.08)",
  terracotta:   "#C46B3F",
  terracottaBg: "rgba(196,107,63,0.08)",
  gold:         "#B8893A",
};

/* ═══════════ DATA ═══════════ */

const META = {
  title: "Namisan Matcha",
  subtitle: "Building a ceremonial matcha brand by directing AI as a production team",
  client: "Self-initiated",
  role: "Founder, Creative Director, AI Strategist",
  year: "2024 — Present",
  duration: "8 months",
  tools: ["Claude", "Shopify", "Figma", "Vercel", "Custom AI workflows"],
};

const STATS = [
  { value: "8mo", label: "Build to launch" },
  { value: "1", label: "Team size (me + AI)" },
  { value: "4", label: "AI agents directed" },
  { value: "100%", label: "Brand consistency" },
];

const PROCESS_STAGES = [
  {
    num: "01",
    label: "Direction",
    title: "Defining the brand voice before any AI touched the work",
    body: "Before opening a single tool, I wrote a brand voice document and a visual moodboard. This wasn't optional — it was the foundation. Without strategic direction, AI produces fast slop. With it, AI becomes an extension of taste.",
    artifact: "Brand voice doc → 4 pages, 12 voice principles, 30 reference phrases",
  },
  {
    num: "02",
    label: "Briefing",
    title: "Translating intuition into instructions AI could act on",
    body: "Every AI task started with a structured brief: goal, constraints, voice anchors, format spec, success criteria. The quality of AI output is directly proportional to the quality of the brief. I spent more time on briefs than I did reviewing output.",
    artifact: "Brief template → reused across product copy, emails, social, web",
  },
  {
    num: "03",
    label: "Production",
    title: "AI executed. I directed the work.",
    body: "Copy drafts, product descriptions, calculator logic, landing page sections — AI produced first passes from briefs. My role was reviewer and editor, not writer. This is the shift: from doing the work to directing the work.",
    artifact: "Output: 60+ content pieces in the time it would normally take to write 10",
  },
  {
    num: "04",
    label: "Curation",
    title: "Every output passed through human judgment",
    body: "AI doesn't know when something feels off-brand. I do. I rejected, redirected, and refined every output against the brand voice document. The redirections trained the system — each iteration made the next brief sharper.",
    artifact: "Approval rate: ~40% first pass, ~85% by week six",
  },
];

const PRINCIPLES = [
  { num: "01", title: "Strategy before tools", body: "Brand foundations are non-negotiable. AI amplifies whatever you give it — including a weak strategy." },
  { num: "02", title: "Briefs are the product", body: "The quality of any AI output is determined by the quality of the brief that triggered it. Briefs deserve more time than reviews." },
  { num: "03", title: "Direct, don't generate", body: "I'm not a designer who uses AI. I'm a strategist who directs AI. The distinction is the difference between speed and craft." },
  { num: "04", title: "Human judgment is the moat", body: "AI can produce a thousand variations. Knowing which one is right — that's the human layer no model replaces." },
];

/* ═══════════ COMPONENTS ═══════════ */

const Eyebrow = ({ children, color = C.terracotta }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: SP.sm }}>
    <span style={{ width: 24, height: 1, background: color }} />
    <span style={{ ...t(TYPE.eyebrow), color, textTransform: "uppercase" }}>{children}</span>
  </div>
);

const Header = ({ on }) => (
  <header style={{
    padding: `${SP.xl}px ${SP.xxxl}px`,
    borderBottom: `1px solid ${C.borderSubtle}`,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    maxWidth: 1200, margin: "0 auto",
    opacity: 0, animation: on ? "nmFade 0.5s ease forwards" : "none",
  }}>
    <span style={{ ...t(TYPE.label), color: C.ink, textTransform: "uppercase" }}>Katie Kim — Case Study Vol.01</span>
    <span style={{ ...t(TYPE.meta), color: C.textTertiary }}>{META.year}</span>
  </header>
);

const Hero = ({ on }) => (
  <section style={{
    padding: `${SP.hero}px ${SP.xxxl}px ${SP.section}px`,
    maxWidth: 1200, margin: "0 auto", position: "relative",
  }}>
    {/* Decorative circle */}
    <div style={{
      position: "absolute", top: SP.xxxxl, right: SP.xxxl,
      width: 280, height: 280, borderRadius: "50%",
      background: `radial-gradient(circle at 35% 35%, ${C.matchaLight}30, ${C.matcha}15 40%, transparent 70%)`,
      filter: "blur(20px)", pointerEvents: "none",
    }} />

    <div style={{
      opacity: 0, animation: on ? "nmUp 0.7s ease forwards 0.1s" : "none",
      marginBottom: SP.xl,
    }}>
      <Eyebrow>Methodology Case Study</Eyebrow>
    </div>

    <h1 style={{
      ...t(TYPE.hero), color: C.ink, margin: `0 0 ${SP.xl}px 0`, maxWidth: 920,
      opacity: 0, animation: on ? "nmUp 0.8s ease forwards 0.25s" : "none",
    }}>
      Namisan{" "}
      <span style={{ fontStyle: "italic", color: C.matcha }}>Matcha.</span>
    </h1>

    <p style={{
      ...t(TYPE.lede), color: C.inkSoft, maxWidth: 620, margin: `0 0 ${SP.xxxxl}px 0`,
      opacity: 0, animation: on ? "nmUp 0.7s ease forwards 0.4s" : "none",
    }}>
      {META.subtitle}.
    </p>

    {/* Meta grid */}
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: SP.xl,
      paddingTop: SP.xl, borderTop: `1px solid ${C.borderSubtle}`,
      opacity: 0, animation: on ? "nmUp 0.7s ease forwards 0.55s" : "none",
    }}>
      {[
        { label: "Client", value: META.client },
        { label: "Role", value: META.role },
        { label: "Duration", value: META.duration },
        { label: "Stack", value: "Shopify · React · AI" },
      ].map((m) => (
        <div key={m.label}>
          <div style={{ ...t(TYPE.label), color: C.textTertiary, textTransform: "uppercase", marginBottom: SP.sm }}>
            {m.label}
          </div>
          <div style={{ ...t(TYPE.bodySm), color: C.ink }}>{m.value}</div>
        </div>
      ))}
    </div>
  </section>
);

const Lede = ({ on }) => (
  <section style={{
    padding: `${SP.section}px ${SP.xxxl}px`,
    maxWidth: 1200, margin: "0 auto",
    opacity: 0, animation: on ? "nmUp 0.6s ease forwards 0.1s" : "none",
  }}>
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 2fr", gap: SP.xxxxl, alignItems: "start",
    }}>
      <div>
        <Eyebrow>The Premise</Eyebrow>
      </div>
      <div>
        <p style={{ ...t(TYPE.title), color: C.ink, margin: `0 0 ${SP.xl}px 0` }}>
          Most freelancers ask: <span style={{ fontStyle: "italic", color: C.matcha }}>how do I use AI to work faster?</span>
        </p>
        <p style={{ ...t(TYPE.body), color: C.inkSoft, margin: `0 0 ${SP.lg}px 0`, maxWidth: 620 }}>
          I think it's the wrong question. The real question is: how do I direct AI 
          so the output reflects my taste, my strategy, and my standards — not the 
          generic average of the internet?
        </p>
        <p style={{ ...t(TYPE.body), color: C.inkSoft, margin: 0, maxWidth: 620 }}>
          Namisan Matcha was my testbed. A real ceremonial matcha brand, built solo, 
          where every piece of content, every line of code, every product description, 
          and every pricing decision was either created or shaped through AI direction. 
          Here's what I learned.
        </p>
      </div>
    </div>
  </section>
);

const StatsBand = ({ on }) => (
  <section style={{
    padding: `${SP.section}px ${SP.xxxl}px`,
    background: C.creamLight,
    borderTop: `1px solid ${C.borderSubtle}`,
    borderBottom: `1px solid ${C.borderSubtle}`,
  }}>
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: SP.xxxxl,
    }}>
      {STATS.map((stat, i) => (
        <div key={stat.label} style={{
          opacity: 0, animation: on ? `nmUp 0.5s ease forwards ${0.15 + i * 0.08}s` : "none",
        }}>
          <div style={{ ...t(TYPE.stat), color: C.ink, marginBottom: SP.sm }}>{stat.value}</div>
          <div style={{ ...t(TYPE.statLabel), color: C.textSecondary, textTransform: "uppercase" }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const PullQuote = ({ on }) => (
  <section style={{
    padding: `${SP.section}px ${SP.xxxl}px`,
    maxWidth: 1000, margin: "0 auto", textAlign: "center",
    opacity: 0, animation: on ? "nmUp 0.6s ease forwards 0.1s" : "none",
  }}>
    <div style={{ marginBottom: SP.xl, display: "flex", justifyContent: "center" }}>
      <span style={{ ...t(TYPE.title), color: C.terracotta, fontStyle: "italic" }}>"</span>
    </div>
    <p style={{ ...t(TYPE.pullQuote), color: C.ink, margin: `0 0 ${SP.xl}px 0`, fontStyle: "italic" }}>
      AI doesn't replace designers. It replaces the parts of design 
      that were never about design in the first place — the production, 
      the iteration, the formatting. What's left is the work that always 
      mattered: judgment, strategy, taste.
    </p>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: SP.md }}>
      <div style={{ width: 32, height: 1, background: C.border }} />
      <span style={{ ...t(TYPE.label), color: C.textTertiary, textTransform: "uppercase" }}>
        On directing AI
      </span>
      <div style={{ width: 32, height: 1, background: C.border }} />
    </div>
  </section>
);

const ProcessSection = ({ on }) => (
  <section style={{ padding: `${SP.section}px ${SP.xxxl}px`, maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ marginBottom: SP.xxxxl }}>
      <Eyebrow color={C.matcha}>The Process</Eyebrow>
      <h2 style={{ ...t(TYPE.display), color: C.ink, margin: `${SP.lg}px 0 0 0`, maxWidth: 720 }}>
        Four stages of <span style={{ fontStyle: "italic", color: C.matcha }}>directed AI</span>
      </h2>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: SP.xxxxl }}>
      {PROCESS_STAGES.map((stage, i) => (
        <div key={stage.num} style={{
          display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: SP.xxxl,
          paddingBottom: i < PROCESS_STAGES.length - 1 ? SP.xxxxl : 0,
          borderBottom: i < PROCESS_STAGES.length - 1 ? `1px solid ${C.borderSubtle}` : "none",
          opacity: 0, animation: on ? `nmUp 0.6s ease forwards ${0.15 + i * 0.1}s` : "none",
        }}>
          <div>
            <div style={{ ...t(TYPE.display), color: C.terracotta, fontStyle: "italic" }}>{stage.num}</div>
            <div style={{ ...t(TYPE.label), color: C.textTertiary, textTransform: "uppercase", marginTop: SP.sm }}>
              {stage.label}
            </div>
          </div>
          <div>
            <h3 style={{ ...t(TYPE.subtitle), color: C.ink, margin: 0, maxWidth: 380 }}>
              {stage.title}
            </h3>
          </div>
          <div>
            <p style={{ ...t(TYPE.body), color: C.inkSoft, margin: `0 0 ${SP.lg}px 0` }}>
              {stage.body}
            </p>
            <div style={{
              padding: `${SP.md}px ${SP.lg}px`,
              background: C.creamLight, border: `1px solid ${C.borderSubtle}`,
              borderLeft: `2px solid ${C.matcha}`, borderRadius: `0 ${R.sm}px ${R.sm}px 0`,
            }}>
              <div style={{ ...t(TYPE.label), color: C.matcha, textTransform: "uppercase", marginBottom: SP.xs }}>
                Artifact
              </div>
              <div style={{ ...t(TYPE.bodySm), color: C.inkSoft }}>{stage.artifact}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const PrinciplesSection = ({ on }) => (
  <section style={{
    padding: `${SP.section}px ${SP.xxxl}px`,
    background: C.ink, color: C.cream, position: "relative", overflow: "hidden",
  }}>
    <div style={{
      position: "absolute", top: 0, right: 0, width: 400, height: 400,
      background: `radial-gradient(circle, ${C.matcha}20, transparent 60%)`,
      filter: "blur(60px)", pointerEvents: "none",
    }} />
    <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
      <div style={{ marginBottom: SP.xxxxl }}>
        <Eyebrow color={C.gold}>Principles</Eyebrow>
        <h2 style={{ ...t(TYPE.display), color: C.cream, margin: `${SP.lg}px 0 0 0`, maxWidth: 720 }}>
          What I learned about <span style={{ fontStyle: "italic", color: C.gold }}>directing AI</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: SP.xxxl }}>
        {PRINCIPLES.map((p, i) => (
          <div key={p.num} style={{
            paddingTop: SP.xl, borderTop: `1px solid ${C.inkSoft}`,
            opacity: 0, animation: on ? `nmUp 0.5s ease forwards ${0.15 + i * 0.08}s` : "none",
          }}>
            <div style={{ ...t(TYPE.label), color: C.gold, textTransform: "uppercase", marginBottom: SP.md }}>
              {p.num}
            </div>
            <h3 style={{ ...t(TYPE.subtitle), color: C.cream, margin: `0 0 ${SP.md}px 0` }}>
              {p.title}
            </h3>
            <p style={{ ...t(TYPE.body), color: C.textMuted, margin: 0 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClosingSection = ({ on }) => (
  <section style={{
    padding: `${SP.section}px ${SP.xxxl}px`,
    maxWidth: 900, margin: "0 auto", textAlign: "center",
    opacity: 0, animation: on ? "nmUp 0.6s ease forwards 0.1s" : "none",
  }}>
    <Eyebrow>The Outcome</Eyebrow>
    <h2 style={{
      ...t(TYPE.display), color: C.ink, margin: `${SP.lg}px 0 ${SP.xl}px 0`, maxWidth: 760, marginLeft: "auto", marginRight: "auto",
    }}>
      A real brand, built by one person directing intelligence
    </h2>
    <p style={{ ...t(TYPE.body), color: C.inkSoft, margin: `0 auto ${SP.xxl}px`, maxWidth: 580 }}>
      Namisan Matcha is live. The website, the product copy, the brand voice, 
      the calculator app — every piece exists because I treated AI as a production 
      team and myself as the strategic director. This is the model I now bring to client work.
    </p>
    <div style={{ display: "flex", gap: SP.md, justifyContent: "center" }}>
      <a href="https://namisan.com.au" target="_blank" rel="noreferrer" style={{
        ...t(TYPE.bodySm), fontWeight: 600, color: C.paper, background: C.ink,
        textDecoration: "none", padding: `${SP.md + 2}px ${SP.xl}px`, borderRadius: R.sm,
        display: "inline-flex", alignItems: "center", gap: SP.sm,
      }}>
        Visit Namisan →
      </a>
      <a href="https://namisan-matcha-calculator-1pq0fw04p.vercel.app/" target="_blank" rel="noreferrer" style={{
        ...t(TYPE.bodySm), fontWeight: 600, color: C.ink, background: "transparent",
        border: `1px solid ${C.border}`, textDecoration: "none",
        padding: `${SP.md + 2}px ${SP.xl}px`, borderRadius: R.sm,
        display: "inline-flex", alignItems: "center", gap: SP.sm,
      }}>
        See the calculator →
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{
    padding: `${SP.xxxl}px ${SP.xxxl}px ${SP.xxl}px`,
    borderTop: `1px solid ${C.borderSubtle}`,
    maxWidth: 1200, margin: "0 auto",
    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: SP.lg,
  }}>
    <div>
      <div style={{ ...t(TYPE.label), color: C.ink, textTransform: "uppercase" }}>Katie Kim</div>
      <div style={{ ...t(TYPE.meta), color: C.textTertiary, marginTop: SP.xs }}>
        AI-Directed Design Strategist · Sydney, AU
      </div>
    </div>
    <div style={{ ...t(TYPE.meta), color: C.textTertiary }}>
      Case Study Vol.01 · Namisan Matcha · 2026
    </div>
  </footer>
);

/* ═══════════ MAIN ═══════════ */

export default function NamisanCaseStudy() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ minHeight: "100vh", background: C.cream, color: C.ink, fontFamily: TYPE.body.family }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        @keyframes nmUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes nmFade { from { opacity: 0; } to { opacity: 1; } }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
      `}</style>
      <Header on={on} />
      <Hero on={on} />
      <Lede on={on} />
      <StatsBand on={on} />
      <PullQuote on={on} />
      <ProcessSection on={on} />
      <PrinciplesSection on={on} />
      <ClosingSection on={on} />
      <Footer />
    </div>
  );
}
