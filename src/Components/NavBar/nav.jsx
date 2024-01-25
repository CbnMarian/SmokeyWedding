import React from "react";
import "./nav.scss";

const Navigation = () => {
  return (
    <div className="container-menu">
      <ul className="nav-ul">
        <li className="nav-item">About</li>
        <li className="nav-item">Price</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
};

export default Navigation;
