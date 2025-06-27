import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

export default function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "work", "contact"];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjusted the detection range to better catch the contact section
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 3
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-between items-center bg-neutral-900/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50 sm:fixed">
      <h2
        className={`text-3xl p-8 max-sm:p-5 cursor-pointer text-white overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? "opacity-100 w-[180px]" : "opacity-50 w-[60px]"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <span className="inline-block">{isExpanded ? "Bamson" : "B"}</span>
      </h2>

      <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <p
          onClick={() => {
            const introSection = document.getElementById("intro");
            if (introSection) {
              introSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className={`font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ${
            activeSection === "intro" ? "text-white" : ""
          }`}
        >
          Intro
        </p>
        <p
          onClick={() => {
            const workSection = document.getElementById("work");
            if (workSection) {
              workSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className={`font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ${
            activeSection === "work" ? "text-white" : ""
          }`}
        >
          Work
        </p>
        <p
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className={`font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ${
            activeSection === "contact" ? "text-white" : ""
          }`}
        >
          Contact
        </p>
      </nav>

      <HiMenu
        className="text-3xl text-white cursor-pointer mr-10 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <div
        className={`absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-md md:hidden
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <p
            onClick={() => {
              const introSection = document.getElementById("intro");
              if (introSection) {
                introSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
              setIsMobileMenuOpen(false);
            }}
            className={`font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ${
              activeSection === "intro" ? "text-white" : ""
            }`}
          >
            Intro
          </p>
          <p
            onClick={() => {
              const workSection = document.getElementById("work");
              if (workSection) {
                workSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
              setIsMobileMenuOpen(false);
            }}
            className={`font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ${
              activeSection === "work" ? "text-white" : ""
            }`}
          >
            Work
          </p>
          <p
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
              setIsMobileMenuOpen(false);
            }}
            className={`font-bold text-gray-400 hover:text-white transition-colors cursor-pointer ${
              activeSection === "contact" ? "text-white" : ""
            }`}
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}
