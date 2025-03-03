// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div >
      <h2>Contact</h2>
      <p>N'hésitez pas à me contacter via le formulaire ci-dessous ou par email.</p>
      {/* Exemple de formulaire de contact simple */}
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" className="form-control" id="name" placeholder="Votre nom" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Votre email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={3} placeholder="Votre message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
