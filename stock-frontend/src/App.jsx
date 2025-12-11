//App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Description from "./components/Description";
import Contact from "./components/Contact";
import "./global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Stats />
      <Features />
      <Description />
      <Contact />
      <Footer />
    </>
  );
}
