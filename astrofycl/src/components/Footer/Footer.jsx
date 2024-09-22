import React from 'react';
import { 
  FooterContainer, 
  FooterSection, 
  FooterTitle, 
  FooterLink, 
  SocialIcons, 
  SocialIcon, 
  PaymentMethodsContainer, 
  PaymentCard, 
  FooterBottom 
} from './FooterStyles';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// imgs: payment methods
import Visa from '../../imgs/payments/visa.jpg';
import MasterCard from '../../imgs/payments/mastercard.jpg';
import Amex from '../../imgs/payments/amex.jpg';
import PayPal from '../../imgs/payments/paypal.jpg';
import MercadoPago from '../../imgs/payments/mercadopago.png';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Sobre Nosotros</FooterTitle>
        <FooterLink to="/about-us/our-story">Nuestra Historia</FooterLink>
        <FooterLink to="/about-us/mission-vision">Misión & Visión</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Atención al Cliente</FooterTitle>
        <FooterLink href="#">FAQs</FooterLink>
        <FooterLink href="#">Envíos & Devoluciones</FooterLink>
        <FooterLink href="#">Contáctanos</FooterLink>
        <FooterLink href="#">Política de Privacidad</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Seguinos</FooterTitle>
        <SocialIcons>
          <SocialIcon href="#" target='blank'><FaFacebook /></SocialIcon>
          <SocialIcon href="#" target='blank'><FaTwitter /></SocialIcon>
          <SocialIcon href="#" target='blank'><FaInstagram /></SocialIcon>
          <SocialIcon href="#" target='blank'><FaLinkedin /></SocialIcon>
        </SocialIcons>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Métodos de Pago</FooterTitle>
        <PaymentMethodsContainer>
          <PaymentCard src={Visa} alt="Visa" />
          <PaymentCard src={MasterCard} alt="MasterCard" />
          <PaymentCard src={Amex} alt="American Express" />
          <PaymentCard src={PayPal} alt="PayPal" />
          <PaymentCard src={MercadoPago} alt="Mercado Pago" />
        </PaymentMethodsContainer>
      </FooterSection>

      <FooterBottom>
        &copy; {new Date().getFullYear()} ASTROFY. Todos los derechos reservados.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
