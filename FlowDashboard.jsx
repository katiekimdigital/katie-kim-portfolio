import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════
 * DESIGN TOKENS — Flow Workflow Blueprint
 * ═══════════════════════════════════════════
 * Every visual value traces back to these tokens.
 * Two font families, minimal hierarchy:
 *   Hanken Grotesk  → Display, headings, body (neo-grotesque, Swiss-influenced)
 *   JetBrains Mono  → Labels, data, badges, overlines (sharp, technical)
 */
const FONT = {
  sans: "'Hanken Grotesk', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const TYPE = {
  display:  { size: 48, weight: 300, family: FONT.sans, tracking: "-0.035em", leading: 1.05 },
  heading:  { size: 14, weight: 500, family: FONT.sans, tracking: "-0.01em",  leading: 1.35 },
  bodyLg:   { size: 16, weight: 400, family: FONT.sans, tracking: "-0.005em", leading: 1.5 },
  body:     { size: 13, weight: 400, family: FONT.sans, tracking: "0em",      leading: 1.55 },
  bodySm:   { size: 12, weight: 400, family: FONT.sans, tracking: "0em",      leading: 1.5 },
  stat:     { size: 20, weight: 600, family: FONT.mono, tracking: "-0.02em",  leading: 1 },
  caption:  { size: 11, weight: 500, family: FONT.mono, tracking: "0.06em",   leading: 1.3 },
  overline: { size: 10, weight: 500, family: FONT.mono, tracking: "0.08em",   leading: 1.3 },
  micro:    { size: 9,  weight: 500, family: FONT.mono, tracking: "0.06em",   leading: 1.3 },
  mono:     { size: 10, weight: 400, family: FONT.mono, tracking: "0.01em",   leading: 1.3 },
  monoMd:   { size: 12, weight: 400, family: FONT.mono, tracking: "0.01em",   leading: 1.3 },
  footer:   { size: 15, weight: 300, family: FONT.sans, tracking: "-0.01em",  leading: 1.3 },
};

/* Helper: apply a TYPE token to a style object */
const t = (token) => ({
  fontSize: token.size,
  fontWeight: token.weight,
  fontFamily: token.family,
  letterSpacing: token.tracking,
  lineHeight: token.leading,
});

const SPACE = { xs: 4, sm: 8, md: 14, lg: 20, xl: 28, xxl: 40, xxxl: 48 };
const RADIUS = { sm: 4, md: 8, lg: 10, pill: 40 };

