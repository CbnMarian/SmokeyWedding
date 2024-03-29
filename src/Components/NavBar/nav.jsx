import React from "react";
import "./nav.scss";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollOptions = {
        behavior: "smooth",
        block: sectionId === "about" ? "start" : "end",
      };
      section.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div className="container-menu">
      <ul className="nav-ul">
        <li className="nav-item" onClick={() => scrollToSection("about")}>
          Despre
        </li>
        <li className="nav-item" onClick={() => scrollToSection("Price")}>
          Prețuri
        </li>

        <li className="nav-item" onClick={() => scrollToSection("Contact")}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
