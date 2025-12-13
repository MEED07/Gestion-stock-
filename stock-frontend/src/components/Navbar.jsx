import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="logo">StockPro</div>
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#fonctionnalites">Fonctionnalités</a></li>
          <li><a href="#avantages">Avantages</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#" className="cta-btn">Essai Gratuit</a>
      </div>
    </nav>
  );
}
