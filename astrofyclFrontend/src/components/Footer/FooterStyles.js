import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  padding: 40px;
  background-color: black;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 0;
`;

export const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const FooterLink = styled(Link)`
  display: block;
  color: #bdc3c7;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  color: #bdc3c7;
  font-size: 24px;

  &:hover {
    color: #fff;
  }
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const PaymentCard = styled.img`
  width: 30px;
  height: 20px;
  background-color:white;
  padding: 10px;
  border-radius: 5px;
`;

export const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #7f8c8d;
  padding-top: 20px;
  font-size: 14px;
  color: #bdc3c7;
`;
