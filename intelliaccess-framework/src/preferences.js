// Preference Manager: maps each accessibility profile to a concrete set of preferences.
export const defaultPreferences = {
  fontSize: "16px",
  fontFamily: "'Poppins', 'Segoe UI', sans-serif",
  letterSpacing: "normal",
  wordSpacing: "normal",
  lineHeight: "1.5",
  backgroundColor: "#ffffff",
  textColor: "#312c51",
  buttonSize: "normal",
  focusOutline: "3px solid #4834d4",
  reducedMotion: false,
  colourSafe: false,
};

export const profilePreferences = {
  none: { ...defaultPreferences },

  // Atkinson Hyperlegible: designed by the Braille Institute for low-vision readers
  lowVision: {
    ...defaultPreferences,
    fontFamily: "'Atkinson Hyperlegible', 'Segoe UI', sans-serif",
    fontSize: "21px",
    lineHeight: "1.7",
    textColor: "#000000",
    backgroundColor: "#ffffff",
    buttonSize: "large",
    focusOutline: "3px solid #000000",
  },

  // Lexend: designed to improve reading fluency
  dyslexia: {
    ...defaultPreferences,
    fontFamily: "'Lexend', 'Segoe UI', sans-serif",
    fontSize: "18px",
    letterSpacing: "0.5px",
    wordSpacing: "2px",
    lineHeight: "1.9",
    backgroundColor: "#fdf6ec",
    textColor: "#312c51",
  },

  // Colour-safe palette + shapes + text labels + border patterns
  colourBlind: {
    ...defaultPreferences,
    textColor: "#1a1a2e",
    backgroundColor: "#ffffff",
    focusOutline: "3px solid #312c51",
    colourSafe: true,
  },

  // Verdana: wide, open letterforms, easy to read
  elderly: {
    ...defaultPreferences,
    fontFamily: "Verdana, Geneva, sans-serif",
    fontSize: "21px",
    lineHeight: "1.8",
    buttonSize: "large",
    focusOutline: "3px solid #312c51",
    reducedMotion: true,
  },
};

export function getPreferencesForProfile(profile) {
  return profilePreferences[profile] || profilePreferences.none;
}