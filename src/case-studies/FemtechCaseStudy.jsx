import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════════════════════════════
 * FEMTECH COLLECTIVE — Content Designer Case Study
 * ═══════════════════════════════════════════════════════════════════
 * Real engagement: August 2020 – August 2022 (2 years)
 * Role: Content Designer
 * Organisation: Leading women's health technology and innovation org
 *
 * Scope: End-to-end web content management, design concepts for
 *        web and mobile, data-driven content strategy, UX writing,
 *        SEO, web accessibility, page usability
 *
 * Typography: Spectral (display) + Libre Franklin (body)
 * Palette: Warm white base, deep rose accent, sage green secondary
 */

const C = {
  bgPage:       "#FAF6F1",
  bgCard:       "#FFFFFF",
  bgDark:       "#1C1418",
  bgMuted:      "#F3EDE6",
  bgAccentMild: "rgba(172, 80, 100, 0.06)",
  textPrimary:  "#1C1418",
  textSecondary:"#5A4A4E",
  textTertiary: "#8A7478",
  ink:          "#1C1418",
  rose:         "#AC5064",
  roseLight:    "rgba(172, 80, 100, 0.1)",
  sage:         "#5A7A62",
  sageLight:    "rgba(90, 122, 98, 0.08)",
  border:       "#E0D6CE",
  borderLight:  "#EDE6DE",
};

const DELIVERABLES = [
  {
    label: "Content Management",
    title: "End-to-end web content ownership",
    body: "Managed the full lifecycle of online web content across the Femtech Collective platform — from planning and creation through to publishing, maintenance, and performance review. Ensured timely updates, content accuracy, and brand consistency across all digital touchpoints.",
  },
  {
    label: "Design & UX",
    title: "Web and mobile design concepts",
    body: "Led the development and implementation of design concepts for web and mobile platforms — creating content experiences that were engaging, accessible, and user-friendly. Applied information architecture principles to organise content in ways that reduced friction and improved discovery.",
  },
  {
    label: "Strategy",
    title: "Data-driven content strategy",
    body: "Employed data analysis techniques to drive strategic decision-making for content production across website and digital communication channels. Used analytics to identify content gaps, user behaviour patterns, and opportunities for improvement.",
  },
  {
    label: "SEO & Accessibility",
    title: "User-centred design for search and inclusion",
    body: "Championed user-centered design principles and content design best practices including SEO, web accessibility, and page usability — resulting in improved search rankings and a more inclusive, engaging online presence. Advocated for accessibility as a core content requirement, not an afterthought.",
  },
];

const SKILLS = [
  "Content Design", "UX Writing", "Web Content Management",
  "Information Architecture", "SEO", "Web Accessibility",
  "Mobile Content", "Data Analysis", "Digital Strategy",
  "Brand Guidelines", "Cross-functional Collaboration", "Content Governance"
];

const Section = ({ label, children }) => (
  <div style={{ marginBottom: 56 }}>
    <div style={{
      fontFamily: "'Courier Prime', 'Courier New', monospace",
      fontSize: 10,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: C.rose,
      marginBottom: 20,
    }}>{label}</div>
    {children}
  </div>
);

