import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const email = 'emilianosilva25@gmail.com';
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  // Replace these with your EmailJS data or set env vars VITE_EMAILJS_* in .env
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  useEffect(() => {
    // Inicializa EmailJS si configuraste la public key
    if (PUBLIC_KEY && !PUBLIC_KEY.includes('your_')) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        console.warn('Error inicializando EmailJS', err);
      }
    }
  }, []);

  const sendWithEmailJS = async () => {
    setStatus('sending');
    const templateParams = {
      from_name: name || 'Anon',
      subject: subject || 'Contacto desde portfolio',
      message: message || '',
      to_email: email,
    };

    console.log('EmailJS: intentanto enviar', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, templateParams });

    // Validaciones básicas: si no configuraste service/template/public key, no intentes enviar con EmailJS
    if (SERVICE_ID.includes('your_') || TEMPLATE_ID.includes('your_')) {
      // fallback a mailto
      setStatus('error');
      setErrorMsg('EmailJS no está configurado (service/template). Se usará el cliente de correo como fallback.');
      window.location.href = buildMailto();
      return;
    }

    if (!PUBLIC_KEY || PUBLIC_KEY.includes('your_')) {
      setStatus('error');
      setErrorMsg('Public Key de EmailJS no configurada o inválida. Obtén la clave en https://dashboard.emailjs.com/admin/account');
      return;
    }

    try {
      // Pasar la public key explícitamente evita depender solo de init/build-time
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setName('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS error:', err);
      const msg = err && (err.text || err.message || JSON.stringify(err)) || 'Error desconocido';
      setErrorMsg(msg);
      setStatus('error');
    }
  };

  const buildMailto = () => {
    const mailSubject = subject || 'Contacto desde portfolio';
    const bodyLines = [];
    if (name) bodyLines.push(`Nombre: ${name}`);
    if (message) bodyLines.push('');
    if (message) bodyLines.push(message);
    bodyLines.push('');
    bodyLines.push('Enviado desde mi portfolio');
    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${body}`;
  };

  return (
    <section id="contacto" className="contact">
      <div className="section-header">
        <p className="section-label">Contacto</p>
        <h2>Hablemos de tu próximo proyecto</h2>
      </div>

      <div className="contact-card">
        <div className="contact-left">
          <p className="contact-copy">
            Si buscas un desarrollador que entregue soluciones reales y con estilo,
            envíame un mensaje. Estoy listo para ayudarte a construir algo
            memorable.
          </p>

          <form
            id="contact-form"
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
              // Si no configuraste EmailJS, usar mailto como fallback
              if (SERVICE_ID.includes('your_') || TEMPLATE_ID.includes('your_')) {
                window.location.href = buildMailto();
                return;
              }
              await sendWithEmailJS();
            }}
          >
            <input
              className="input"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Asunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="Escribe tu mensaje aquí"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-actions">
              <button
                className="button email"
                form="contact-form"
                type="submit"
                disabled={status === 'sending'}
                onClick={async (e) => {
                  // When clicking the external submit button, ensure form submit handler runs
                  if (SERVICE_ID.includes('your_') || TEMPLATE_ID.includes('your_')) {
                    // fallback to mailto; buildMailto uses current subject/message/name
                    window.location.href = buildMailto();
                    return;
                  }
                  await sendWithEmailJS();
                }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar correo'}
              </button>

              <a
                className="button whatsapp"
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
        </div>

        {status === 'success' && <p className="contact-status">Mensaje enviado correctamente.</p>}
          {status === 'error' && (
            <p className="contact-status">Error al enviar. {errorMsg || 'Intenta nuevamente.'}</p>
          )}
        {SERVICE_ID.includes('your_') && (
          <p className="contact-status">EmailJS no está configurado: se usará el cliente de correo como fallback.</p>
        )}

      </div>
    </section>
  );
}
