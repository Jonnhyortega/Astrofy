import React from "react";
import { StoryContainer, StoryContent, FadeInSection } from "./OurStoryStyles";
import { Title } from "../AboutUsText/AboutUsTextStyled";

export const OurStory = () => {
  return (
    <StoryContainer>
      <FadeInSection>
        <Title>Nuestra Historia</Title>
        <StoryContent>
          Nuestra historia comenzó con una idea simple: crear ropa de alta
          calidad que no solo se vea bien, sino que también inspire a las
          personas a explorar el mundo que las rodea. Con una pasión por la
          aventura y un amor por el aire libre, nos propusimos diseñar una marca
          que refleje el espíritu de la exploración y la sofisticación.
          <br />
          <br />A lo largo de los años, hemos evolucionado y nos hemos adaptado
          a las tendencias globales, pero nuestro compromiso con la excelencia y
          nuestra dedicación a nuestros clientes han permanecido inalterados.
          Creemos que cada prenda cuenta una historia única, y estamos aquí para
          ayudarte a contar la tuya con elegancia y estilo.
        </StoryContent>
      </FadeInSection>
    </StoryContainer>
  );
};
