import React from "react";
import { useAccessibility } from "./AccessibilityContext.jsx";

const profiles = [
  { key: "lowVision", label: "Low Vision" },
  { key: "dyslexia", label: "Dyslexia" },
  { key: "colourBlind", label: "Colour Blind" },
  { key: "elderly", label: "Elderly" },
];

export function AccessibilitySwitcher() {
  const { profile, setProfile } = useAccessibility();

  return React.createElement(
    "div",
    { className: "intelliaccess-switcher", role: "group", "aria-label": "Accessibility profile selector" },
    profiles.map((p) =>
      React.createElement(
        "button",
        {
          key: p.key,
          onClick: () => setProfile(p.key),
          "aria-pressed": profile === p.key,
          "aria-label": `Select ${p.label} accessibility profile`,
          className: profile === p.key ? "active" : ""
        },
        p.label
      )
    ),
    React.createElement(
      "button",
      {
        onClick: () => setProfile("none"),
        "aria-label": "Reset to default profile",
        "aria-pressed": profile === "none"
      },
      "Default"
    )
  );
}