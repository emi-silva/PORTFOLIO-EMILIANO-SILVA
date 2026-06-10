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
              href={`mailto:${email}`}
              aria-label="Email"
            >
              ✉️
            </a>
            <a
              className="contact-social-link"
              href="https://wa.me/543413916033"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a
              className="contact-social-link"
              href="https://www.linkedin.com/in/emiliano-silva-28710b191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              🔗
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
