'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el email
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-300 rounded">
          ¡Mensaje enviado exitosamente! Me pondré en contacto pronto.
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-white font-semibold mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
          placeholder="Tu nombre"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-white font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
          placeholder="tu@email.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-white font-semibold mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
          placeholder="Asunto del mensaje"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-white font-semibold mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
          placeholder="Tu mensaje..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