const STAGES = [
  {
    id: "ideation",
    label: "Ideation",
    icon: "◇",
    before: {
      title: "Scattered thinking",
      desc: "Ideas live across sticky notes, voice memos, screenshots, 4 different apps. No system to capture or evaluate them.",
      time: "3–4 hrs/week lost",
      pain: "You forget the good ideas. The bad ones keep resurfacing.",
      tools: ["Notes app", "Voice memos", "Screenshots", "Random docs"],
    },
    after: {
      title: "AI-assisted idea capture",
      desc: "Single intake form feeds an AI layer that categorises ideas by content pillar, scores timeliness, and suggests angles based on past performance.",
      time: "20 min/week",
      saved: "~3 hrs saved",
      aiRole: "Auto-categorises by pillar, suggests hooks, flags seasonal relevance",
      tools: ["Notion intake", "AI classifier"],
    },
  },
  {
    id: "drafting",
    label: "Drafting",
    icon: "✎",
    before: {
      title: "Blank page paralysis",
      desc: "Staring at an empty doc. Writing, deleting, rewriting. No brief, no structure, no voice guidelines to work from.",
      time: "5–6 hrs/week",
      pain: "Every post feels like starting from zero.",
      tools: ["Google Docs", "Willpower", "Coffee"],
    },
    after: {
      title: "Brief-to-draft in minutes",
      desc: "AI generates a structured first draft from your idea brief + brand voice guide. You edit and refine — not create from scratch.",
      time: "1.5 hrs/week",
      saved: "~4 hrs saved",
      aiRole: "Generates draft from brief + brand voice doc. Maintains tone consistency across all content.",
      tools: ["AI draft engine", "Brand voice config"],
    },
  },
  {
    id: "design",
    label: "Visual Design",
    icon: "□",
    before: {
      title: "Template hunting",
      desc: "Scrolling through Canva templates that don't match your brand. Manually resizing for each platform. Colours slightly off every time.",
      time: "3–4 hrs/week",
      pain: "Your feed looks inconsistent. You know it, your audience knows it.",
      tools: ["Canva (free)", "Manual resizing", "Colour guessing"],
    },
    after: {
      title: "Brand-locked design system",
      desc: "Pre-built templates with locked brand tokens. AI suggests layout based on content type. One click to generate platform-specific variants.",
      time: "45 min/week",
      saved: "~3 hrs saved",
      aiRole: "Selects template by content type, auto-generates platform variants (Story, Reel, Carousel, Post)",
      tools: ["Design system", "AI variant generator"],
    },
  },
  {
    id: "scheduling",
    label: "Schedule & Publish",
    icon: "▷",
    before: {
      title: "Manual posting chaos",
      desc: "Logging into 3 platforms separately. Forgetting optimal times. Posting whenever you remember — usually at the worst times.",
      time: "2–3 hrs/week",
      pain: "Inconsistent posting schedule tanks your reach.",
      tools: ["Instagram app", "LinkedIn app", "Twitter/X", "Alarm reminders"],
    },
    after: {
      title: "Automated queue with AI timing",
      desc: "Content queued weekly. AI analyses your audience's active hours and auto-schedules for peak engagement windows per platform.",
      time: "30 min/week",
      saved: "~2 hrs saved",
      aiRole: "Optimises publish times per platform based on historical engagement data",
      tools: ["Scheduling hub", "AI timing engine"],
    },
  },
  {
    id: "repurpose",
    label: "Repurpose",
    icon: "↻",
    before: {
      title: "One and done",
      desc: "Every piece of content gets posted once and dies. You know you should repurpose but never have time to rework it.",
      time: "0 hrs (it doesn't happen)",
      pain: "You're creating 5x the content you need to because nothing gets a second life.",
      tools: ["N/A — this step doesn't exist yet"],
    },
    after: {
      title: "Automatic content multiplication",
      desc: "AI takes each published piece and generates derivative formats: a blog post becomes a carousel, a thread, a newsletter snippet, and a short-form video script.",
      time: "30 min/week (review only)",
      saved: "~5 hrs of net-new content value",
      aiRole: "Transforms one content piece into 4–5 derivative formats, adapted for each platform's native style",
      tools: ["AI repurpose engine", "Format templates"],
    },
  },
];

const COLORS = {
  bg: "#F5F0EB",
  bgDark: "#EDE7E0",
  surface: "#FDFBF9",
  surfaceDark: "#F0EAE3",
  text: "#2C2825",
  textMuted: "#8A8178",
  textLight: "#B5ADA5",
  border: "#E2DCD5",
  borderLight: "#EDE8E2",
  terracotta: "#C4704B",
  terracottaLight: "#E8A080",
  terracottaBg: "rgba(196,112,75,0.06)",
  sage: "#7A9A82",
  sageBg: "rgba(122,154,130,0.08)",
  sageLight: "#A4C4AC",
  rose: "#C47070",
  roseLight: "#D4948A",
  roseBg: "rgba(196,112,112,0.06)",
  cream: "#FAF7F4",
  ai: "#9B8ADE",
  aiLight: "#B8AAEF",
  aiText: "#6B5FA0",
  aiBg: "rgba(155,138,222,0.07)",
  aiBorder: "rgba(155,138,222,0.18)",
};

