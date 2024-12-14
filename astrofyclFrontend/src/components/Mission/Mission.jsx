import React from "react";
import { MissionWrapper } from "./MissionStyles";

export const Mission = () => {
  return (
    <MissionWrapper>
      <div className="mission-content">
        <h2>Nuestra Misión</h2>
        <p>
          En <strong>Astrofy</strong>, nos dedicamos a conectar el mundo con los productos más innovadores y de alta calidad, brindando soluciones confiables y personalizadas para nuestros clientes. 
        </p>
        <div className="values">
          <div className="value">
            <h2>🌍 Globalidad</h2>
            <p>
              Importamos lo mejor del mercado internacional para satisfacer las necesidades locales.
            </p>
          </div>
          <div className="value">
            <h2>🚀 Innovación</h2>
            <p>
              Adoptamos tecnologías y tendencias de vanguardia para garantizar productos únicos.
            </p>
          </div>
          <div className="value">
            <h2>🤝 Confianza</h2>
            <p>
              Nuestro compromiso es ofrecer calidad y crear relaciones duraderas con nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </MissionWrapper>
  );
};
