import { createContext, useState, useContext, useEffect } from "react";
const AccessibilityContext = createContext();
export function AccessibilityProvider({ children }) {
  const savedProfile = localStorage.getItem("accessibilityProfile") || "none";
  const [profile, setProfile] = useState(savedProfile);
  useEffect(() => {
    localStorage.setItem("accessibilityProfile", profile);
    logProfileChange(profile);
  }, [profile]);
  // This function records every profile change into a simple log
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

  return (
    <AccessibilityContext.Provider value={{ profile, setProfile }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}