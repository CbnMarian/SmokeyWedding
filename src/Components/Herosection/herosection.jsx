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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
