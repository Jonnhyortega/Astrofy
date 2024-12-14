import styled, { keyframes } from "styled-components";


export const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 10px;
  right: 10px;
  text-decoration: none;
  z-index: 2;
`;

export const WhatsAppIcon = styled.img`
  width: 80px;
  height:80px;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15); 
  }
`;
