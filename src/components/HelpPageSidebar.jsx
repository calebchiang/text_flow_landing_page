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

    const elements = sections.map((section) =>
      document.getElementById(section.id)
    );
    elements.forEach((el) => el && observer.observe(el));

    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, [sections]);

  return (
    <div className="sticky top-20 w-60 h-fit border-l border-gray-300 px-4 py-2 mt-20">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`block py-2 text-gray-600 hover:text-black transition ${
            activeSection === section.id ? "font-bold text-black" : ""
          }`}
        >
          {section.title}
        </a>
      ))}
    </div>
  );
}
