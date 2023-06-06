import React, { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    // Scroll to top when the component mounts
    console.log("Menu component mounted");
    window.scrollTo(0, 0)

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");
    const rect = content.getBoundingClientRect();
    const isFixed = rect.top <= 0;

    if (isFixed) {
      menu.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
    }
  };

  const scrollToSection = (event, sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    event.preventDefault();
  };

  return (
    <nav id="menu" className="menu">
      <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
        About Me
      </a>
      <a href="#education" onClick={(e) => scrollToSection(e, "education")}>
        Education
      </a>
      <a href="#work" onClick={(e) => scrollToSection(e, "work")}>
        Works
      </a>
    </nav>
  );
}

export default Menu;
