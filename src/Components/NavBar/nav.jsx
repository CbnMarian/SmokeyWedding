import React from "react";
import "./nav.scss";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-menu">
      <ul className="nav-ul">
        <li className="nav-item" onClick={() => scrollToSection("about")}>
          About
        </li>
        <li className="nav-item" onClick={() => scrollToSection("price")}>
          Price
        </li>
        <li className="nav-item" onClick={() => scrollToSection("Contact")}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
