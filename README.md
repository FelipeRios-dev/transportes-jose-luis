# Transporte José Luis — sitio web

Proyecto estático en HTML, CSS y JavaScript. No requiere frameworks ni instalación de dependencias.

## Estructura

- `index.html`: contenido y estructura de la página.
- `css/styles.css`: diseño visual, colores y adaptación a móviles.
- `js/main.js`: menú móvil, formulario de cotización y enlaces a WhatsApp.
- `assets/img/`: imágenes, logo y favicon.

## Antes de publicar

1. Abre `js/main.js` y reemplaza `57XXXXXXXXXX` por el número real de WhatsApp. Usa 57 + los 10 dígitos del celular, sin espacios ni símbolos.
2. Reemplaza `assets/img/camion-placeholder.svg` por una fotografía real del NKR. Si cambias el nombre, actualiza también la ruta de imagen en `index.html`.
3. Agrega fotos reales, logo, datos de contacto y zonas de cobertura confirmadas.
4. Revisa las afirmaciones comerciales: no se anuncian seguros, rastreo satelital, habilitaciones, certificaciones ni cobertura nacional garantizada porque no han sido confirmadas.
5. Abre `index.html` en el navegador para probarlo. Para publicarlo, sube la carpeta completa a un hosting estático (por ejemplo, GitHub Pages, Netlify o el hosting de tu dominio).

## Formulario

El formulario no almacena ni transmite datos a una base de datos. JavaScript prepara un mensaje y abre WhatsApp; la persona revisa y envía el mensaje manualmente.

## Personalización recomendada

- Cambia la paleta desde las variables `:root` en `css/styles.css`.
- Edita los textos directamente en `index.html`.
- Configura el teléfono y los mensajes en `js/main.js`.
- Sustituye las imágenes dentro de `assets/img/`.
