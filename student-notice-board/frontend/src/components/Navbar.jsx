import { useAccessibility, AccessibilitySwitcher } from "intelliaccess-framework";

const labels = {
  none: "Default",
  lowVision: "Low Vision",
  dyslexia: "Dyslexia",
  colourBlind: "Colour Blind",
  elderly: "Elderly",
};

function Navbar() {
  const { profile } = useAccessibility();

  return (
    <nav className="navbar">
      <h2>Student Notice Board</h2>
      <p className="selector-label">Select your accessibility preference:</p>
      <AccessibilitySwitcher />
      <p className="active-indicator">
        Currently active: <strong>{labels[profile] || "Default"}</strong>
      </p>
    </nav>
  );
}

export default Navbar;