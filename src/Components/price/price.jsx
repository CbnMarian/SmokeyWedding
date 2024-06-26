import React from "react";
import "./price.scss";
import map from "../assets/map.png";

const Price = () => {
  return (
    <section id="Price" className="container-price">
      <div className="container-price-box">
        <div className="container-price_text">
          <div className="container-price_text_title">PREȚURI ȘI PACHETE</div>
          <div>
            <ul className="price-ul">
              <li>
                <span className="span-text">Pachet 1 - 500 lei.</span>
                <br />- Fum greu.
                <br />
                Gheata carbonica pentru paharele de sampanie.
              </li>
              <li>
                <span className="span-text">Pachet 2 - 700 lei.</span>
                <br />
                - Fum greu.
                <br />- Artificii vulcani 4 buc.
                <br />
                Gheata carbonica pentru paharele de sampanie.
              </li>
              <li>
                <span className="span-text">Pachet 3 - 900 lei.</span>
                <br />
                - Fum greu.
                <br /> - 4 dispozitive de iluminat fumul greu.
                <br /> - Artificii vulcani 4-8 buc.
                <br />
                Gheata carbonica pentru paharele de sampanie.
              </li>
            </ul>
          </div>
        </div>
        <div className="container-price_map">
          <img src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};
export default Price;
