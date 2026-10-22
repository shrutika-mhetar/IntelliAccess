import React from "react";
import { useAccessibility } from "./AccessibilityContext.jsx";

const h = React.createElement;

const profileNames = {
  none: "Default",
  lowVision: "Low Vision",
  dyslexia: "Dyslexia",
  colourBlind: "Colour Blind",
  elderly: "Elderly",
};

function firstFont(fontFamily) {
  return fontFamily.split(",")[0].replace(/['"]/g, "").trim();
}

const panelStyle = {
  maxWidth: "720px",
  margin: "0 auto 40px auto",
  padding: "20px 28px",
  background: "#ffffff",
  color: "#312c51",
  borderRadius: "14px",
  boxShadow: "0 2px 12px rgba(49,44,81,0.08)",
  borderTop: "4px solid #f0c38e",
  fontSize: "14px",
  lineHeight: "1.5",
  fontFamily: "'Poppins', 'Segoe UI', sans-serif",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "6px 24px",
  margin: "14px 0",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #eeeaf5",
  padding: "4px 0",
};

const buttonStyle = {
  padding: "8px 14px",
  marginRight: "10px",
  border: "none",
  borderRadius: "8px",
  background: "#312c51",
  color: "#ffffff",
  fontFamily: "inherit",
  fontSize: "13px",
  cursor: "pointer",
};

export function PreferencePanel() {
  const { profile, preferences } = useAccessibility();

  const rows = [
    ["Font", firstFont(preferences.fontFamily)],
    ["Font size", preferences.fontSize],
    ["Line height", preferences.lineHeight],
    ["Letter spacing", preferences.letterSpacing],
    ["Word spacing", preferences.wordSpacing],
    ["Background", preferences.backgroundColor],
    ["Text colour", preferences.textColor],
    ["Button size", preferences.buttonSize],
    ["Colour-safe status", preferences.colourSafe ? "On" : "Off"],
    ["Reduced motion", preferences.reducedMotion ? "On" : "Off"],
  ];

  function downloadLog() {
    const logs = localStorage.getItem("accessibilityLogs") || "[]";
    const blob = new Blob([logs], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "intelliaccess-usage-log.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function clearLog() {
    localStorage.removeItem("accessibilityLogs");
    window.alert("Usage log cleared.");
  }

  return h(
    "section",
    { style: panelStyle, "aria-label": "IntelliAccess live preferences" },
    h("strong", { style: { fontSize: "16px" } }, "IntelliAccess: Live Preferences"),
    h(
      "p",
      { style: { margin: "6px 0 0 0", color: "#6b6685" } },
      "Profile (",
      h("strong", null, profileNames[profile] || "Default"),
      ") → Preferences (below) → Adaptive Interface"
    ),
    h(
      "div",
      { style: gridStyle },
      rows.map((r) =>
        h(
          "div",
          { key: r[0], style: rowStyle },
          h("span", { style: { color: "#6b6685" } }, r[0]),
          h("strong", null, r[1])
        )
      )
    ),
    h("button", { style: buttonStyle, onClick: downloadLog }, "Download usage log (JSON)"),
    h("button", { style: { ...buttonStyle, background: "#f1aa9b", color: "#312c51" }, onClick: clearLog }, "Clear log")
  );
}