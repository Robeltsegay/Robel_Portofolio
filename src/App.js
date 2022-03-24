import React from "react";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
