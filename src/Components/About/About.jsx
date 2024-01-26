import React from "react";
import "./About.scss";
import Swipper from "../swipper/swipper.jsx";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container-why-us">
        <div className="container-shadow">
          <h3>De ce să alegi mașina noastră de facut fum?</h3>
          <ul className="container-why-us_ul">
            <li className="container-why-us_ul_li">
              Efect dramatic și spectaculos pentru primul dans al mirilor.
            </li>
            <li className="container-why-us_ul_li">
              Creație ușoară și non-toxică pentru o experiență plăcută.
            </li>
            <li className="container-why-us_ul_li">
              Control total asupra intensității fumului pentru a se potrivi
              perfect cu atmosfera evenimentului tău.
            </li>
            <li className="container-why-us_ul_li">
              Personal specializat pentru instalare și asistență în timpul
              evenimentului.
            </li>
          </ul>
          <p>
            Transformă-ți nunta într-un basm de poveste cu ajutorul mașinii
            noastre de facut fum! Contactează-ne astăzi pentru a rezerva și
            aduce o notă de magie la cel mai frumos dans al vieții tale!
          </p>
        </div>
      </div>

      <Swipper />
    </section>
  );
};

export default About;
