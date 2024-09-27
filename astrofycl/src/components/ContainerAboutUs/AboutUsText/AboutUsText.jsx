import { useNavigate } from "react-router-dom";
import {
  ContainerAboutText,
  Background,
  Title,
  Description,
  ShopButton,
} from "./AboutUsTextStyled";
import astrofyOficceImg from "../../../imgs/astrofy-office.jpeg";

export const AboutUsText = () => {
  const hookTo = useNavigate();
  const handleShopRedirect = () => {
    hookTo("/products");
  };

  return (
    <ContainerAboutText>
      <Title>Sobre Nosotros</Title>
      <Background src={astrofyOficceImg} alt="Astrofy Office" />
      <Description>
        En ASTROFY, nos especializamos en ofrecer ropa de alta calidad que
        combina estilo y confort. Nuestra misión es proporcionarte las mejores
        prendas para que te sientas increíble en cualquier ocasión.
      </Description>
      <ShopButton onClick={handleShopRedirect}>Ver Tienda</ShopButton>
    </ContainerAboutText>
  );
};
