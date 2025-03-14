import HelpPageHeader from "../components/HelpPageHeader";
import OnboardingPageWelcome from "../components/OnboardingPageWelcome";
import BeforeYouStart from "../components/BeforeYouStart";
import Footer from "../components/Footer";
import HelpPageSidebar from "../components/HelpPageSidebar";
import GettingStarted from "../components/GetStarted";

export default function OnboardingPage() {

    const sections = [
        { id: "before-you-start", title: "Before You Start" },
        { id: "getting-started", title: "Getting Started"},
      ];
    
      return (
        <div>
        <HelpPageHeader />
        <div className="flex max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="flex-1">
          <OnboardingPageWelcome />
          <div id="before-you-start">
            <BeforeYouStart />
          </div>
          <div id="getting-started">
            <GettingStarted />
          </div>
          {/* Add other sections here */}
        </div>
        {/* Sidebar */}
        <HelpPageSidebar sections={sections} />
      </div>
        <Footer />
        </div>
    );
}
