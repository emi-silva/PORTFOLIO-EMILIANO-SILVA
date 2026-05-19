import { useState } from 'react';

export default function Contact() {
  const [contactStatus, setContactStatus] = useState('');
  const email = 'emilianosilva25@gmail.com';

  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${email}`;
    setTimeout(() => {
      setContactStatus('Si no se abre el cliente de correo, usa el botón de copiar email.');
    }, 300);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setContactStatus('Email copiado al portapapeles.');
    } catch (error) {
      setContactStatus(`Copia manualmente: ${email}`);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="section-header">
        <p className="section-label">Contacto</p>
        <h2>Hablemos de tu próximo proyecto</h2>
      </div>

      <div className="contact-card">
        <div>
          <p className="contact-copy">
            Si buscas un desarrollador que entregue soluciones reales y con estilo,
            envíame un mensaje. Estoy listo para ayudarte a construir algo
            memorable.
          </p>
          <div className="contact-actions">
            <a
              className="button primary"
              href={`mailto:${email}`}
              onClick={handleEmailClick}
            >
              Enviar correo
            </a>
            <button type="button" className="button secondary" onClick={handleCopyEmail}>
              Copiar email
            </button>
            <a
              className="button primary"
              href="https://wa.me/543413916033?text=Hola%20Emiliano%2C%20me%20interesa%20tu%20servicio%20de%20desarrollo%20web"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/emiliano-silva-28710b191"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          {contactStatus && <p className="contact-status">{contactStatus}</p>}
        </div>
      </div>
    </section>
  );
}
