/* =========================================================
   TRANSPORTE JOSÉ LUIS - FUNCIONES DE INTERACCIÓN
   Edita aquí el número de WhatsApp y el comportamiento del formulario.
   ========================================================= */

/* IMPORTANTE:
   Reemplaza el valor por el número real, incluyendo indicativo de Colombia.
   Formato: 57 + número móvil de 10 dígitos, sin +, espacios ni guiones.
   Ejemplo ficticio: 573122114428
*/
const WHATSAPP_NUMBER = "573122114428";

/* Construye la URL de WhatsApp con el mensaje que recibe como parámetro. */
function buildWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${573122114428}?text=${encodedMessage}`;
}

/* Actualiza los enlaces que llevan a WhatsApp en toda la página. */
function configureWhatsAppLinks() {
  const defaultMessage = "Hola José Luis, vi su página web y necesito información sobre sus servicios de transporte de carga.";
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = buildWhatsAppUrl(defaultMessage);
  });
}

/* Menú desplegable para pantallas pequeñas. */
function configureMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Al seleccionar una sección, cerramos el menú móvil.
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Recoge los campos del formulario y crea un mensaje organizado para WhatsApp. */
function configureQuoteForm() {
  const form = document.getElementById("quoteForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el navegador recargue la página.

    // Si el número sigue con X, avisamos antes de abrir un enlace inválido.
    if (WHATSAPP_NUMBER.includes("X")) {
      feedback.textContent = "Falta configurar el número de WhatsApp en js/main.js.";
      return;
    }

    const data = new FormData(form);
    const message = [
      "Hola José Luis, quiero solicitar una cotización de transporte.",
      "",
      `Nombre: ${data.get("nombre")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Tipo de carga: ${data.get("tipoCarga")}`,
      `Origen: ${data.get("origen")}`,
      `Destino: ${data.get("destino")}`,
      `Peso aproximado: ${data.get("peso") || "Por confirmar"}`,
      `Fecha deseada: ${data.get("fecha") || "Por definir"}`,
      `Detalles: ${data.get("detalles") || "Sin detalles adicionales"}`
    ].join("\n");

    // Abre WhatsApp en una pestaña nueva; el usuario debe enviar el mensaje.
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    feedback.textContent = "Se abrió WhatsApp con tu solicitud. Verifica y envía el mensaje.";
  });
}

/* Coloca automáticamente el año actual en el pie de página. */
function setCurrentYear() {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

/* Inicializa todas las funciones cuando el HTML ya está cargado. */
document.addEventListener("DOMContentLoaded", () => {
  configureWhatsAppLinks();
  configureMobileMenu();
  configureQuoteForm();
  setCurrentYear();
});
