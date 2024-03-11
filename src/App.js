import React from "react";
import Hero from "./Components/Herosection/herosection";
import "./Components/Styles/body.css";
import Navigation from "./Components/NavBar/nav";
import About from "./Components/About/About";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
