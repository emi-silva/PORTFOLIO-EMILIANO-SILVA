import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Spinner from "./Spinner";

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.3, delay: i * 0.08 },
  }),
};

export default function Contact() {
  const email = 'emilianosilva25@gmail.com';
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  useEffect(() => {
    if (PUBLIC_KEY && !PUBLIC_KEY.includes('your_')) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        console.warn('Error inicializando EmailJS', err);
      }
    }
  }, [PUBLIC_KEY]);

  const sendWithEmailJS = async () => {
    setStatus('sending');
    const templateParams = {
      from_name: name || 'Anon',
      subject: subject || 'Contacto desde portfolio',
      message: message || '',
      to_email: email,
    };

    if (SERVICE_ID.includes('your_') || TEMPLATE_ID.includes('your_')) {
      setStatus('error');
      setErrorMsg('EmailJS no configurado. Se usará el cliente de correo.');
      window.open(buildMailto(), '_self');
      return;
    }

    if (!PUBLIC_KEY || PUBLIC_KEY.includes('your_')) {
      setStatus('error');
      setErrorMsg('Public Key de EmailJS no configurada.');
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setName('');
      setSubject('');
      setMessage('');
      setTimeout(() => setStatus(null), 4000);
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
    <motion.section
      id="contacto"
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-label">Contacto</p>
        <h2 className="section-title">Hablemos de tu próximo proyecto</h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p>
            Si buscas un desarrollador que entregue soluciones reales y con estilo,
            estoy listo para ayudar. Podés escribirme directamente o enviarme un mensaje
            por el formulario.
          </p>
          <div className="contact-socials">
            <a
              className="contact-social-link"
              href="https://wa.me/543413916033"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              className="contact-social-link"
              href="https://www.linkedin.com/in/emiliano-silva-28710b191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
              if (SERVICE_ID.includes('your_') || TEMPLATE_ID.includes('your_')) {
                window.open(buildMailto(), '_self');
                return;
              }
              await sendWithEmailJS();
            }}
          >
            <motion.input
              className="input"
              type="text"
              placeholder="Tu nombre"
              aria-label="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            />
            <motion.input
              className="input"
              type="text"
              placeholder="Asunto"
              aria-label="Asunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            />
            <motion.textarea
              className="textarea"
              placeholder="Escribe tu mensaje aquí"
              aria-label="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            />
            <motion.button
              className="button primary"
              type="submit"
              disabled={status === 'sending'}
              style={{ alignSelf: 'flex-start' }}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              {status === 'sending' ? (
                <><Spinner /> Enviando...</>
              ) : 'Enviar mensaje'}
            </motion.button>
          </form>

          {status === 'success' && <p className="contact-status success">✓ Mensaje enviado correctamente.</p>}
          {status === 'error' && (
            <p className="contact-status error">Error: {errorMsg || 'Intenta nuevamente.'}</p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
