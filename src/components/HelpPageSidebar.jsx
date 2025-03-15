import { useEffect, useState } from "react";

export default function HelpPageSidebar({ sections }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });
        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0.2 }
    );

    const elements = sections.flatMap((section) => [
      document.getElementById(section.id),
      ...(section.subsections || []).map((sub) => document.getElementById(sub.id)),
    ]);
    elements.forEach((el) => el && observer.observe(el));

    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, [sections]);

  return (
    <div className="sticky top-20 w-60 h-fit border-l border-gray-300 px-4 py-2 mt-20">
      {sections.map((section) => (
        <div key={section.id}>
          {/* Main Section */}
          <a
            href={`#${section.id}`}
            className={`block py-2 text-gray-600 hover:text-black transition ${
              activeSection === section.id ? "font-bold text-black" : ""
            }`}
          >
            {section.title}
          </a>
          
          {/* Subsections */}
          {section.subsections && (
            <div className="ml-4 border-gray-300 pl-3">
              {section.subsections.map((sub) => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  className={`block py-1 text-gray-500 hover:text-black transition ${
                    activeSection === sub.id ? "font-semibold text-black" : ""
                  }`}
                >
                  {sub.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
