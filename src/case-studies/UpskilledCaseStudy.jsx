import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════════════════════════════
 * UPSKILLED — Course Content UX Case Study
 * ═══════════════════════════════════════════════════════════════════
 * Real engagement: 2020–2023
 * Role: Content Designer / Web Content Specialist
 * Scope: UX writing, content redesign, LMS Canvas, CMS
 *        ↑25% course completion · ↑35% student engagement
 *
 * Typography: Spectral (display) + Libre Franklin (body)
 * Palette: Warm light base, matcha green accent, charcoal
 */

const C = {
  bgPage:   "#F5F2EB",
  bgCard:   "#FFFFFF",
  bgDark:   "#1F1A14",
  bgMuted:  "#EDF0E9",
  textPrimary:   "#1F1A14",
  textSecondary: "#5C5248",
  textTertiary:  "#8C8278",
  ink:      "#1F1A14",
  matcha:   "#4A7C59",
  matchaLight: "rgba(74,124,89,0.08)",
  terracotta:  "#A65D3E",
  border:   "#DDD7CC",
  borderLight: "#EDE9E0",
};

const METRICS = [
  { num: "25", sfx: "%", lbl: "Course completion increase" },
  { num: "35", sfx: "%", lbl: "Student engagement increase" },
  { num: "3",  sfx: "+", lbl: "Years of engagement" },
  { num: "40", sfx: "+", lbl: "Courses redesigned" },
];

const BEFORE_AFTER = [
  {
    area: "Content structure",
    before: "Long-form text blocks without visual hierarchy. Students skimmed or skipped entirely.",
    after: "Chunked into scannable sections with clear headings, pull-outs, and consistent heading hierarchy.",
  },
  {
    area: "Learning objectives",
    before: "Listed at the top as a formality. No connection to the content that followed.",
    after: "Rewritten as action-oriented outcomes, referenced again at the end to anchor learning.",
  },
  {
    area: "Instructions & tasks",
    before: "Buried mid-paragraph. Students missed submission requirements and asked repeat support questions.",
    after: "Extracted into visually distinct task blocks. Step-by-step formatting reduced support queries.",
  },
  {
    area: "Language & tone",
    before: "Formal, passive voice. Felt like a manual, not a conversation.",
    after: "Active voice, direct second person. Conversational without sacrificing clarity.",
  },
  {
    area: "Module pacing",
    before: "Dense modules with no natural stopping points. High cognitive load, high drop-off.",
    after: "Progressive disclosure — micro-lessons with clear progress signals and completion moments.",
  },
];

const TAGS = [
  "UX Writing", "Content Design", "LMS Canvas",
  "Information Architecture", "CMS", "Editorial Strategy",
  "Student Experience", "Accessibility", "Course Design"
];

const Section = ({ label, children }) => (
  <div style={{ marginBottom: 64 }}>
    <div style={{
      fontFamily: "'Courier Prime', 'Courier New', monospace",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: C.matcha,
      marginBottom: 24,
    }}>{label}</div>
    {children}
  </div>
);

