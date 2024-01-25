import React from "react";
import Hero from "./Components/Herosection/herosection";
import "./Components/Styles/body.css";
import Navigation from "./Components/NavBar/nav";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}

export default App;
