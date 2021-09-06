import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skills/Skills";
import Project from "./Project/Project";
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
