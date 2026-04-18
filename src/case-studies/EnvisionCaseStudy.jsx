import { useState, useEffect } from "react";

/*
 * ═══════════════════════════════════════════════════════════════════
 * ENVISION PHARMA GROUP — Software Application Specialist (Product UI)
 * ═══════════════════════════════════════════════════════════════════
 * Real engagement: November 2020 – March 2022 (1 year 5 months)
 * Role: Software Application Specialist (Product UI)
 * Organisation: Global leader in medical communications and consulting
 *               for the pharmaceutical industry
 *
 * Scope: UI interface design, B2B & B2C product configuration,
 *        knowledge base development, process enhancement,
 *        document procedure improvement
 *
 * Typography: Spectral (display) + Libre Franklin (body)
 * Palette: Off-white base, deep slate accent, warm amber secondary
 */

const C = {
  bgPage:       "#F4F5F6",
  bgCard:       "#FFFFFF",
  bgDark:       "#161B24",
  bgMuted:      "#EAECEE",
  textPrimary:  "#161B24",
  textSecondary:"#4A5262",
  textTertiary: "#7A8294",
  ink:          "#161B24",
  slate:        "#3B5080",
  slateLight:   "rgba(59, 80, 128, 0.08)",
  amber:        "#B07030",
  amberLight:   "rgba(176, 112, 48, 0.08)",
  border:       "#D8DCE2",
  borderLight:  "#E8EBEE",
};

const DELIVERABLES = [
  {
    label: "UI Analysis",
    title: "Interface design to enhance performance",
    body: "Analysed existing UI interfaces across Envision's medical communications software suite — identifying performance bottlenecks, usability gaps, and technical challenges. Translated findings into design recommendations that improved how users interacted with complex pharmaceutical data tools.",
  },
  {
    label: "Product Config",
    title: "B2B and B2C process enhancements",
    body: "Identified and executed process enhancements and product configuration modifications across both B2B (pharmaceutical company clients) and B2C content contexts. Worked within the constraints of regulated medical communications environments to ensure configurations met compliance requirements.",
  },
  {
    label: "Knowledge Base",
    title: "Digital content and documentation development",
    body: "Developed and produced digital content including new configurations added to the existing knowledge base. Ensured technical documentation was accurate, searchable, and structured to support end users and internal teams navigating complex product ecosystems.",
  },
  {
    label: "Process Design",
    title: "Document procedure improvements",
    body: "Suggested and implemented improvements to document procedures — creating clearer workflows, better-structured documentation templates, and more consistent processes for a team operating across multiple pharmaceutical clients and regulatory environments.",
  },
];

const SKILLS = [
  "UI Design", "Application Specialist", "B2B Product Config",
  "Knowledge Base Development", "Technical Documentation",
  "Process Improvement", "Medical Communications", "Pharma Industry",
  "B2C Content", "Product Configuration", "UX Analysis"
];

const Section = ({ label, children }) => (
  <div style={{ marginBottom: 56 }}>
    <div style={{
      fontFamily: "'Courier Prime', 'Courier New', monospace",
      fontSize: 10,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: C.slate,
      marginBottom: 20,
    }}>{label}</div>
    {children}
  </div>
);

