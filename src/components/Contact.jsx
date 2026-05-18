export default function Contact() {
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
        </div>
        <a className="button primary" href="mailto:emiliano@example.com">
          Enviar correo
        </a>
      </div>
    </section>
  );
}