const BeforeCard = ({ stage, isActive, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: `${SPACE.lg - 2}px ${SPACE.lg}px`,
        background: isActive ? COLORS.roseBg : "transparent",
        border: `1px solid ${isActive ? COLORS.rose + "30" : COLORS.borderLight}`,
        borderRadius: RADIUS.lg,
        cursor: "pointer",
        transition: "all 0.4s ease",
        opacity: 0,
        animation: `warmFadeIn 0.5s ease forwards ${0.1 + index * 0.06}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isActive && (
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(196,112,112,0.02) 8px, rgba(196,112,112,0.02) 9px)`,
          }}
        />
      )}
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: SPACE.sm }}>
          <div style={{ display: "flex", alignItems: "center", gap: SPACE.sm + 2 }}>
            <span style={{ fontSize: TYPE.heading.size + 2, color: COLORS.rose, opacity: 0.7 }}>{stage.icon}</span>
            <h4 style={{ margin: 0, ...t(TYPE.heading), color: COLORS.text }}>
              {stage.before.title}
            </h4>
          </div>
          <span style={{
            ...t(TYPE.overline), color: COLORS.rose,
            background: COLORS.roseBg,
            padding: `3px ${SPACE.sm}px`,
            borderRadius: RADIUS.sm,
            whiteSpace: "nowrap",
          }}>
            {stage.before.time}
          </span>
        </div>
        <p style={{ margin: `0 0 ${SPACE.sm + 2}px 0`, ...t(TYPE.body), color: COLORS.textMuted }}>
          {stage.before.desc}
        </p>
        {isActive && (
          <div style={{ animation: "warmFadeIn 0.3s ease forwards" }}>
            <div style={{
              padding: `${SPACE.sm + 2}px ${SPACE.md}px`,
              background: "rgba(196,112,112,0.04)",
              borderLeft: `2px solid ${COLORS.rose}40`,
              borderRadius: `0 ${RADIUS.md}px ${RADIUS.md}px 0`,
              marginBottom: SPACE.sm + 2,
            }}>
              <span style={{
                ...t(TYPE.overline), textTransform: "uppercase",
                color: COLORS.rose, display: "block", marginBottom: SPACE.xs,
              }}>Pain point</span>
              <p style={{
                margin: 0, ...t(TYPE.bodySm), color: COLORS.textMuted, fontStyle: "italic",
              }}>
                {stage.before.pain}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: SPACE.xs }}>
              {stage.before.tools.map((tool) => (
                <span key={tool} style={{
                  ...t(TYPE.mono), padding: `3px ${SPACE.sm}px`,
                  background: COLORS.surfaceDark, borderRadius: RADIUS.sm,
                  color: COLORS.textLight,
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AfterCard = ({ stage, isActive, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: `${SPACE.lg - 2}px ${SPACE.lg}px`,
        background: isActive ? COLORS.sageBg : "transparent",
        border: `1px solid ${isActive ? COLORS.sage + "30" : COLORS.borderLight}`,
        borderRadius: RADIUS.lg,
        cursor: "pointer",
        transition: "all 0.4s ease",
        opacity: 0,
        animation: `warmFadeIn 0.5s ease forwards ${0.15 + index * 0.06}s`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: SPACE.sm }}>
        <div style={{ display: "flex", alignItems: "center", gap: SPACE.sm + 2 }}>
          <span style={{ fontSize: TYPE.heading.size + 2, color: COLORS.sage }}>{stage.icon}</span>
          <h4 style={{ margin: 0, ...t(TYPE.heading), color: COLORS.text }}>
            {stage.after.title}
          </h4>
        </div>
        <div style={{ display: "flex", gap: SPACE.sm - 2, alignItems: "center" }}>
          <span style={{
            ...t(TYPE.overline), color: COLORS.sage,
            background: COLORS.sageBg,
            padding: `3px ${SPACE.sm}px`,
            borderRadius: RADIUS.sm,
            whiteSpace: "nowrap",
          }}>
            {stage.after.time}
          </span>
          <span style={{ ...t(TYPE.overline), fontWeight: 600, color: COLORS.terracotta }}>
            {stage.after.saved}
          </span>
        </div>
      </div>
      <p style={{ margin: `0 0 ${SPACE.sm + 2}px 0`, ...t(TYPE.body), color: COLORS.textMuted }}>
        {stage.after.desc}
      </p>
      {isActive && (
        <div style={{ animation: "warmFadeIn 0.3s ease forwards" }}>
          <div style={{
            padding: `${SPACE.sm + 2}px ${SPACE.md}px`,
            background: COLORS.aiBg,
            border: `1px solid ${COLORS.aiBorder}`,
            borderRadius: RADIUS.md,
            marginBottom: SPACE.sm + 2,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: SPACE.sm - 2, marginBottom: SPACE.xs + 1 }}>
              <div style={{
                width: 16, height: 16, borderRadius: RADIUS.sm,
                background: `linear-gradient(135deg, ${COLORS.ai}, ${COLORS.aiLight})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: TYPE.micro.size - 1, color: "white", fontWeight: 700,
              }}>AI</div>
              <span style={{ ...t(TYPE.overline), textTransform: "uppercase", color: COLORS.ai }}>
                AI-enhanced layer
              </span>
            </div>
            <p style={{ margin: 0, ...t(TYPE.bodySm), color: COLORS.aiText }}>
              {stage.after.aiRole}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: SPACE.xs }}>
            {stage.after.tools.map((tool) => (
              <span key={tool} style={{
                ...t(TYPE.mono), padding: `3px ${SPACE.sm}px`,
                background: COLORS.sageBg, borderRadius: RADIUS.sm,
                color: COLORS.sage,
              }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ToggleSwitch = ({ isAfter, onToggle }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: SPACE.md,
    padding: `${SPACE.sm + 2}px ${SPACE.lg}px`,
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: RADIUS.pill,
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  }}>
    <span style={{
      ...t(TYPE.monoMd), fontWeight: isAfter ? 400 : 600,
      color: isAfter ? COLORS.textLight : COLORS.rose,
      transition: "all 0.3s ease",
    }}>
      Manual
    </span>
    <div
      onClick={onToggle}
      style={{
        width: 52, height: 28, borderRadius: RADIUS.md + 6,
        background: isAfter
          ? `linear-gradient(135deg, ${COLORS.sage}, ${COLORS.sageLight})`
          : `linear-gradient(135deg, ${COLORS.rose}, ${COLORS.roseLight})`,
        cursor: "pointer",
        position: "relative",
        transition: "background 0.4s ease",
        boxShadow: isAfter
          ? "0 2px 8px rgba(122,154,130,0.3)"
          : "0 2px 8px rgba(196,112,112,0.3)",
      }}
    >
      <div style={{
        width: 22, height: 22, borderRadius: "50%",
        background: "white",
        position: "absolute", top: 3,
        left: isAfter ? 27 : 3,
        transition: "left 0.35s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
      }} />
    </div>
    <span style={{
      ...t(TYPE.monoMd), fontWeight: isAfter ? 600 : 400,
      color: isAfter ? COLORS.sage : COLORS.textLight,
      transition: "all 0.3s ease",
    }}>
      Automated
    </span>
  </div>
);

export default function FlowDashboard() {
  const [isAfter, setIsAfter] = useState(false);
  const [activeStage, setActiveStage] = useState("ideation");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const totalBefore = "14–18 hrs/week";
  const totalAfter = "3.5 hrs/week";
  const totalSaved = "~17 hrs saved";

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.bg,
      color: COLORS.text,
      fontFamily: TYPE.body.family,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        @keyframes warmFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
      `}</style>

      {/* Warm ambient texture */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.35,
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(196,112,75,0.04) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(122,154,130,0.04) 0%, transparent 50%)`,
      }} />

      {/* Top accent bar */}
      <div style={{
        height: 2, opacity: 0.5, transition: "background 0.6s ease",
        background: isAfter
          ? `linear-gradient(90deg, transparent, ${COLORS.sage}, ${COLORS.sageLight}, transparent)`
          : `linear-gradient(90deg, transparent, ${COLORS.terracotta}, ${COLORS.terracottaLight}, transparent)`,
      }} />

      <div style={{
        maxWidth: 1080, margin: "0 auto",
        padding: `${SPACE.xxl}px ${SPACE.xl}px 60px`,
        position: "relative",
      }}>

        {/* ─── HEADER ─── */}
        <div style={{
          marginBottom: SPACE.xxl,
          opacity: 0,
          animation: isLoaded ? "warmFadeIn 0.6s ease forwards 0s" : "none",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: SPACE.sm + 2, marginBottom: SPACE.lg - 2 }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: COLORS.terracotta,
              animation: "breathe 3s ease-in-out infinite",
            }} />
            <span style={{ ...t(TYPE.overline), textTransform: "uppercase", color: COLORS.terracotta }}>
              Content Workflow Blueprint
            </span>
          </div>

          <h1 style={{ margin: `0 0 ${SPACE.sm - 2}px 0`, ...t(TYPE.display), color: COLORS.text }}>
            Flow
          </h1>
          <p style={{
            margin: `0 0 ${SPACE.lg + 4}px 0`, ...t(TYPE.bodyLg),
            color: COLORS.textMuted, maxWidth: 560,
          }}>
            How a solo DTC founder's content pipeline transforms from 
            scattered manual work into an AI-enhanced system — reclaiming 
            17 hours every week.
          </p>

          {/* Context bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: SPACE.lg,
            padding: `${SPACE.sm + 4}px ${SPACE.lg - 2}px`,
            background: COLORS.surface,
            border: `1px solid ${COLORS.borderLight}`,
            borderRadius: RADIUS.lg,
            flexWrap: "wrap",
          }}>
            {[
              { label: "Persona", value: "Solo DTC Founder" },
              { label: "Pipeline", value: "Content → Social" },
              { label: "Stages", value: "5 mapped" },
              { label: "AI Layers", value: "5 integrated" },
            ].map((item) => (
              <div key={item.label} style={{ marginRight: SPACE.sm }}>
                <div style={{ ...t(TYPE.micro), textTransform: "uppercase", color: COLORS.textLight, marginBottom: 1 }}>
                  {item.label}
                </div>
                <div style={{ ...t(TYPE.body), fontWeight: 500, color: COLORS.text }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TOGGLE + TIME SUMMARY ─── */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: SPACE.xl, flexWrap: "wrap", gap: SPACE.lg - 4,
          opacity: 0,
          animation: isLoaded ? "warmFadeIn 0.5s ease forwards 0.12s" : "none",
        }}>
          <ToggleSwitch isAfter={isAfter} onToggle={() => setIsAfter(!isAfter)} />

          <div style={{ display: "flex", gap: SPACE.lg - 4, alignItems: "center" }}>
            <div style={{
              textAlign: "center", padding: `${SPACE.sm}px ${SPACE.lg - 4}px`,
              background: isAfter ? COLORS.sageBg : COLORS.roseBg,
              borderRadius: RADIUS.md,
              transition: "background 0.4s ease",
              minWidth: 100,
            }}>
              <div style={{ ...t(TYPE.micro), textTransform: "uppercase", color: COLORS.textLight, marginBottom: 3 }}>
                Weekly time
              </div>
              <div style={{
                ...t(TYPE.stat),
                color: isAfter ? COLORS.sage : COLORS.rose,
                transition: "color 0.4s ease",
              }}>
                {isAfter ? totalAfter : totalBefore}
              </div>
            </div>
            {isAfter && (
              <div style={{
                textAlign: "center", padding: `${SPACE.sm}px ${SPACE.lg - 4}px`,
                background: COLORS.terracottaBg,
                borderRadius: RADIUS.md,
                animation: "warmFadeIn 0.3s ease forwards",
              }}>
                <div style={{ ...t(TYPE.micro), textTransform: "uppercase", color: COLORS.textLight, marginBottom: 3 }}>
                  Reclaimed
                </div>
                <div style={{ ...t(TYPE.stat), color: COLORS.terracotta }}>
                  {totalSaved}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── STAGE NAVIGATOR ─── */}
        <div style={{
          display: "flex", gap: 2, marginBottom: SPACE.lg + 4,
          opacity: 0,
          animation: isLoaded ? "warmFadeIn 0.5s ease forwards 0.2s" : "none",
        }}>
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveStage(s.id)}
              style={{
                flex: 1, padding: `${SPACE.sm + 2}px ${SPACE.sm - 2}px`,
                background: activeStage === s.id
                  ? (isAfter ? COLORS.sageBg : COLORS.roseBg)
                  : "transparent",
                border: `1px solid ${activeStage === s.id
                  ? (isAfter ? COLORS.sage + "25" : COLORS.rose + "25")
                  : COLORS.borderLight}`,
                borderRadius: i === 0
                  ? `${RADIUS.md}px 0 0 ${RADIUS.md}px`
                  : i === STAGES.length - 1
                  ? `0 ${RADIUS.md}px ${RADIUS.md}px 0`
                  : 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex", flexDirection: "column", alignItems: "center", gap: SPACE.xs,
              }}
            >
              <span style={{
                fontSize: TYPE.heading.size,
                color: activeStage === s.id
                  ? (isAfter ? COLORS.sage : COLORS.rose)
                  : COLORS.textLight,
                transition: "color 0.3s ease",
              }}>
                {s.icon}
              </span>
              <span style={{
                ...t(TYPE.mono),
                fontWeight: activeStage === s.id ? 600 : 400,
                color: activeStage === s.id ? COLORS.text : COLORS.textMuted,
                transition: "all 0.3s ease",
              }}>
                {s.label}
              </span>
            </button>
          ))}
        </div>

        {/* ─── MAIN CONTENT — BEFORE / AFTER COLUMNS ─── */}
        <div style={{
          opacity: 0,
          animation: isLoaded ? "warmFadeIn 0.5s ease forwards 0.28s" : "none",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isAfter ? "0fr 1fr" : "1fr 0fr",
            gap: SPACE.lg - 4,
            transition: "grid-template-columns 0.6s cubic-bezier(0.4,0,0.2,1)",
            overflow: "hidden",
          }}>
            {/* Before column */}
            <div style={{
              minWidth: 0,
              opacity: isAfter ? 0 : 1,
              transition: "opacity 0.4s ease",
              overflow: "hidden",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: SPACE.sm,
                marginBottom: SPACE.md, padding: `0 ${SPACE.xs}px`,
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  border: `2px solid ${COLORS.rose}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.rose, opacity: 0.6 }} />
                </div>
                <span style={{ ...t(TYPE.caption), fontWeight: 600, textTransform: "uppercase", color: COLORS.rose }}>
                  Before — Manual Workflow
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACE.sm }}>
                {STAGES.map((s, i) => (
                  <BeforeCard key={s.id} stage={s} isActive={activeStage === s.id} onClick={() => setActiveStage(s.id)} index={i} />
                ))}
              </div>
            </div>

            {/* After column */}
            <div style={{
              minWidth: 0,
              opacity: isAfter ? 1 : 0,
              transition: "opacity 0.4s ease 0.15s",
              overflow: "hidden",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: SPACE.sm,
                marginBottom: SPACE.md, padding: `0 ${SPACE.xs}px`,
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  border: `2px solid ${COLORS.sage}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.sage }} />
                </div>
                <span style={{ ...t(TYPE.caption), fontWeight: 600, textTransform: "uppercase", color: COLORS.sage }}>
                  After — AI-Enhanced Pipeline
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACE.sm }}>
                {STAGES.map((s, i) => (
                  <AfterCard key={s.id} stage={s} isActive={activeStage === s.id} onClick={() => setActiveStage(s.id)} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── FOOTER ─── */}
        <div style={{
          marginTop: SPACE.xxxl, paddingTop: SPACE.lg + 4,
          borderTop: `1px solid ${COLORS.borderLight}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          opacity: 0,
          animation: isLoaded ? "fadeIn 0.6s ease forwards 0.8s" : "none",
        }}>
          <div>
            <span style={{ ...t(TYPE.footer), color: COLORS.textMuted }}>
              Flow
            </span>
            <span style={{ ...t(TYPE.caption), color: COLORS.textLight, marginLeft: SPACE.sm + 2 }}>
              Content Workflow Blueprint — Concept by Katie Kim
            </span>
          </div>
          <span style={{ ...t(TYPE.overline), color: COLORS.textLight }}>
            v0.1 prototype
          </span>
        </div>
      </div>
    </div>
  );
}
