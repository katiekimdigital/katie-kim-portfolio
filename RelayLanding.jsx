import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════════════════════════════
 * RELAY — Agentic Content Operations Platform (Landing Page v2)
 * ═══════════════════════════════════════════════════════════════════
 * Fictional product mirroring Katie Kim's methodology:
 *   AI agents handle execution → Human strategist directs decisions
 *
 * Typography: Outfit (geometric sans) + IBM Plex Mono (technical mono)
 * Palette: Deep charcoal base, warm amber/gold (human), muted violet (AI)
 *
 * Visual language:
 *   Amber/Gold = Human direction, strategic decisions, warmth
 *   Violet     = AI agents, execution, automation
 */
const FONT = {
  sans: "'Outfit', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

const TYPE = {
  hero:     { size: 56, weight: 600, family: FONT.sans, tracking: "-0.04em",  leading: 1.05 },
  display:  { size: 36, weight: 600, family: FONT.sans, tracking: "-0.03em",  leading: 1.12 },
  title:    { size: 24, weight: 600, family: FONT.sans, tracking: "-0.025em", leading: 1.25 },
  heading:  { size: 18, weight: 600, family: FONT.sans, tracking: "-0.015em", leading: 1.35 },
  headingSm:{ size: 15, weight: 600, family: FONT.sans, tracking: "-0.01em",  leading: 1.4 },
  bodyLg:   { size: 18, weight: 400, family: FONT.sans, tracking: "-0.005em", leading: 1.6 },
  body:     { size: 15, weight: 400, family: FONT.sans, tracking: "0em",      leading: 1.6 },
  bodySm:   { size: 13, weight: 400, family: FONT.sans, tracking: "0em",      leading: 1.55 },
  caption:  { size: 12, weight: 500, family: FONT.sans, tracking: "0.01em",   leading: 1.3 },
  overline: { size: 11, weight: 500, family: FONT.mono, tracking: "0.06em",   leading: 1.3 },
  codeSm:   { size: 11, weight: 400, family: FONT.mono, tracking: "0em",      leading: 1.4 },
  nav:      { size: 14, weight: 500, family: FONT.sans, tracking: "0em",      leading: 1 },
  stat:     { size: 32, weight: 600, family: FONT.sans, tracking: "-0.03em",  leading: 1 },
  price:    { size: 44, weight: 600, family: FONT.sans, tracking: "-0.04em",  leading: 1 },
  btn:      { size: 14, weight: 600, family: FONT.sans, tracking: "0em",      leading: 1 },
};

const s = (tk) => ({
  fontSize: tk.size, fontWeight: tk.weight, fontFamily: tk.family,
  letterSpacing: tk.tracking, lineHeight: tk.leading,
});

const SP = { xxs: 2, xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48, xxxxl: 64, section: 100 };
const R = { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, xxl: 20, pill: 100 };

const P = {
  bgDeep: "#0E0E11", bgDark: "#141418", bgCard: "#1A1A20", bgCardHover: "#1F1F27",
  bgSubtle: "#151519", white: "#FFFFFF",
  textPrimary: "#F2F0ED", textSecondary: "#A8A29E", textTertiary: "#6F6B66", textDisabled: "#4A4743",
  border: "#2A2925", borderSubtle: "#1F1E1B", borderHover: "#3A3835",
  amber: "#E5A93E", amberBg: "rgba(229,169,62,0.07)", amberGlow: "0 0 24px rgba(229,169,62,0.12)",
  violet: "#A78BFA", violetBg: "rgba(167,139,250,0.07)", violetGlow: "0 0 20px rgba(167,139,250,0.1)",
  green: "#6EE7A0", greenBg: "rgba(110,231,160,0.07)",
  rose: "#F0A0A0", roseBg: "rgba(240,160,160,0.07)",
};

const AGENTS = [
  { id: "research", name: "Research Agent", icon: "◈", desc: "Gathers market signals, competitor content, and trending topics relevant to your brief." },
  { id: "writer", name: "Writer Agent", icon: "✦", desc: "Drafts content in your brand voice from structured briefs. Adapts tone per channel." },
  { id: "design", name: "Design Agent", icon: "◐", desc: "Generates platform-native visual variants — carousel, story, post — from brand templates." },
  { id: "distribution", name: "Distribution Agent", icon: "◇", desc: "Schedules, publishes, and repurposes across channels at optimal engagement windows." },
];

/* ═══════════ NAV LINK ═══════════ */
const NAV_ITEMS = [
  { label: "Product", target: "features", soon: false },
  { label: "Pricing", target: "pricing", soon: false },
  { label: "Docs", target: null, soon: true },
  { label: "Changelog", target: null, soon: true },
];

const NavLink = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (!item.target) return;
    const el = document.getElementById(item.target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...s(TYPE.nav), color: hovered && !item.soon ? P.textPrimary : P.textTertiary,
        padding: `${SP.sm - 1}px ${SP.md}px`, borderRadius: R.sm,
        cursor: item.soon ? "default" : "pointer",
        transition: "color 0.2s ease",
        position: "relative",
      }}
    >
      {item.label}
      {item.soon && hovered && (
        <span style={{
          position: "absolute", top: "calc(100% + 8px)", left: "50%",
          transform: "translateX(-50%)",
          ...s(TYPE.codeSm), color: P.textSecondary,
          background: P.bgCard, border: `1px solid ${P.border}`,
          padding: `${SP.xs + 2}px ${SP.sm + 4}px`,
          borderRadius: R.sm, whiteSpace: "nowrap",
          boxShadow: P.shadow,
          animation: "rlFade 0.15s ease forwards",
        }}>
          Coming soon
        </span>
      )}
    </span>
  );
};

