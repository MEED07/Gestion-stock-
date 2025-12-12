import React from "react";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé !");
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contactez-Nous</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="nom">Nom Complet *</label>
            <input type="text" id="nom" name="nom" required />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone *</label>
            <input type="tel" id="telephone" name="telephone" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="ville">Ville *</label>
            <input type="text" id="ville" name="ville" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Parlez-nous de votre épicerie et vos besoins..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Envoyer la Demande
          </button>

        </form>
      </div>
    </section>
  );
}
