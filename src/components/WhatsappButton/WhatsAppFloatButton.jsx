import React from "react";
import "./WhatsAppFloatButton.css";

export default function WhatsAppFloatButton() {
  const phoneNumber = "523111929513"; // Cambia a tu número real de WhatsApp
  const message = encodeURIComponent(
    "Hola, estoy interesado en desarrollar un sitio web para mi negocio. ¿Podrían brindarme más información?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
