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
                <span className="span-text">Pachet 1 - 700 lei</span>
                <br />
                - Fum greu.
                <br /> - Gheata carbonica pentru paharele de șampaniei la
                primirea invitatilor.
                <br /> - Mașina baloane săpun.
                <br /> - 4 dispozitive de iluminat fumul greu.
              </li>
              <li>
                <span className="span-text">Pachet 2 - 800 lei</span>
                <br />- Fum greu.
                <br />- Artificii vulcani 4 buc.
              </li>
              <li>
                <span className="span-text">Pachet 3 - 1000 lei</span>
                <br />
                - Fum greu.
                <br />- Gheata carbonica pentru paharele de șampaniei la
                primirea invitatilor .
                <br /> - Mașina baloane săpun.
                <br /> - 4 dispozitive de iluminat fumul greu.
                <br /> - Artificii vulcani 4 buc.
              </li>

              <li>
                La pachetele 1, 2 și 3 putem adaugă Baloane Explozive pentru
                prețul de +1000 lei.
                <br />
                La pachetele 4, 5 și 6 prețul baloanelor explozive este de 800
                lei.
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
