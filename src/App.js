import React from "react";
import Hero from "./Components/Herosection/herosection";
import "./Components/Styles/body.css";
import Navigation from "./Components/NavBar/nav";
import About from "./Components/About/About";
import Footer from "./Components/footer/footer";
import Price from "./Components/price/price";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
