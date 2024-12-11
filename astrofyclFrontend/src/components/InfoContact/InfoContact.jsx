import React from "react";
import {
  Container,
  InfoSection,
  Label,
  Info,
  MapContainer,
} from "./InfoContactStyles";
import TitleSections from "../TitleSections/TitleSections";
const InfoContact = () => {
  return (
    <Container>
      <InfoSection>
        <Label>Teléfono</Label>
        <Info>(+54) 123 456 789</Info>
      </InfoSection>

      <InfoSection>
        <Label>Dirección</Label>
        <Info>Calle Falsa 123, Ciudad, País</Info>
      </InfoSection>

      <InfoSection>
        <Label>Ubicación en Google Maps</Label>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.569487907794!2d-122.41941548468166!3d37.77492927975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f3f30f51f%3A0x4175a90b299e6280!2sSan%20Francisco%2C%20CA%2094110!5e0!3m2!1ses!2sus!4v1634829672191!5m2!1ses!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </InfoSection>
    </Container>
  );
};

export default InfoContact;
