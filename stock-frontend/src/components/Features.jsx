import React from "react";

export default function Features() {
  const features = [
    { icon: "📊", title: "Suivi en Temps Réel", text: "Surveillez vos niveaux de stock en temps réel." },
    { icon: "🔄", title: "Automatisation Complète", text: "Automatisez les commandes et transferts." },
    { icon: "📱", title: "Application Mobile", text: "Gérez votre stock partout." },
    { icon: "📈", title: "Analyses Avancées", text: "Dashboards et rapports détaillés." },
    { icon: "🔐", title: "Sécurité Maximale", text: "Données protégées par cryptage." },
    { icon: "🌐", title: "Multi-Entrepôts", text: "Gestion de plusieurs sites." },
  ];

  return (
    <section className="features" id="fonctionnalites">
      <h2 className="section-title">Fonctionnalités Principales</h2>
      <p className="section-subtitle">Tout ce dont vous avez besoin pour une gestion efficace</p>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
