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
                <span className="span-text">Pachet 1 - 550 lei.</span>
                <br />- Fum greu.
              </li>
              <li>
                <span className="span-text">Pachet 2 - 700 lei.</span>
                <br />
                - Fum greu.
                <br /> - Gheata carbonica pentru paharele de șampaniei la
                primirea invitatilor.
                <br /> - 4 dispozitive de iluminat fumul greu.
              </li>
              <li>
                <span className="span-text">Pachet 3 - 800 lei.</span>
                <br />- Fum greu.
                <br />- Artificii vulcani 4 buc.
              </li>
              <li>
                <span className="span-text">Pachet 4 - 900 lei.</span>
                <br />
                - Fum greu.
                <br />- Gheata carbonica pentru paharele de șampaniei la
                primirea invitatilor .
                <br /> - 4 dispozitive de iluminat fumul greu.
                <br /> - Artificii vulcani 4 buc.
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