export default function FemtechCaseStudy() {
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
        @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;1,400;1,500&family=Libre+Franklin:wght@300;400;500;600&family=Courier+Prime:wght@400;700&display=swap');
        @keyframes ftUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Hero */}
      <div style={{
        background: C.bgDark,
        padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 72px)",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: C.rose,
            marginBottom: 20,
            opacity: 0,
            animation: on ? "ftUp 0.5s ease forwards 0.05s" : "none",
          }}>
            Content Design · 2020–2022
          </div>

          <h1 style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontSize: "clamp(36px, 5.5vw, 60px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#FAF6F1",
            margin: "0 0 20px 0",
            opacity: 0,
            animation: on ? "ftUp 0.6s ease forwards 0.12s" : "none",
          }}>
            Femtech Collective —<br />Content Designer
          </h1>

          <p style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: "rgba(250,246,241,0.6)",
            maxWidth: 520,
            margin: "0 0 36px 0",
            opacity: 0,
            animation: on ? "ftUp 0.6s ease forwards 0.2s" : "none",
          }}>
            Two years as Content Designer at a leading women's health technology organisation — owning web content end-to-end, designing for mobile and web platforms, and applying data-driven strategy to build a more accessible and discoverable digital presence.
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            opacity: 0,
            animation: on ? "ftUp 0.5s ease forwards 0.28s" : "none",
          }}>
            {["Content Design", "UX Writing", "SEO", "Web Accessibility", "Data Analysis", "Mobile"].map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "rgba(250,246,241,0.5)",
                background: "rgba(250,246,241,0.06)",
                border: "1px solid rgba(250,246,241,0.1)",
                padding: "4px 9px",
                borderRadius: 3,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scope strip */}
      <div style={{
        background: C.rose,
        padding: "clamp(20px, 3vw, 32px) clamp(24px, 6vw, 80px)",
        opacity: 0,
        animation: on ? "ftUp 0.45s ease forwards 0.34s" : "none",
      }}>
        <div style={{
          maxWidth: 860,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24,
        }}>
          {[
            { val: "2 yrs",   lbl: "Engagement length" },
            { val: "Femtech", lbl: "Sector: women's health tech" },
            { val: "4",       lbl: "Core content disciplines" },
            { val: "2020",    lbl: "Year started" },
          ].map(m => (
            <div key={m.lbl} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 36px)",
                fontWeight: 400,
                color: "#FAF6F1",
                lineHeight: 1,
                marginBottom: 5,
                fontVariantNumeric: "tabular-nums",
              }}>{m.val}</div>
              <div style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(250,246,241,0.65)",
              }}>{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "clamp(48px, 7vw, 72px) clamp(24px, 6vw, 80px)",
      }}>

        {/* Context */}
        <Section label="Context">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(20px, 4vw, 40px)",
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: C.ink,
                margin: "0 0 14px 0",
                lineHeight: 1.25,
              }}>
                Designing content for women's health in the digital space
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: 0 }}>
                Femtech Collective is a leading organisation in the field of women's health technology and innovation. Their digital presence serves a community of professionals, advocates, and researchers working at the intersection of technology and women's health outcomes.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: "0 0 14px 0" }}>
                As Content Designer, I was responsible for the end-to-end digital content experience — from conceiving design concepts through to publishing, measuring, and iterating. The role required balancing editorial quality with user experience rigour.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: 0 }}>
                Women's health content demands particular care: accuracy, accessibility, and tone of voice matter enormously for an audience that is often underserved by existing health information design.
              </p>
            </div>
          </div>
        </Section>

        {/* Deliverables */}
        <Section label="Key Work">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {DELIVERABLES.map((d, i) => (
              <div key={i} style={{
                background: C.bgCard,
                border: `1px solid ${C.borderLight}`,
                borderRadius: 4,
                padding: "clamp(18px, 2.5vw, 28px)",
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: "clamp(14px, 2.5vw, 28px)",
                alignItems: "start",
              }}>
                <div style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.rose,
                  paddingTop: 3,
                  lineHeight: 1.4,
                }}>{d.label}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 18,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: C.ink,
                    margin: "0 0 8px 0",
                    lineHeight: 1.3,
                  }}>{d.title}</h3>
                  <p style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: C.textSecondary,
                    margin: 0,
                    maxWidth: "60ch",
                  }}>{d.body}</p>
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
            padding: "clamp(24px, 4vw, 40px)",
          }}>
            <h3 style={{
              fontFamily: "'Spectral', Georgia, serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: C.ink,
              margin: "0 0 16px 0",
              lineHeight: 1.3,
            }}>
              Content design as a UX discipline, not a writing task
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: "0 0 20px 0", maxWidth: "65ch" }}>
              The work at Femtech was shaped by a belief that content design and UX design are inseparable — that what you say, how you structure it, and how you label it are all design decisions with measurable user impact.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}>
              {[
                { num: "01", title: "Research first", body: "Understanding user needs, existing content performance, and accessibility gaps before touching a single word." },
                { num: "02", title: "Architecture before copy", body: "Designing the structure, hierarchy, and navigation of content before writing — IA as the foundation of good content design." },
                { num: "03", title: "Data-informed iteration", body: "Using analytics to measure what worked and what drove drop-off. Content decisions backed by evidence, not assumption." },
                { num: "04", title: "Accessibility as default", body: "WCAG-compliant copy, alt text, plain language standards, and readable line lengths — built in from the start, not retrofitted." },
              ].map(s => (
                <div key={s.num}>
                  <div style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 28,
                    fontStyle: "italic",
                    lineHeight: 1,
                    marginBottom: 6,
                    color: "rgba(172,80,100,0.2)",
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 16,
                    fontStyle: "italic",
                    color: C.ink,
                    marginBottom: 6,
                  }}>{s.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textSecondary, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Outcome callout */}
        <div style={{
          background: C.bgDark,
          borderRadius: 4,
          padding: "clamp(28px, 4vw, 48px)",
          marginBottom: 56,
        }}>
          <p style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontSize: "clamp(17px, 2.5vw, 22px)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "#FAF6F1",
            margin: "0 0 16px 0",
            maxWidth: "60ch",
          }}>
            "Spearheaded user-centered design principles and content design best practices — resulting in improved search rankings and a more inclusive and engaging online presence."
          </p>
          <div style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.rose,
          }}>Femtech Collective · 2020–2022</div>
        </div>

        {/* Skills */}
        <Section label="Skills Applied">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {SKILLS.map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: C.textSecondary,
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                padding: "5px 9px",
                borderRadius: 3,
              }}>{t}</span>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
