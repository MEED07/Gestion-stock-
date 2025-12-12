// src/components/Description.jsx
import React from "react";

export default function Description() {
  return (
    <section className="benefits" id="avantages">
      <div className="benefits-content">
        <div className="benefits-text">
          <h2>Pourquoi Choisir StockPro Maroc?</h2>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <div>
              <h4>Spécialement Conçu pour le Maroc</h4>
              <p>Interface en darija et français, monnaie locale, adaptée aux habitudes des épiciers marocains</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <div>
              <h4>Économisez du Temps</h4>
              <p>Automatisez vos tâches répétitives et concentrez-vous sur votre clientèle</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <div>
              <h4>Réduisez les Pertes</h4>
              <p>Évitez les ruptures de stock et le surstockage grâce à nos alertes intelligentes</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <div>
              <h4>Support Local</h4>
              <p>Équipe basée au Maroc, disponible en arabe et français pour vous accompagner</p>
            </div>
          </div>
        </div>

        <div className="benefits-visual">
          <h3 style={{ textAlign: "center", marginBottom: "2rem", color: "#667eea" }}>
            Tableau de Bord Intuitif
          </h3>

          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              height: "300px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "3rem",
            }}
          >
            📊 📈 💼
          </div>
        </div>
      </div>
    </section>
  );
}