/* ═══════════ NAV ═══════════ */
const Nav = ({ on }) => (
  <nav style={{
    position: "sticky", top: 0, zIndex: 20,
    background: `${P.bgDeep}E8`, backdropFilter: "blur(16px)",
    borderBottom: `1px solid ${P.borderSubtle}`,
    padding: `${SP.md}px ${SP.xxxl}px`,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    maxWidth: 1200, margin: "0 auto", width: "100%",
    opacity: 0, animation: on ? "rlFade 0.5s ease forwards" : "none",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: SP.xxl }}>
      <div style={{ display: "flex", alignItems: "center", gap: SP.sm + 2 }}>
        <div style={{
          width: 28, height: 28, borderRadius: R.sm,
          background: `linear-gradient(135deg, ${P.amber}, ${P.violet})`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ ...s(TYPE.codeSm), fontWeight: 700, color: P.bgDeep }}>R</span>
        </div>
        <span style={{ ...s(TYPE.heading), color: P.textPrimary }}>Relay</span>
      </div>
      <div style={{ display: "flex", gap: SP.xs }}>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </div>
    </div>
    <div style={{ display: "flex", gap: SP.sm + 2, alignItems: "center" }}>
      <span
        onClick={() => { const el = document.getElementById("pricing"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }}
        style={{ ...s(TYPE.nav), color: P.textSecondary, cursor: "pointer" }}
      >Sign in</span>
      <button
        onClick={() => { const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }}
        style={{
          ...s(TYPE.btn), color: P.bgDeep, background: P.amber,
          border: "none", borderRadius: R.sm, padding: `${SP.sm + 2}px ${SP.lg + 4}px`,
          cursor: "pointer", boxShadow: P.amberGlow,
        }}
      >Get started</button>
    </div>
  </nav>
);

/* ═══════════ HERO ═══════════ */
const Hero = ({ on }) => (
  <section style={{
    padding: `${SP.section}px ${SP.xxxl}px ${SP.xxxxl + 16}px`,
    textAlign: "center", position: "relative", overflow: "hidden",
  }}>
    <div style={{
      position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)",
      width: 900, height: 500, pointerEvents: "none",
      background: `radial-gradient(ellipse at 40% 50%, rgba(229,169,62,0.06) 0%, transparent 55%),
        radial-gradient(ellipse at 60% 40%, rgba(167,139,250,0.05) 0%, transparent 50%)`,
      filter: "blur(50px)",
    }} />
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.2,
      backgroundImage: `linear-gradient(${P.border}50 1px, transparent 1px), linear-gradient(90deg, ${P.border}50 1px, transparent 1px)`,
      backgroundSize: "72px 72px",
      maskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
    }} />

    <div style={{ position: "relative", maxWidth: 740, margin: "0 auto" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: SP.sm,
        padding: `${SP.sm - 1}px ${SP.lg}px`,
        background: P.amberBg, border: `1px solid ${P.amber}20`,
        borderRadius: R.pill, marginBottom: SP.xxl,
        opacity: 0, animation: on ? "rlUp 0.6s ease forwards 0.1s" : "none",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: P.amber, boxShadow: `0 0 8px ${P.amber}` }} />
        <span style={{ ...s(TYPE.overline), color: P.amber, textTransform: "uppercase" }}>Now in public beta</span>
      </div>

      <h1 style={{
        ...s(TYPE.hero), color: P.textPrimary, margin: `0 0 ${SP.xl}px 0`,
        opacity: 0, animation: on ? "rlUp 0.7s ease forwards 0.2s" : "none",
      }}>
        Deploy AI agents.{" "}
        <span style={{
          background: `linear-gradient(135deg, ${P.amber}, ${P.violet})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>Direct the strategy.</span>
      </h1>

      <p style={{
        ...s(TYPE.bodyLg), color: P.textSecondary, margin: `0 auto ${SP.xxxl}px`, maxWidth: 540,
        opacity: 0, animation: on ? "rlUp 0.7s ease forwards 0.35s" : "none",
      }}>
        Relay gives you a team of specialised AI agents for content production. 
        They handle the execution — you make the decisions that shape your brand.
      </p>

      <div style={{
        display: "flex", gap: SP.md, justifyContent: "center", alignItems: "center",
        marginBottom: SP.xxxxl,
        opacity: 0, animation: on ? "rlUp 0.6s ease forwards 0.5s" : "none",
      }}>
        <button
          onClick={() => { const el = document.getElementById("pricing"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }}
          style={{
          ...s(TYPE.btn), color: P.bgDeep, background: P.amber,
          border: "none", borderRadius: R.md, padding: `${SP.md + 2}px ${SP.xxl}px`,
          cursor: "pointer", boxShadow: P.amberGlow,
        }}>Deploy your agents</button>
        <button
          onClick={() => { const el = document.getElementById("features"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }}
          style={{
          ...s(TYPE.btn), color: P.textSecondary, background: "transparent",
          border: `1px solid ${P.border}`, borderRadius: R.md,
          padding: `${SP.md + 2}px ${SP.xxl}px`, cursor: "pointer",
        }}>See how it works →</button>
      </div>

      {/* Agent constellation */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", gap: SP.xl,
        opacity: 0, animation: on ? "rlUp 0.6s ease forwards 0.65s" : "none",
      }}>
        {AGENTS.map((a, i) => (
          <div key={a.id} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: SP.sm,
            opacity: 0, animation: on ? `rlUp 0.5s ease forwards ${0.7 + i * 0.08}s` : "none",
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: R.lg,
              background: P.violetBg, border: `1px solid ${P.violet}20`,
              display: "flex", alignItems: "center", justifyContent: "center",
              ...s(TYPE.title), color: P.violet,
            }}>{a.icon}</div>
            <span style={{ ...s(TYPE.codeSm), color: P.textTertiary }}>{a.id}</span>
          </div>
        ))}
      </div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: SP.sm,
        marginTop: SP.xl, padding: `${SP.sm}px ${SP.lg}px`,
        background: P.amberBg, border: `1px solid ${P.amber}18`,
        borderRadius: R.pill,
        opacity: 0, animation: on ? "rlUp 0.5s ease forwards 1.0s" : "none",
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: P.amber, boxShadow: `0 0 6px ${P.amber}` }} />
        <span style={{ ...s(TYPE.codeSm), color: P.amber }}>You — Strategic Director</span>
      </div>
    </div>
  </section>
);

/* ═══════════ SOCIAL PROOF ═══════════ */
const SocialProof = ({ on }) => (
  <section style={{
    padding: `${SP.xxl}px ${SP.xxxl}px`,
    borderTop: `1px solid ${P.borderSubtle}`, borderBottom: `1px solid ${P.borderSubtle}`,
    opacity: 0, animation: on ? "rlUp 0.5s ease forwards 0.6s" : "none",
  }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <p style={{ ...s(TYPE.overline), color: P.textDisabled, textTransform: "uppercase", margin: `0 0 ${SP.xl}px 0` }}>
        Trusted by content teams at
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: SP.xxxxl, alignItems: "center", flexWrap: "wrap" }}>
        {["Neonlabs", "Arcform", "Vantage AI", "Clearpath", "Studioflow"].map((n) => (
          <span key={n} style={{ ...s(TYPE.heading), color: P.textDisabled, opacity: 0.45 }}>{n}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ FEATURE 1: AGENTS ═══════════ */
const Feature1 = ({ on }) => (
  <section style={{ padding: `${SP.section}px ${SP.xxxl}px` }}>
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <span style={{
        ...s(TYPE.overline), color: P.violet, textTransform: "uppercase",
        background: P.violetBg, padding: `${SP.xs}px ${SP.sm + 2}px`,
        borderRadius: R.xs, display: "inline-block", marginBottom: SP.xl,
      }}>Agents</span>
      <h2 style={{ ...s(TYPE.display), color: P.textPrimary, margin: `0 0 ${SP.lg}px 0` }}>
        Your agents, your rules
      </h2>
      <p style={{ ...s(TYPE.body), color: P.textSecondary, margin: `0 0 ${SP.xxxl}px 0`, maxWidth: 480 }}>
        Four specialised AI agents handle the execution layer of your content pipeline. 
        Each operates within guardrails you set — brand voice, tone, format, channel.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: SP.lg }}>
        {AGENTS.map((a, i) => (
          <div key={a.id} style={{
            background: P.bgCard, border: `1px solid ${P.border}`,
            borderRadius: R.xl, padding: SP.xl, position: "relative", overflow: "hidden",
            opacity: 0, animation: on ? `rlUp 0.5s ease forwards ${0.15 + i * 0.08}s` : "none",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, ${P.violet}60, transparent)`,
            }} />
            <div style={{
              width: 40, height: 40, borderRadius: R.md,
              background: P.violetBg, border: `1px solid ${P.violet}18`,
              display: "flex", alignItems: "center", justifyContent: "center",
              ...s(TYPE.title), color: P.violet, marginBottom: SP.lg,
            }}>{a.icon}</div>
            <div style={{ ...s(TYPE.headingSm), color: P.textPrimary, marginBottom: SP.sm }}>{a.name}</div>
            <p style={{ ...s(TYPE.bodySm), color: P.textTertiary, margin: 0 }}>{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ FEATURE 2: HUMAN DIRECTION ═══════════ */
const QUEUE = [
  { agent: "Writer Agent", output: "Draft: Q2 product launch blog post", status: "awaiting", label: "Awaiting review" },
  { agent: "Design Agent", output: "3 carousel variants for Instagram", status: "approved", label: "Approved" },
  { agent: "Research Agent", output: "Competitor content gap analysis", status: "redirected", label: "Redirected — refine scope" },
  { agent: "Distribution Agent", output: "Scheduled: LinkedIn, newsletter, X", status: "approved", label: "Approved" },
];

const Feature2 = ({ on }) => (
  <section style={{ padding: `${SP.section}px ${SP.xxxl}px` }}>
    <div style={{
      maxWidth: 960, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: SP.xxxxl, alignItems: "center",
    }}>
      <div>
        <span style={{
          ...s(TYPE.overline), color: P.amber, textTransform: "uppercase",
          background: P.amberBg, padding: `${SP.xs}px ${SP.sm + 2}px`,
          borderRadius: R.xs, display: "inline-block", marginBottom: SP.xl,
        }}>Direction</span>
        <h2 style={{ ...s(TYPE.display), color: P.textPrimary, margin: `0 0 ${SP.lg}px 0` }}>
          You direct. Agents deliver.
        </h2>
        <p style={{ ...s(TYPE.body), color: P.textSecondary, margin: `0 0 ${SP.xxl}px 0`, maxWidth: 400 }}>
          Every agent output passes through your strategic review. 
          Approve, redirect, or refine — the decisions that shape your brand always stay with you.
        </p>
        <div style={{ display: "flex", gap: SP.xxl }}>
          {[
            { val: "100%", lbl: "Human oversight", c: P.amber },
            { val: "4×", lbl: "Faster than manual", c: P.violet },
          ].map((m) => (
            <div key={m.lbl}>
              <div style={{ ...s(TYPE.stat), color: m.c, marginBottom: SP.xs }}>{m.val}</div>
              <div style={{ ...s(TYPE.codeSm), color: P.textTertiary }}>{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: P.bgCard, border: `1px solid ${P.border}`,
        borderRadius: R.xl, padding: SP.xxl, overflow: "hidden",
      }}>
        <div style={{ ...s(TYPE.overline), color: P.textTertiary, textTransform: "uppercase", marginBottom: SP.xl }}>
          Director Review Queue
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: SP.sm + 2 }}>
          {QUEUE.map((q, i) => {
            const cm = { awaiting: { bg: P.amberBg, c: P.amber, b: `${P.amber}25` }, approved: { bg: P.greenBg, c: P.green, b: `${P.green}25` }, redirected: { bg: P.roseBg, c: P.rose, b: `${P.rose}25` } };
            const cc = cm[q.status];
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: `${SP.md}px ${SP.lg}px`,
                background: P.bgSubtle, border: `1px solid ${P.borderSubtle}`, borderRadius: R.md,
                opacity: 0, animation: on ? `rlUp 0.4s ease forwards ${0.3 + i * 0.1}s` : "none",
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ ...s(TYPE.codeSm), color: P.violet, marginBottom: SP.xxs }}>{q.agent}</div>
                  <div style={{ ...s(TYPE.bodySm), color: P.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{q.output}</div>
                </div>
                <span style={{
                  ...s(TYPE.codeSm), color: cc.c, background: cc.bg,
                  padding: `${SP.xs}px ${SP.sm + 2}px`, borderRadius: R.xs,
                  border: `1px solid ${cc.b}`, whiteSpace: "nowrap", marginLeft: SP.md,
                }}>{q.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════ FEATURE 3: PIPELINE ═══════════ */
const PIPE = [
  { label: "Brief", type: "human", note: "You define the goal" },
  { label: "Research", type: "agent", note: "Agent gathers context" },
  { label: "Draft", type: "agent", note: "Agent writes first draft" },
  { label: "Review", type: "human", note: "You approve or redirect" },
  { label: "Design", type: "agent", note: "Agent creates variants" },
  { label: "Publish", type: "agent", note: "Agent distributes" },
  { label: "Analyse", type: "human", note: "You assess performance" },
];

const Feature3 = ({ on }) => (
  <section style={{ padding: `${SP.section}px ${SP.xxxl}px` }}>
    <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
      <span style={{
        ...s(TYPE.overline), color: P.amber, textTransform: "uppercase",
        background: P.amberBg, padding: `${SP.xs}px ${SP.sm + 2}px`,
        borderRadius: R.xs, display: "inline-block", marginBottom: SP.xl,
      }}>Pipeline</span>
      <h2 style={{ ...s(TYPE.display), color: P.textPrimary, margin: `0 0 ${SP.lg}px 0` }}>
        Brief to published, one cycle
      </h2>
      <p style={{ ...s(TYPE.body), color: P.textSecondary, margin: `0 auto ${SP.xxxl}px`, maxWidth: 500 }}>
        Agents handle each execution step. You step in at the moments that matter — 
        setting direction and approving output.
      </p>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: SP.sm }}>
        {PIPE.map((step, i) => {
          const h = step.type === "human";
          return (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              width: 108, opacity: 0,
              animation: on ? `rlUp 0.4s ease forwards ${0.2 + i * 0.08}s` : "none",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: h ? R.lg : "50%",
                background: h ? P.amberBg : P.violetBg,
                border: `1.5px solid ${h ? `${P.amber}30` : `${P.violet}25`}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: SP.sm + 2,
                boxShadow: h ? P.amberGlow : "none",
              }}>
                <span style={{ ...s(TYPE.codeSm), fontWeight: 600, color: h ? P.amber : P.violet }}>
                  {h ? "You" : "AI"}
                </span>
              </div>
              <div style={{ ...s(TYPE.caption), color: P.textPrimary, marginBottom: SP.xs }}>{step.label}</div>
              <div style={{ ...s(TYPE.codeSm), color: P.textTertiary }}>{step.note}</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: SP.xxl, marginTop: SP.xxxl }}>
        {[
          { label: "Human decision point", bg: P.amberBg, b: `${P.amber}30`, r: R.xs },
          { label: "AI agent execution", bg: P.violetBg, b: `${P.violet}25`, r: "50%" },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: SP.sm }}>
            <div style={{ width: 10, height: 10, borderRadius: l.r, background: l.bg, border: `1px solid ${l.b}` }} />
            <span style={{ ...s(TYPE.codeSm), color: P.textTertiary }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ PRICING ═══════════ */
const PLANS = [
  { name: "Solo Director", price: "0", period: "forever free", desc: "For solo creators directing their first AI content team.", features: ["4 AI agents", "50 agent tasks/mo", "3 channels", "Basic review queue"], accent: false },
  { name: "Growth Team", price: "79", period: "/month", desc: "For growing brands that need full agentic content operations.", features: ["4 AI agents (unlimited)", "All channels + repurposing", "Brand voice training", "Advanced approval flows", "Performance analytics", "Priority support"], accent: true },
];

const Pricing = ({ on }) => (
  <section style={{ padding: `${SP.section}px ${SP.xxxl}px`, textAlign: "center" }}>
    <div style={{ maxWidth: 740, margin: "0 auto" }}>
      <span style={{
        ...s(TYPE.overline), color: P.amber, textTransform: "uppercase",
        background: P.amberBg, padding: `${SP.xs}px ${SP.sm + 2}px`,
        borderRadius: R.xs, display: "inline-block", marginBottom: SP.xl,
      }}>Pricing</span>
      <h2 style={{ ...s(TYPE.display), color: P.textPrimary, margin: `0 0 ${SP.lg}px 0` }}>Start directing, free</h2>
      <p style={{ ...s(TYPE.body), color: P.textSecondary, margin: `0 auto ${SP.xxxxl}px`, maxWidth: 420 }}>
        Deploy your agent team today. Scale when your content operation demands it.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SP.xl }}>
        {PLANS.map((p, i) => (
          <div key={p.name} style={{
            background: p.accent ? P.bgCard : P.bgSubtle,
            border: `1px solid ${p.accent ? `${P.amber}25` : P.border}`,
            borderRadius: R.xl, padding: SP.xxl + 8, textAlign: "left",
            position: "relative", overflow: "hidden",
            boxShadow: p.accent ? P.amberGlow : "none",
            opacity: 0, animation: on ? `rlUp 0.5s ease forwards ${0.15 + i * 0.1}s` : "none",
          }}>
            {p.accent && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${P.amber}, ${P.violet})` }} />}
            <div style={{ ...s(TYPE.headingSm), color: P.textPrimary, marginBottom: SP.sm }}>{p.name}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: SP.sm, marginBottom: SP.sm }}>
              <span style={{ ...s(TYPE.price), color: P.textPrimary }}>${p.price}</span>
              <span style={{ ...s(TYPE.codeSm), color: P.textTertiary }}>{p.period}</span>
            </div>
            <p style={{ ...s(TYPE.bodySm), color: P.textSecondary, margin: `0 0 ${SP.xl}px 0` }}>{p.desc}</p>
            <button style={{
              ...s(TYPE.btn), width: "100%",
              color: p.accent ? P.bgDeep : P.textSecondary,
              background: p.accent ? P.amber : "transparent",
              border: p.accent ? "none" : `1px solid ${P.border}`,
              borderRadius: R.md, padding: `${SP.md + 2}px 0`, cursor: "pointer",
              marginBottom: SP.xl, boxShadow: p.accent ? P.amberGlow : "none",
            }}>{p.accent ? "Start free trial" : "Deploy free"}</button>
            <div style={{ display: "flex", flexDirection: "column", gap: SP.sm + 4 }}>
              {p.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: SP.sm + 2 }}>
                  <span style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: p.accent ? P.amberBg : P.bgCard,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...s(TYPE.codeSm), color: p.accent ? P.amber : P.textTertiary, fontSize: TYPE.codeSm.size - 2,
                  }}>✓</span>
                  <span style={{ ...s(TYPE.bodySm), color: P.textSecondary }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: SP.xl, padding: `${SP.lg}px ${SP.xxl}px`,
        background: P.bgSubtle, border: `1px solid ${P.borderSubtle}`,
        borderRadius: R.lg, display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ textAlign: "left" }}>
          <div style={{ ...s(TYPE.headingSm), color: P.textPrimary }}>Enterprise</div>
          <div style={{ ...s(TYPE.bodySm), color: P.textTertiary }}>Custom agent configs, SSO, dedicated support, SLA</div>
        </div>
        <button style={{
          ...s(TYPE.btn), color: P.textSecondary, background: "transparent",
          border: `1px solid ${P.border}`, borderRadius: R.md,
          padding: `${SP.sm + 2}px ${SP.xl}px`, cursor: "pointer",
        }}>Contact sales</button>
      </div>
    </div>
  </section>
);

