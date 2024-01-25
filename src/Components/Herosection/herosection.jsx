import React from "react";
import "./herosection.scss";
const Hero = () => {
  return (
    <section className="container">
      <div className="container-bg">
        <div className="container-bg-overlay">
          <div className="container-text">
            <h1>Magia Dansului Tău</h1>
            <p>
              Bucură-te de un dans al mirilor plin de farmec și mister! La
              SomkeyDance, oferim servicii de închiriere a mașinii de facut fum,
              aducând o notă de magie și eleganță la momentul tău special. Cu
              ajutorul noii noastre tehnologii, vei crea un spectacol de
              neuitat, învăluit într-o ceață ușoară și plin de romantism.
              Transformă ringul de dans într-o scenă de basm și surprinde-ți
              invitații cu un moment unic și spectaculos.
            </p>
            <div className="container-why-us">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
