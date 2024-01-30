import React from "react";
import "./price.scss";
import map from "../assets/map.png";

const Price = () => {
  return (
    <section id="Price" className="container-price">
      <div className="container-price-box">
        <div className="container-price_text">
          <div>Preturi si pachete</div>
          <div>
            <ul className="price-ul">
              <li>
                <span className="span-text">
                  Pachet 1 - 700 lei - Fum greu -{" "}
                </span>
                <br />
                Gheata carbonica pentru paharele de șampaniei la primirea
                invitatilor - Mașina baloane săpun - 4 dispozitive de iluminat
                fumul greu
              </li>
              <li>
                {" "}
                <span className="span-text">Pachet 2 - 800 lei -</span> <br />
                Fum greu - Artificii vulcani 4 buc
              </li>
              <li>
                <span className="span-text">
                  Pachet 3 - 1000 lei - Fum greu -
                </span>{" "}
                <br />
                Gheata carbonica pentru paharele de șampaniei la primirea
                invitatilor - Mașina baloane săpun - 4 dispozitive de iluminat
                fumul greu - Artificii vulcani 4 buc
              </li>
              <li>
                <span className="span-text">
                  Pachet 4 - 1900 lei - Fum greu -
                </span>{" "}
                <br /> Gheata carbonica pentru paharele de șampaniei la primirea
                invitatilor - Artificii vulcani 4 buc - Oglinda magica 4 ore
              </li>
              <li>
                <span className="span-text">
                  Pachet 5 - 2000 lei - Fum greu -
                </span>{" "}
                <br /> Gheata carbonica pentru paharele de șampaniei la primirea
                invitatilor - Artificii vulcani 4 buc - 360 video both 4 ore
              </li>
              <li>
                <span className="span-text">
                  Pachet 6 - 3000 lei - Fum greu -
                </span>{" "}
                <br />
                Gheata carbonica pentru paharele de șampaniei la primirea
                invitatilor - Artificii vulcani 4 buc - 4 dispozitive de
                iluminat fumul greu - Oglinda magica 4 ore - 360 video both 4
                ore
              </li>
              <li>
                La pachetele 1, 2 și 3 putem adaugă Baloane Explozive <br />
                La prețul de +1000 lei La pachetele 4, 5 și 6 prețul baloanelor
                explozive este de 800 lei
              </li>
            </ul>
          </div>
        </div>
        <div className="container-price_map">
          {" "}
          <img src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};
export default Price;