export default function EnvisionCaseStudy() {
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
        @keyframes evUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
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
            color: C.amber,
            marginBottom: 20,
            opacity: 0,
            animation: on ? "evUp 0.5s ease forwards 0.05s" : "none",
          }}>
            Product UI · 2020–2022
          </div>

          <h1 style={{
            fontFamily: "'Spectral', Georgia, serif",
            fontSize: "clamp(36px, 5.5vw, 60px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#F4F5F6",
            margin: "0 0 20px 0",
            opacity: 0,
            animation: on ? "evUp 0.6s ease forwards 0.12s" : "none",
          }}>
            Envision Pharma —<br />Application Specialist
          </h1>

          <p style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: "rgba(244,245,246,0.55)",
            maxWidth: 520,
            margin: "0 0 36px 0",
            opacity: 0,
            animation: on ? "evUp 0.6s ease forwards 0.2s" : "none",
          }}>
            Software Application Specialist (Product UI) at Envision Pharma Group — a global leader in medical communications and consulting for the pharmaceutical industry. One year five months designing UI interfaces, configuring B2B and B2C products, and improving knowledge base and documentation systems.
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            opacity: 0,
            animation: on ? "evUp 0.5s ease forwards 0.28s" : "none",
          }}>
            {["UI Design", "Product Config", "Medical Comms", "B2B & B2C", "Technical Docs", "Process Design"].map(t => (
              <span key={t} style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "rgba(244,245,246,0.45)",
                background: "rgba(244,245,246,0.05)",
                border: "1px solid rgba(244,245,246,0.1)",
                padding: "4px 9px",
                borderRadius: 3,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scope strip */}
      <div style={{
        background: C.slate,
        padding: "clamp(20px, 3vw, 32px) clamp(24px, 6vw, 80px)",
        opacity: 0,
        animation: on ? "evUp 0.45s ease forwards 0.34s" : "none",
      }}>
        <div style={{
          maxWidth: 860,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24,
        }}>
          {[
            { val: "1y 5m",  lbl: "Engagement length" },
            { val: "Pharma", lbl: "Sector: medical communications" },
            { val: "B2B+B2C", lbl: "Product scope" },
            { val: "Global",  lbl: "Client reach" },
          ].map(m => (
            <div key={m.lbl} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Spectral', Georgia, serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 400,
                color: "#F4F5F6",
                lineHeight: 1,
                marginBottom: 5,
                fontVariantNumeric: "tabular-nums",
              }}>{m.val}</div>
              <div style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(244,245,246,0.6)",
              }}>{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
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
                UI and application work inside regulated pharmaceutical communications
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: 0 }}>
                Envision Pharma Group provides medical communications and consulting services to global pharmaceutical companies — helping them communicate clinical data, regulatory submissions, and product information accurately and compliantly across markets.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: "0 0 14px 0" }}>
                As Software Application Specialist, I worked at the intersection of UI design and product configuration — analysing existing interfaces, improving how the software was configured for different B2B and B2C contexts, and developing the documentation and knowledge base that supported users navigating complex pharmaceutical tools.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: 0 }}>
                The regulated nature of pharmaceutical communications meant every UI change and configuration decision had to balance usability with compliance — a discipline that sharpened my attention to precise, systematic design thinking.
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
                  color: C.slate,
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

        {/* What this role taught */}
        <Section label="What This Role Built">
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
              margin: "0 0 14px 0",
              lineHeight: 1.3,
            }}>
              Precision thinking in a zero-tolerance environment
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textSecondary, margin: "0 0 24px 0", maxWidth: "65ch" }}>
              Pharmaceutical communications operates with a different standard than most digital industries. Data accuracy, regulatory compliance, and clinical precision are non-negotiable. Working in this environment built habits that carry into every project since — systematic documentation, careful configuration, and design decisions grounded in evidence rather than assumption.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 20,
            }}>
              {[
                { title: "Systems thinking", body: "Every UI decision exists within a larger product ecosystem. Understanding those dependencies before making changes." },
                { title: "Documentation rigour", body: "Processes that couldn't be documented clearly weren't well-designed. Writing forced clarity of thought." },
                { title: "Regulated UX", body: "Designing for compliance without sacrificing usability — finding the path between what's required and what works." },
              ].map(s => (
                <div key={s.title} style={{
                  background: C.bgCard,
                  border: `1px solid ${C.borderLight}`,
                  borderRadius: 4,
                  padding: 16,
                }}>
                  <div style={{
                    fontFamily: "'Spectral', Georgia, serif",
                    fontSize: 16,
                    fontStyle: "italic",
                    color: C.ink,
                    marginBottom: 8,
                  }}>{s.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textSecondary, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Outcome */}
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
            color: "#F4F5F6",
            margin: "0 0 16px 0",
            maxWidth: "60ch",
          }}>
            "Experience identifying and executing process enhancements and product configuration modifications for B2B and B2C content in a global pharmaceutical communications environment."
          </p>
          <div style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.amber,
          }}>Envision Pharma Group · Nov 2020 – Mar 2022</div>
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