export default function UpskilledCaseStudy() {
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
        @keyframes uUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Hero */}
      <div style={{
        background: C.matcha,
        padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 72px)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,242,235,0.75)",
            marginBottom: 24,
            opacity: 0,
            animation: on ? "uUp 0.5s ease forwards 0.05s" : "none",
          }}>
            Real Work · 2020–2023
          </div>

          <h1 style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#F5F2EB",
            margin: "0 0 24px 0",
            opacity: 0,
            animation: on ? "uUp 0.6s ease forwards 0.12s" : "none",
          }}>
            Upskilled — Course<br />Content UX Overhaul
          </h1>

          <p style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: "rgba(245,242,235,0.75)",
            maxWidth: 560,
            margin: "0 0 40px 0",
            opacity: 0,
            animation: on ? "uUp 0.6s ease forwards 0.22s" : "none",
          }}>
            Redesigned and rewrote online course content across Canvas LMS for Upskilled / Keypath Education — applying UX writing and information architecture to measurably improve student outcomes.
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            opacity: 0,
            animation: on ? "uUp 0.5s ease forwards 0.32s" : "none",
          }}>
            {["UX Writing", "Content Design", "LMS Canvas", "Information Architecture", "Student Outcomes"].map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245,242,235,0.7)",
                background: "rgba(245,242,235,0.1)",
                border: "1px solid rgba(245,242,235,0.2)",
                padding: "5px 10px",
                borderRadius: 3,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div style={{
        background: C.bgDark,
        padding: "clamp(28px, 4vw, 40px) clamp(24px, 6vw, 80px)",
        opacity: 0,
        animation: on ? "uUp 0.5s ease forwards 0.4s" : "none",
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
                color: "#9DC98A",
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {m.num}<span style={{ fontSize: "0.65em" }}>{m.sfx}</span>
              </div>
              <div style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(247,245,240,0.5)",
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

        {/* Problem */}
        <Section label="The Problem">
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
                Course content designed for print, experienced on screen
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: 0 }}>
                Upskilled's online course library had been built primarily by subject matter experts — people who knew their content deeply but had no formal background in instructional design or UX. The result was learning material that read like textbooks: dense, passive, poorly structured for digital reading.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: "0 0 16px 0" }}>
                Students were dropping out. Completion rates were low. Support tickets were high, often asking about things that were already in the course content — just buried where no one could find them.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: 0 }}>
                The goal: redesign course content as a UX challenge, not a content challenge. Apply the same principles used in product design — information hierarchy, progressive disclosure, cognitive load reduction — to the learning experience.
              </p>
            </div>
          </div>
        </Section>

        {/* Before / After */}
        <Section label="Before & After">
          <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textSecondary, margin: "0 0 24px 0" }}>
            Five core areas where UX-led content design drove measurable change:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {BEFORE_AFTER.map((item, i) => (
              <div key={i} style={{
                background: C.bgCard,
                border: `1px solid ${C.borderLight}`,
                borderRadius: 4,
                overflow: "hidden",
              }}>
                <div style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.matcha,
                  padding: "14px 24px 10px",
                  borderBottom: `1px solid ${C.borderLight}`,
                }}>{item.area}</div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                }}>
                  <div style={{
                    padding: "16px 24px",
                    borderRight: `1px solid ${C.borderLight}`,
                  }}>
                    <div style={{
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: C.terracotta,
                      marginBottom: 8,
                    }}>Before</div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textSecondary, margin: 0 }}>{item.before}</p>
                  </div>
                  <div style={{ padding: "16px 24px" }}>
                    <div style={{
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: C.matcha,
                      marginBottom: 8,
                    }}>After</div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textSecondary, margin: 0 }}>{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Approach */}
        <Section label="Approach">
          <div style={{
            background: C.bgMuted,
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            padding: "clamp(28px, 4vw, 48px)",
          }}>
            <h3 style={{
              fontFamily: "'Spectral', Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: C.ink,
              margin: "0 0 20px 0",
              lineHeight: 1.3,
            }}>
              Treating course content like a product interface
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}>
              {[
                { step: "01", title: "Audit", body: "Mapped every course against completion data to identify drop-off points. The content problems became obvious immediately." },
                { step: "02", title: "Pattern library", body: "Defined reusable content patterns — learning objectives format, task blocks, progress markers — applied consistently across all redesigned courses." },
                { step: "03", title: "Rewrite", body: "Applied UX writing principles: active voice, second person, plain language, action-oriented headings. Chunked long-form into scannable structure." },
                { step: "04", title: "Test & measure", body: "Tracked completion rates and engagement metrics before and after. Used support ticket volume as a proxy for content clarity." },
              ].map(s => (
                <div key={s.step}>
                  <div style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 32,
                    fontStyle: "italic",
                    color: "rgba(74,124,89,0.25)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>{s.step}</div>
                  <div style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 17,
                    fontStyle: "italic",
                    color: C.ink,
                    marginBottom: 8,
                  }}>{s.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: C.textSecondary, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Outcome quote */}
        <div style={{
          background: C.matcha,
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
            color: "#F5F2EB",
            margin: "0 0 20px 0",
          }}>
            "Redesigned and rewrote online course content across LMS Canvas, applying UX-driven copy and information architecture. Achieved measurable improvements in student outcomes through content design."
          </p>
          <div style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}>
            <div>
              <div style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: 32,
                color: "#F5F2EB",
                lineHeight: 1,
                marginBottom: 4,
              }}>↑25%</div>
              <div style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245,242,235,0.7)",
              }}>Completion rate</div>
            </div>
            <div>
              <div style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: 32,
                color: "#F5F2EB",
                lineHeight: 1,
                marginBottom: 4,
              }}>↑35%</div>
              <div style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245,242,235,0.7)",
              }}>Student engagement</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <Section label="Skills Applied">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TAGS.map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.textSecondary,
                background: C.bgCard,
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
