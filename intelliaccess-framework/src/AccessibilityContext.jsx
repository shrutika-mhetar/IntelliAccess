import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import { getPreferencesForProfile } from "./preferences.js";

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const savedProfile = localStorage.getItem("accessibilityProfile") || "none";
  const [profile, setProfile] = useState(savedProfile);

  const preferences = useMemo(() => getPreferencesForProfile(profile), [profile]);

  useEffect(() => {
    localStorage.setItem("accessibilityProfile", profile);
    localStorage.setItem("accessibilityPreferences", JSON.stringify(preferences));
    logProfileChange(profile);
  }, [profile, preferences]);

  function logProfileChange(selectedProfile) {
    const logs = JSON.parse(localStorage.getItem("accessibilityLogs")) || [];
    const newEntry = {
      profile: selectedProfile,
      timestamp: new Date().toISOString()
    };
    logs.push(newEntry);
    localStorage.setItem("accessibilityLogs", JSON.stringify(logs));
    console.log("Logged:", newEntry);
  }

  return React.createElement(
    AccessibilityContext.Provider,
    { value: { profile, setProfile, preferences } },
    children
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}