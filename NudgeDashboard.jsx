import { useState, useEffect, useRef } from "react";

const SITE_DATA = {
  url: "www.solara-wellness.com.au",
  name: "Solara Wellness",
  industry: "Health & Wellness E-commerce",
  scanDate: "March 2026",
  overallScore: 68,
};

const PRINCIPLES = [
  {
    id: "anchoring",
    name: "Anchoring",
    icon: "⚓",
    score: 82,
    category: "Cognitive Bias",
    severity: "strong",
    summary:
      "Pricing uses anchor-first patterns effectively, but hero content lacks a reference point for value comparison.",
    findings: [
      {
        type: "pass",
        text: "Original price shown with strikethrough before discounted price on 4/6 product cards",
      },
      {
        type: "pass",
        text: "Premium tier listed first in pricing table, anchoring perceived value",
      },
      {
        type: "warn",
        text: 'Hero headline "Transform Your Routine" lacks a quantified anchor — consider "Join 12,000+ members"',
      },
      {
        type: "fail",
        text: "Bundle page shows no per-unit savings breakdown to anchor bundle value",
      },
    ],
    recommendation:
      "Add quantified social proof to hero section. Reframe bundle pricing to show individual vs bundled cost per item.",
  },
  {
    id: "cognitive-load",
    name: "Cognitive Load",
    icon: "🧠",
    score: 54,
    category: "UX Friction",
    severity: "needs-work",
    summary:
      "Navigation is overloaded and mobile menu creates decision fatigue. Content hierarchy needs simplification.",
    findings: [
      {
        type: "fail",
        text: "Primary navigation contains 9 top-level items — exceeds Miller's Law threshold of 7±2",
      },
      {
        type: "fail",
        text: "Product filter panel shows 14 simultaneous filter options without progressive disclosure",
      },
      {
        type: "warn",
        text: "Checkout form requests 11 fields on a single page — consider multi-step",
      },
      {
        type: "pass",
        text: "Product detail pages use clear visual hierarchy with consistent heading structure",
      },
    ],
    recommendation:
      "Consolidate nav to 5–6 primary items. Implement progressive disclosure on filters. Break checkout into 3 steps with progress indicator.",
  },
  {
    id: "loss-aversion",
    name: "Loss Aversion",
    icon: "⏳",
    score: 41,
    category: "Motivation",
    severity: "critical",
    summary:
      "Almost no loss-framing language used. The site relies entirely on gain-framing, missing a powerful conversion lever.",
    findings: [
      {
        type: "fail",
        text: 'No urgency or scarcity cues — no stock indicators, no "limited" language anywhere on site',
      },
      {
        type: "fail",
        text: "Cart abandonment flow has no loss-framed copy (e.g., \"Your items won't be reserved\")",
      },
      {
        type: "fail",
        text: "Free shipping threshold shown but not framed as potential loss (\"You're $12 away from free shipping\")",
      },
      {
        type: "warn",
        text: "Subscription page mentions benefits but not what users miss without it",
      },
    ],
    recommendation:
      "Introduce ethical scarcity signals (real stock levels). Reframe shipping threshold as progress toward saving. Add loss-framed CTAs to abandonment emails.",
  },
  {
    id: "social-proof",
    name: "Social Proof",
    icon: "👥",
    score: 73,
    category: "Trust",
    severity: "moderate",
    summary:
      "Reviews exist but are poorly placed. No real-time social proof or user-generated content strategy.",
    findings: [
      {
        type: "pass",
        text: "Product pages include star ratings and review counts above the fold",
      },
      {
        type: "pass",
        text: "Homepage features 3 customer testimonials with photos and names",
      },
      {
        type: "warn",
        text: "Reviews are only visible after scrolling past product details — should appear near CTA",
      },
      {
        type: "fail",
        text: "No real-time indicators (\"24 people viewing\" or \"Bought 8 times today\")",
      },
      {
        type: "warn",
        text: "No UGC integration — Instagram or TikTok embeds could strengthen authenticity",
      },
    ],
    recommendation:
      "Move top review quote adjacent to Add to Cart button. Consider lightweight real-time purchase notifications. Integrate UGC gallery on product pages.",
  },
  {
    id: "choice-architecture",
    name: "Choice Architecture",
    icon: "◆",
    score: 65,
    category: "Decision Design",
    severity: "moderate",
    summary:
      "Default options and recommendation hierarchy are present but inconsistent across the purchase journey.",
    findings: [
      {
        type: "pass",
        text: 'Subscription pricing highlights "Most Popular" plan with visual emphasis',
      },
      {
        type: "warn",
        text: "Product variants (size, scent) have no default pre-selected — adds unnecessary decision cost",
      },
      {
        type: "fail",
        text: "Category pages show 24+ products in flat grid — no curated \"Staff Picks\" or guided path",
      },
      {
        type: "warn",
        text: '"Compare" feature exists but requires 3+ clicks to activate',
      },
    ],
    recommendation:
      "Pre-select the most popular variant. Add curated collections and \"Start Here\" paths for new visitors. Surface comparison features earlier in the browse flow.",
  },
  {
    id: "reciprocity",
    name: "Reciprocity",
    icon: "🔄",
    score: 88,
    category: "Relationship",
    severity: "strong",
    summary:
      "Strong content marketing and free value delivery. Blog and free resources create genuine reciprocity.",
    findings: [
      {
        type: "pass",
        text: "Blog publishes weekly guides with actionable wellness advice — no gate, free access",
      },
      {
        type: "pass",
        text: "Free downloadable morning routine PDF offered before any purchase prompt",
      },
      {
        type: "pass",
        text: "Email welcome series leads with value (3 free tips) before any product mention",
      },
      {
        type: "warn",
        text: "Post-purchase experience lacks a surprise element (handwritten note, bonus sample)",
      },
    ],
    recommendation:
      "Maintain current strategy. Consider adding a small unexpected gift in first orders to deepen reciprocity and drive word-of-mouth.",
  },
];

