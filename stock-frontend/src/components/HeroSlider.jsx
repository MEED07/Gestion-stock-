import React, { useEffect, useState } from "react";

const slidesData = [
  {
    title: "Gérez Votre Stock Intelligemment",
    text: "Une solution complète et intuitive pour optimiser la gestion de vos stocks en temps réel.",
    btn1: "Commencer Maintenant",
    btn2: "Découvrir Plus",
  },
  {
    title: "Automatisez Vos Processus",
    text: "Gagnez du temps avec notre système automatisé de réapprovisionnement.",
    btn1: "En Savoir Plus",
    btn2: "Voir la Démo",
  },
  {
    title: "Analyses en Temps Réel",
    text: "Prenez des décisions éclairées grâce à des tableaux de bord détaillés.",
    btn1: "Démarrer l'Essai",
    btn2: "Contacter l'Équipe",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="bg-animation">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      <div className="slider">
        {slidesData.map((slide, i) => (
          <div key={i} className={`slide ${i === index ? "active" : ""}`}>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <div className="slide-buttons">
                <a href="#" className="btn-primary">{slide.btn1}</a>
                <a href="#" className="btn-secondary">{slide.btn2}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
