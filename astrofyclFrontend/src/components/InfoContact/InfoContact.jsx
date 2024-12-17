import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { ContactWrapper } from "./InfoContactStyles";

const InfoContact = () => {
  return (
    <ContactWrapper>
      <h3>Contacto</h3>
      <div className="info-section">
        <h4>Teléfono</h4>
        <p>(+54) 123 456 789</p>
      </div>
      <div className="info-section">
        <h4>Dirección</h4>
        <p>Calle Falsa 123, Springfield</p>
      </div>
      <div className="info-section">
        <h4>Ubicación en Google Maps</h4>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.569487907794!2d-122.41941548468166!3d37.77492927975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f3f30f51f%3A0x4175a90b299e6280!2sSan%20Francisco%2C%20CA%2094110!5e0!3m2!1ses!2sus!4v1634829672191!5m2!1ses!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      <div className="social-icons">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </ContactWrapper>
  );
};

export default InfoContact;
