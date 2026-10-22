// Typography Engine
export function getTypographyStyles(preferences) {
  return {
    fontSize: preferences.fontSize,
    fontFamily: preferences.fontFamily,
    letterSpacing: preferences.letterSpacing,
    wordSpacing: preferences.wordSpacing,
    lineHeight: preferences.lineHeight,
  };
}

// Theme Engine
export function getThemeStyles(preferences) {
  return {
    backgroundColor: preferences.backgroundColor,
    color: preferences.textColor,
  };
}

// Interaction Engine
export function getInteractionStyles(preferences) {
  const isLarge = preferences.buttonSize === "large";
  return {
    button: {
      padding: isLarge ? "14px 26px" : "10px 18px",
      fontSize: isLarge ? "1em" : "0.9em",
    },
    focusOutline: preferences.focusOutline,
  };
}

// Colour-Safe Status (part of the Theme Engine)
// Default: status is shown by colour only.
// Colour-safe: Okabe-Ito palette + shape icon + text label + border pattern.
const defaultStatus = {
  urgent:   { color: "#e74c3c" },
  info:     { color: "#2ecc71" },
  reminder: { color: "#f39c12" },
};

const safeStatus = {
  urgent:   { color: "#D55E00", borderStyle: "solid",  icon: "▲", label: "Urgent" },
  info:     { color: "#0072B2", borderStyle: "dashed", icon: "●", label: "Info" },
  reminder: { color: "#A86400", borderStyle: "dotted", icon: "■", label: "Reminder" },
};

export function getStatusStyles(preferences, type) {
  const safe = preferences.colourSafe;
  const table = safe ? safeStatus : defaultStatus;
  const s = table[type] || table.info;

  return {
    cardStyle: {
      borderLeft: `${safe ? 8 : 4}px ${s.borderStyle || "solid"} ${s.color}`,
    },
    showBadge: safe,
    badge: { icon: s.icon, label: s.label, color: s.color },
  };
}

// Combines Typography + Theme for the page container
export function getAdaptiveStyles(preferences) {
  return {
    ...getTypographyStyles(preferences),
    ...getThemeStyles(preferences),
  };
}