# 🚀 Portafolio — Emiliano Silva

Portafolio personal desarrollado para mostrar proyectos, experiencia y habilidades como desarrollador Full Stack. Este repositorio contiene una web estática creada con Vite y React, con un formulario de contacto integrado.

---

## ✨ Características

- 🎨 **Diseño moderno**: interfaz oscura con gradientes y microanimaciones.
- 📱 **Responsive**: adaptado a móviles y escritorio.
- 📧 **Formulario de contacto**: integrado con EmailJS (con fallback a mailto).
- 🧩 **Secciones**: Hero, Sobre mí, Habilidades, Proyectos y Contacto.
- ⚡ **Desarrollo rápido**: proyecto configurado con Vite para un entorno de desarrollo ágil.

---

## 🛠️ Tecnologías

- **React 19** — Biblioteca de UI.
- **Vite** — Bundler y servidor de desarrollo.
- **EmailJS (@emailjs/browser)** — Envío de correos desde el cliente (opcional).
- **CSS moderno** (estilos en `src/App.css`).

---

## 🚀 Inicio rápido

### Requisitos

- Node.js 18+ recomendado
- npm (incluido con Node.js)

### Instalación

```bash
git clone <tu-repo>
cd mi-portfolio
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre la app en el navegador (Vite mostrará la URL, por defecto http://localhost:5173).

### Producción

```bash
npm run build
npm run preview
```

---

## 📁 Estructura principal

- `index.html` — entrada HTML
- `src/main.jsx` — punto de entrada React
- `src/App.jsx`, `src/App.css` — componente raíz y estilos
- `src/components/` — componentes: `Contact.jsx`, `Header.jsx`, `Projects.jsx`, `Footer.jsx`, etc.
- `public/` — activos estáticos
- `package.json` — scripts y dependencias

---

## 📧 Formulario de contacto

El formulario usa EmailJS si configuras las variables de entorno (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`). Si no están configuradas, el formulario hace fallback a `mailto:` para abrir el cliente de correo.

Archivo relevante: [src/components/Contact.jsx](src/components/Contact.jsx)

---

## 📌 Scripts

```bash
npm run dev    # Inicia servidor de desarrollo (Vite)
npm run build  # Construye para producción
npm run preview# Previsualiza el build localmente
npm run lint   # Ejecuta linter (si está configurado)
```

---

## 📦 Despliegue

Puedes desplegar el sitio en Netlify, Vercel o cualquier servicio que sirva archivos estáticos tras ejecutar `npm run build`.

Recomendación rápida para Vercel:

1. Importa el repositorio en Vercel.
2. Establece `build command` a `npm run build` y `output directory` a `dist`.

---

## 📬 Contacto

- **Correo**: emilianosilva25@gmail.com
- **Teléfono**: +54 341 3 916033
- **Ubicación**: Rosario, Santa Fe, Argentina

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

Desarrollado con ❤️ por Emiliano Silva
