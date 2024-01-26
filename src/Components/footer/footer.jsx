import React from "react";
import "./footer.scss";
import logo from "../assets/CBN LOGO.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-footer">
        <div>
          <img src={logo} alt="logo/img" />
        </div>
        <div className="container-footer__text">
          <p>Copyright 2024 ©CMdevelopment</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
