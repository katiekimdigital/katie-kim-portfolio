import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════════════════════════════
 * COCHLEAR — APAC Web Operations Case Study
 * ═══════════════════════════════════════════════════════════════════
 * Real engagement: 2023–2025
 * Role: Web Content Specialist & APAC Regional Lead
 * Scope: Sitecore CMS, 13+ markets, product launches, SEO, governance
 *
 * Typography: Spectral (display) + Libre Franklin (body)
 * Palette: Off-white base, deep navy/charcoal, warm terracotta accent
 */

const C = {
  bgPage:   "#F7F5F0",
  bgCard:   "#FFFFFF",
  bgDark:   "#1A1714",
  bgMuted:  "#F0ECE4",
  textPrimary:   "#1A1714",
  textSecondary: "#5C5248",
  textTertiary:  "#8C8278",
  ink:      "#1F1A14",
  terracotta: "#A65D3E",
  terracottaLight: "rgba(166,93,62,0.08)",
  matcha:   "#4A7C59",
  matchaLight: "rgba(74,124,89,0.08)",
  border:   "#DDD7CC",
  borderLight: "#EDE9E0",
};

const METRICS = [
  { num: "10+",  sfx: "",  lbl: "Product launch sites" },
  { num: "50",   sfx: "%", lbl: "BAU efficiency gained" },
  { num: "13",   sfx: "+", lbl: "Markets managed" },
  { num: "20",   sfx: "+", lbl: "Content systems built" },
];

const MARKETS = [
  "🇦🇺 Australia", "🇯🇵 Japan", "🇰🇷 Korea", "🇸🇬 Singapore",
  "🇲🇾 Malaysia", "🇮🇳 India", "🇨🇳 China", "🇻🇳 Vietnam",
  "🇵🇭 Philippines", "+ EU & CAM"
];

const PRODUCTS = [
  "Nucleus Nexa", "Nucleus 8", "Baha 6 Max", "Osia System",
  "Osia R5", "True Wireless", "HCP Clinical Tools"
];

const TAGS = [
  "Sitecore CMS", "Technical SEO", "Content Operations", "Multi-market",
  "SOP Development", "Digital Governance", "DAM", "Localisation",
  "Content Design", "Web Publishing", "Analytics", "Team Training"
];

const DELIVERABLES = [
  {
    label: "Governance",
    title: "Web Build SOPs & Workflow Documentation",
    body: "Designed and implemented comprehensive web build SOPs from scratch — standardising how product launches were planned, reviewed, and published across APAC, EU, and CAM. Reduced turnaround times and made cross-regional handoffs consistent."
  },
  {
    label: "Operations",
    title: "10+ Product Launch Experiences",
    body: "Led Sitecore web builds for major product releases including Nucleus 8, Baha 6 Max, Osia R5, and True Wireless. Each launch required coordinating content, regulatory review, localisation, and technical SEO across multiple market teams simultaneously."
  },
  {
    label: "Localisation",
    title: "13-Market Content Architecture",
    body: "Managed localisation pipelines across Japanese, Korean, Chinese Simplified & Traditional, Vietnamese, Malay, and more — ensuring cultural relevance, regulatory compliance, and brand consistency across every market variant."
  },
  {
    label: "Team Enablement",
    title: "APAC & EU Team Training",
    body: "Trained publishing teams across APAC and EU on Sitecore CMS, global DAM, and SEO best practices. Built onboarding documentation and capability frameworks that reduced onboarding time and improved quality consistency."
  },
];

const Section = ({ label, children }) => (
  <div style={{ marginBottom: 64 }}>
    <div style={{
      fontFamily: "'Courier Prime', 'Courier New', monospace",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: C.terracotta,
      marginBottom: 24,
    }}>{label}</div>
    {children}
  </div>
);

