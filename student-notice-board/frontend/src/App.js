import './App.css';
import Navbar from "./components/Navbar";
import Notices from "./pages/Notices";
import { AccessibilityProvider, PreferencePanel } from "intelliaccess-framework";

function App() {
  return (
    <AccessibilityProvider>
      <Navbar />
      <Notices />
      <PreferencePanel />
    </AccessibilityProvider>
  );
}

export default App;