/* ═══════════ CTA ═══════════ */
const CtaBlock = () => (
  <section style={{ padding: `${SP.section}px ${SP.xxxl}px`, textAlign: "center", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse at 50% 100%, rgba(229,169,62,0.05) 0%, transparent 55%)` }} />
    <div style={{ position: "relative", maxWidth: 540, margin: "0 auto" }}>
      <h2 style={{ ...s(TYPE.display), color: P.textPrimary, margin: `0 0 ${SP.lg}px 0` }}>
        Ready to direct your{" "}
        <span style={{ background: `linear-gradient(135deg, ${P.amber}, ${P.violet})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>content team</span>?
      </h2>
      <p style={{ ...s(TYPE.body), color: P.textSecondary, margin: `0 0 ${SP.xxl}px 0` }}>
        Join 2,400+ content directors already using Relay. Free plan available — deploy your first agents in minutes.
      </p>
      <div style={{ display: "flex", gap: SP.md, justifyContent: "center" }}>
        <button style={{ ...s(TYPE.btn), color: P.bgDeep, background: P.amber, border: "none", borderRadius: R.md, padding: `${SP.md + 2}px ${SP.xxl}px`, cursor: "pointer", boxShadow: P.amberGlow }}>Deploy your agents</button>
        <button style={{ ...s(TYPE.btn), color: P.textSecondary, background: "transparent", border: `1px solid ${P.border}`, borderRadius: R.md, padding: `${SP.md + 2}px ${SP.xxl}px`, cursor: "pointer" }}>Talk to sales</button>
      </div>
    </div>
  </section>
);

/* ═══════════ FOOTER ═══════════ */
const Footer = () => (
  <footer style={{
    padding: `${SP.xxxl}px ${SP.xxxl}px ${SP.xxl}px`,
    borderTop: `1px solid ${P.borderSubtle}`, maxWidth: 960, margin: "0 auto",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  }}>
    <div>
      <span style={{ ...s(TYPE.headingSm), color: P.textTertiary }}>Relay</span>
      <span style={{ ...s(TYPE.codeSm), color: P.textDisabled, marginLeft: SP.sm + 2 }}>Fictional product — Landing page concept by Katie Kim</span>
    </div>
    <span style={{ ...s(TYPE.codeSm), color: P.textDisabled }}>Portfolio prototype · 2026</span>
  </footer>
);

/* ═══════════ MAIN ═══════════ */
export default function RelayLanding() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ minHeight: "100vh", background: P.bgDeep, color: P.textPrimary, fontFamily: TYPE.body.family }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        @keyframes rlUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rlFade { from { opacity: 0; } to { opacity: 1; } }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${P.border}; border-radius: 3px; }
      `}</style>
      <Nav on={on} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Hero on={on} />
        <SocialProof on={on} />
        <div id="features"><Feature1 on={on} /></div>
        <Feature2 on={on} />
        <Feature3 on={on} />
        <div id="pricing"><Pricing on={on} /></div>
        <CtaBlock />
        <Footer />
      </div>
    </div>
  );
}
