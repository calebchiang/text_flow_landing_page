import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HelpPage from "./pages/HelpPage";
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/help/onboarding" element={<OnboardingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