export default function CochlearCaseStudy() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      minHeight: "100%",
      background: C.bgPage,
      color: C.textPrimary,
      fontFamily: "'Libre Franklin', system-ui, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Libre+Franklin:wght@300;400;500;600&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
        @keyframes cUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Hero */}
      <div style={{
        background: C.bgDark,
        padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 72px)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: C.terracotta,
            marginBottom: 24,
            opacity: 0,
            animation: on ? "cUp 0.5s ease forwards 0.05s" : "none",
          }}>
            Enterprise · 2023–2025
          </div>

          <h1 style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#F7F5F0",
            margin: "0 0 24px 0",
            opacity: 0,
            animation: on ? "cUp 0.6s ease forwards 0.12s" : "none",
          }}>
            Cochlear — APAC<br />Web Operations
          </h1>

          <p style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: "rgba(247,245,240,0.65)",
            maxWidth: 560,
            margin: "0 0 40px 0",
            opacity: 0,
            animation: on ? "cUp 0.6s ease forwards 0.22s" : "none",
          }}>
            Web Content Specialist & APAC Regional Lead at Cochlear Limited — one of Australia's most recognised medical device companies. Two years managing global Sitecore operations across product launches, SEO, localisation, and content governance.
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            opacity: 0,
            animation: on ? "cUp 0.5s ease forwards 0.32s" : "none",
          }}>
            {["Sitecore CMS", "Technical SEO", "APAC Regional Lead", "Content Governance", "Localisation", "13+ Markets"].map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(247,245,240,0.55)",
                background: "rgba(247,245,240,0.06)",
                border: "1px solid rgba(247,245,240,0.12)",
                padding: "5px 10px",
                borderRadius: 3,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div style={{
        background: C.terracotta,
        padding: "clamp(28px, 4vw, 40px) clamp(24px, 6vw, 80px)",
        opacity: 0,
        animation: on ? "cUp 0.5s ease forwards 0.4s" : "none",
      }}>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 24,
        }}>
          {METRICS.map(m => (
            <div key={m.lbl} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 48px)",
                fontWeight: 400,
                color: "#F7F5F0",
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {m.num}<span style={{ fontSize: "0.6em" }}>{m.sfx}</span>
              </div>
              <div style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(247,245,240,0.7)",
              }}>{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)",
      }}>

        {/* Context */}
        <Section label="Context">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: C.ink,
                margin: "0 0 16px 0",
                lineHeight: 1.25,
              }}>
                Global medical device web operations at enterprise scale
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: 0 }}>
                Cochlear is an ASX-listed company selling hearing implant systems across 180+ countries. The web team supports product launches, clinical portals, and consumer sites across multiple regions — all running on Sitecore XM.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: "0 0 20px 0" }}>
                As APAC lead, I was responsible for the end-to-end web lifecycle of product launches — from brief through to live — across 13+ markets while simultaneously supporting EU and CAM regions.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: 0 }}>
                The work required managing competing priorities: regulatory compliance, cultural localisation, technical SEO, brand standards, and publishing velocity — all at the same time.
              </p>
            </div>
          </div>
        </Section>

        {/* Deliverables */}
        <Section label="Key Deliverables">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {DELIVERABLES.map((d, i) => (
              <div key={i} style={{
                background: C.bgCard,
                border: `1px solid ${C.borderLight}`,
                borderRadius: 4,
                padding: "clamp(20px, 3vw, 32px)",
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "clamp(16px, 3vw, 32px)",
                alignItems: "start",
              }}>
                <div style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.terracotta,
                  paddingTop: 4,
                }}>{d.label}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: C.ink,
                    margin: "0 0 10px 0",
                    lineHeight: 1.3,
                  }}>{d.title}</h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: C.textSecondary,
                    margin: 0,
                  }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Market reach */}
        <Section label="Market Reach">
          <div style={{
            background: C.bgMuted,
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            padding: "clamp(24px, 4vw, 40px)",
          }}>
            <p style={{
              fontFamily: "'Spectral', Georgia, serif",
              fontSize: 20,
              fontStyle: "italic",
              fontWeight: 400,
              color: C.ink,
              margin: "0 0 20px 0",
              lineHeight: 1.3,
            }}>
              Active markets managed across APAC, EU, and CAM regions
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {MARKETS.map(m => (
                <span key={m} style={{
                  fontSize: 13,
                  color: C.textSecondary,
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  padding: "6px 12px",
                  borderRadius: 3,
                }}>{m}</span>
              ))}
            </div>
            <p style={{ fontSize: 14, color: C.textTertiary, margin: 0, lineHeight: 1.6 }}>
              Each market required tailored content, regulatory compliance review, cultural localisation, and technical SEO — managed simultaneously across product launches.
            </p>
          </div>
        </Section>

        {/* Products launched */}
        <Section label="Products Launched">
          <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: "0 0 20px 0" }}>
            Led web builds for the following Cochlear product lines across all markets:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {PRODUCTS.map(p => (
              <span key={p} style={{
                fontFamily: "'Libre Franklin', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13,
                color: C.textPrimary,
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                padding: "8px 14px",
                borderRadius: 3,
              }}>{p}</span>
            ))}
          </div>
        </Section>

        {/* Quote */}
        <div style={{
          background: C.bgDark,
          borderRadius: 4,
          padding: "clamp(32px, 5vw, 56px)",
          marginBottom: 64,
        }}>
          <p style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "#F7F5F0",
            margin: "0 0 20px 0",
          }}>
            "Implemented comprehensive web build SOPs, workflow documentation, and tracking tools — reducing turnaround times and improving cross-regional collaboration across APAC, EU, and CAM."
          </p>
          <div style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.terracotta,
          }}>Performance summary · Cochlear engagement</div>
        </div>

        {/* Skills used */}
        <Section label="Skills Applied">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TAGS.map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.textSecondary,
                background: C.bgMuted,
                border: `1px solid ${C.border}`,
                padding: "6px 10px",
                borderRadius: 3,
              }}>{t}</span>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
