import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav.tsx";
import Hero from "./components/Hero.tsx";
import Footer from "./components/Footers.tsx";
import About from "./components/About.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Tech from "./components/Tech.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <About />
    <Tech />
    <Portfolio />
    <Footer />
  </React.StrictMode>
);