const getScoreColor = (score) => {
  if (score >= 80) return "#34d399";
  if (score >= 60) return "#fbbf24";
  if (score >= 40) return "#fb923c";
  return "#f87171";
};

const getSeverityLabel = (severity) => {
  const map = {
    strong: { label: "Strong", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
    moderate: {
      label: "Needs Attention",
      color: "#fbbf24",
      bg: "rgba(251,191,36,0.1)",
    },
    "needs-work": {
      label: "Underperforming",
      color: "#fb923c",
      bg: "rgba(251,146,60,0.1)",
    },
    critical: {
      label: "Critical Gap",
      color: "#f87171",
      bg: "rgba(248,113,113,0.1)",
    },
  };
  return map[severity] || map.moderate;
};

const ScoreRing = ({ score, size = 120, strokeWidth = 6 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 300);
    return () => clearTimeout(timer);
  }, [score]);

  const offset = circumference - (animatedScore / 100) * circumference;
  const color = getScoreColor(score);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: size * 0.32,
            fontWeight: 700,
            color: color,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {animatedScore}
        </span>
        <span
          style={{
            fontSize: size * 0.1,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginTop: 2,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          / 100
        </span>
      </div>
    </div>
  );
};

const MiniBar = ({ score, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setWidth(score), 400 + delay);
    return () => clearTimeout(timer);
  }, [score, delay]);
  return (
    <div
      style={{
        width: "100%",
        height: 3,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: getScoreColor(score),
          borderRadius: 2,
          transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
};

const FindingRow = ({ finding, index }) => {
  const icons = {
    pass: "✓",
    warn: "⚠",
    fail: "✕",
  };
  const colors = {
    pass: "#34d399",
    warn: "#fbbf24",
    fail: "#f87171",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: "10px 0",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        opacity: 0,
        animation: `fadeSlideIn 0.4s ease forwards ${index * 0.08}s`,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: 22,
          height: 22,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
          background: `${colors[finding.type]}15`,
          color: colors[finding.type],
          border: `1px solid ${colors[finding.type]}30`,
        }}
      >
        {icons[finding.type]}
      </span>
      <p
        style={{
          margin: 0,
          fontSize: 13,
          lineHeight: 1.55,
          color: "rgba(255,255,255,0.72)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {finding.text}
      </p>
    </div>
  );
};

const PrincipleCard = ({ principle, isExpanded, onToggle, index }) => {
  const sev = getSeverityLabel(principle.severity);
  return (
    <div
      onClick={onToggle}
      style={{
        background: isExpanded
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.02)",
        border: isExpanded
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0.05)",
        borderRadius: 12,
        padding: isExpanded ? "20px 24px" : "16px 24px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        opacity: 0,
        animation: `fadeSlideIn 0.5s ease forwards ${0.1 + index * 0.07}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 22 }}>{principle.icon}</span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.92)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {principle.name}
              </h3>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: sev.color,
                  background: sev.bg,
                  padding: "3px 8px",
                  borderRadius: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {sev.label}
              </span>
            </div>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {principle.category}
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: 16 }}
        >
          <div style={{ width: 80 }}>
            <MiniBar score={principle.score} delay={index * 70} />
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: getScoreColor(principle.score),
              fontFamily: "'JetBrains Mono', monospace",
              minWidth: 32,
              textAlign: "right",
            }}
          >
            {principle.score}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: 14,
              transition: "transform 0.3s ease",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </span>
        </div>
      </div>

      {isExpanded && (
        <div style={{ marginTop: 18 }}>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 16px 0",
              fontFamily: "'DM Sans', sans-serif",
              paddingLeft: 36,
            }}
          >
            {principle.summary}
          </p>

          <div
            style={{
              paddingLeft: 36,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Findings
            </span>
            {principle.findings.map((f, i) => (
              <FindingRow key={i} finding={f} index={i} />
            ))}
          </div>

          <div
            style={{
              marginLeft: 36,
              padding: "14px 18px",
              background: "rgba(99,102,241,0.06)",
              border: "1px solid rgba(99,102,241,0.15)",
              borderRadius: 8,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(129,140,248,0.7)",
                fontFamily: "'JetBrains Mono', monospace",
                display: "block",
                marginBottom: 6,
              }}
            >
              Recommendation
            </span>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.72)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {principle.recommendation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function NudgeDashboard() {
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: "all", label: "All Principles" },
    { id: "critical", label: "Critical" },
    { id: "moderate", label: "Moderate" },
    { id: "strong", label: "Strong" },
  ];

  const filtered =
    activeTab === "all"
      ? PRINCIPLES
      : PRINCIPLES.filter((p) => {
          if (activeTab === "critical")
            return p.severity === "critical" || p.severity === "needs-work";
          if (activeTab === "moderate") return p.severity === "moderate";
          if (activeTab === "strong") return p.severity === "strong";
          return true;
        });

  const avgScore = Math.round(
    PRINCIPLES.reduce((a, b) => a + b.score, 0) / PRINCIPLES.length
  );

  const passCount = PRINCIPLES.filter((p) => p.score >= 70).length;
  const critCount = PRINCIPLES.filter((p) => p.score < 50).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "white",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        * { box-sizing: border-box; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
      `}</style>

      {/* Subtle grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #818cf8, #34d399, #fbbf24, transparent)",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "40px 24px 60px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: 48,
            opacity: 0,
            animation: isLoaded
              ? "fadeSlideIn 0.6s ease forwards 0s"
              : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#818cf8",
                animation: "pulseGlow 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(129,140,248,0.8)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Behavioral UX Audit
            </span>
          </div>

          <h1
            style={{
              margin: "0 0 8px 0",
              fontSize: 52,
              fontWeight: 400,
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Nudge
          </h1>
          <p
            style={{
              margin: "0 0 28px 0",
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: 520,
              lineHeight: 1.5,
            }}
          >
            Scoring content and UX against behavioral psychology principles — 
            surfacing the invisible friction that costs conversions.
          </p>

          {/* Site Info Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "14px 20px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #c4b5fd, #818cf8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0a0a0f",
                }}
              >
                S
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {SITE_DATA.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {SITE_DATA.url}
                </div>
              </div>
            </div>
            <div style={{ height: 24, width: 1, background: "rgba(255,255,255,0.08)" }} />
            {[
              { label: "Industry", value: SITE_DATA.industry },
              { label: "Scanned", value: SITE_DATA.scanDate },
              { label: "Principles", value: `${PRINCIPLES.length} evaluated` },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: 1,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score Overview */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 40,
            marginBottom: 48,
            alignItems: "center",
            opacity: 0,
            animation: isLoaded
              ? "fadeSlideIn 0.6s ease forwards 0.15s"
              : "none",
          }}
        >
          <ScoreRing score={avgScore} size={140} strokeWidth={7} />

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                marginBottom: 20,
              }}
            >
              {[
                {
                  label: "Overall Score",
                  value: avgScore,
                  sub: "Across 6 principles",
                  color: getScoreColor(avgScore),
                },
                {
                  label: "Passing",
                  value: passCount,
                  sub: `of ${PRINCIPLES.length} principles`,
                  color: "#34d399",
                },
                {
                  label: "Critical Gaps",
                  value: critCount,
                  sub: "Require immediate action",
                  color: "#f87171",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: 6,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: stat.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.3)",
                      marginTop: 4,
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini principle bars summary */}
            <div style={{ display: "flex", gap: 6 }}>
              {PRINCIPLES.sort((a, b) => b.score - a.score).map((p) => (
                <div
                  key={p.id}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 32,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 4,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: `${p.score}%`,
                        background: `${getScoreColor(p.score)}25`,
                        borderTop: `2px solid ${getScoreColor(p.score)}`,
                        borderRadius: "0 0 4px 4px",
                        transition: "height 1.2s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "'JetBrains Mono', monospace",
                      textAlign: "center",
                    }}
                  >
                    {p.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 24,
            opacity: 0,
            animation: isLoaded
              ? "fadeSlideIn 0.5s ease forwards 0.25s"
              : "none",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: 6,
                border:
                  activeTab === tab.id
                    ? "1px solid rgba(129,140,248,0.3)"
                    : "1px solid rgba(255,255,255,0.06)",
                background:
                  activeTab === tab.id
                    ? "rgba(129,140,248,0.1)"
                    : "transparent",
                color:
                  activeTab === tab.id
                    ? "rgba(129,140,248,0.9)"
                    : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Principle Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map((p, i) => (
            <PrincipleCard
              key={p.id}
              principle={p}
              isExpanded={expandedId === p.id}
              onToggle={() =>
                setExpandedId(expandedId === p.id ? null : p.id)
              }
              index={i}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: 0,
            animation: isLoaded
              ? "fadeIn 0.6s ease forwards 0.8s"
              : "none",
          }}
        >
          <div>
            <span
              style={{
                fontSize: 14,
                fontFamily: "'Instrument Serif', serif",
                color: "rgba(255,255,255,0.5)",
                fontStyle: "italic",
              }}
            >
              Nudge
            </span>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.2)",
                marginLeft: 10,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Behavioral UX Audit Tool — Concept by Katie Kim
            </span>
          </div>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            v0.1 prototype
          </span>
        </div>
      </div>
    </div>
  );
}
