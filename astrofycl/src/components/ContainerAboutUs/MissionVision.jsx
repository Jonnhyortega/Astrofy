import React from 'react';
import { 
  MissionVisionContainer, 
  MissionContent, 
  FadeInSection 
} from './MissionVisionStyles';
import { Title } from "./AboutUsTextStyled";

export const MissionVision = () => {
  return (
    <MissionVisionContainer>
      <FadeInSection>
        <Title>Nuestra Misión</Title>
        <MissionContent>
          Nuestra misión es inspirar y empoderar a las personas para explorar su estilo y el mundo que las rodea. Estamos comprometidos a crear ropa de alta calidad que no solo luzca bien, sino que también encarne el espíritu de aventura y descubrimiento.
        </MissionContent>
      </FadeInSection>
      
      <FadeInSection>
        <Title>Nuestra Visión</Title>
        <MissionContent>
          Nuestra visión es un mundo donde la moda y la exploración vayan de la mano. Nuestro objetivo es convertirnos en una marca líder en ropa para exteriores, reconocida por nuestros diseños innovadores, compromiso con la sostenibilidad y dedicación a la satisfacción del cliente.
        </MissionContent>
      </FadeInSection>
    </MissionVisionContainer>
  );
};
