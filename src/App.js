import React from "react";
import Hero from "./Components/Herosection/herosection";
import "./Components/Styles/body.css";
import Navigation from "./Components/NavBar/nav";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
