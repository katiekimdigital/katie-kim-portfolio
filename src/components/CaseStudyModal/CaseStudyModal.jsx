import { useEffect } from "react";
import NudgeDashboard from "../../case-studies/NudgeDashboard";
import FlowDashboard from "../../case-studies/FlowDashboard";
import RelayLanding from "../../case-studies/RelayLanding";
import NamisanCaseStudy from "../../case-studies/NamisanCaseStudy";
import CochlearCaseStudy from "../../case-studies/CochlearCaseStudy";
import UpskilledCaseStudy from "../../case-studies/UpskilledCaseStudy";

const COMPONENT_MAP = {
  NudgeDashboard,
  FlowDashboard,
  RelayLanding,
  NamisanCaseStudy,
  CochlearCaseStudy,
  UpskilledCaseStudy,
};

export default function CaseStudyModal({ item, onClose }) {
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
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10, 8, 6, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 3vw, 40px)",
        animation: "modalFade 0.25s ease forwards",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlide {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Close button — fixed to viewport */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close case study"
        style={{
          position: "fixed",
          top: "clamp(12px, 2vw, 24px)",
          right: "clamp(12px, 2vw, 24px)",
          zIndex: 1100,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(0,0,0,0.08)",
          color: "#1a1a1a",
          fontSize: 22,
          fontWeight: 300,
          lineHeight: 1,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          fontFamily: "sans-serif",
          padding: 0,
        }}
      >
        ×
      </button>

      {/* Scrollable content container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          height: "100%",
          maxHeight: "calc(100vh - clamp(24px, 6vw, 80px))",
          borderRadius: "clamp(8px, 1.5vw, 16px)",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          animation: "modalSlide 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Component />
        </div>
      </div>
    </div>
  );
}
