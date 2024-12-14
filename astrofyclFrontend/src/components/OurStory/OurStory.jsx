import React from "react";
import { OurStoryWrapper } from "./OurStoryStyles";

export const OurStory = () => {
  return (
    <OurStoryWrapper>
      <div className="story-content">
        <h2>Nuestra Historia</h2>
        <p>
          Desde nuestros comienzos, <strong>Astrofy</strong> ha redefinido la manera de realizar importaciones en el mercado global. Nuestra pasión por la excelencia y la innovación nos impulsa a seguir creciendo.
        </p>
        <div className="values">
          <div className="value">
            <h2>📅 2015</h2>
            <p>Nacimos con el propósito de ofrecer productos de alta calidad a nivel global.</p>
          </div>
          <div className="value">
            <h2>🚢 2018</h2>
            <p>Ampliamos nuestra presencia en mercados internacionales con nuevas líneas de productos.</p>
          </div>
          <div className="value">
            <h2>🌟 2023</h2>
            <p>Nos consolidamos como un referente en confianza y vanguardia.</p>
          </div>
        </div>
      </div>
    </OurStoryWrapper>
  );
};
