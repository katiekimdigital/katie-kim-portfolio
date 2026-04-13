import { useEffect } from "react";
import NudgeDashboard from "../../case-studies/NudgeDashboard";
import FlowDashboard from "../../case-studies/FlowDashboard";
import RelayLanding from "../../case-studies/RelayLanding";
import NamisanCaseStudy from "../../case-studies/NamisanCaseStudy";

const COMPONENT_MAP = {
  NudgeDashboard,
  FlowDashboard,
  RelayLanding,
  NamisanCaseStudy,
};

export default function CaseStudyModal({ item, onClose }) {
  // Lock body scroll when open, close on Escape
  useEffect(() => {
    if (!item) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;
  const Component = COMPONENT_MAP[item.component];
  if (!Component) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} case study`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        animation: "modalFade 0.25s ease forwards",
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlide {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Close button — fixed top right */}
      <button
        onClick={onClose}
        aria-label="Close case study"
        style={{
          position: "fixed",
          top: 20,
          right: 24,
          zIndex: 110,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(0,0,0,0.1)",
          color: "#1a1a1a",
          fontSize: 20,
          fontWeight: 400,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          fontFamily: "sans-serif",
        }}
      >
        ×
      </button>

      {/* Content scroll container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 48px)",
          maxWidth: 1280,
          height: "calc(100vh - 48px)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          animation: "modalSlide 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
        }}
      >
        <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
          <Component />
        </div>
      </div>
    </div>
  );
}
