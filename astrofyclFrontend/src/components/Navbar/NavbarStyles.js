import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
  height: 100px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0);

  .container-icons {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    height: auto;
  }
`;

export const ProfileContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: 0.6s ease;
  z-index: 100;
  padding: 0 25px 0 0;
  font-size: 15px;
  font-family: var(--funnel);
  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }
  a:nth-child(1) {
    text-decoration: none;
    color: var(--orange);
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  span:nth-child(2) {
    font-size: 30px;
    color: var(--orange);
  }

  a:nth-child(3) {
    cursor: pointer;
    text-decoration: none;
    color: var(--orange);
    &:hover {
      color: red;
    }
  }
`;

export const ContainerLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  color: var(--orange);
  transition: color 0.3s ease;
  text-decoration: none;
  font-weight: 900;
  font-family: var(--funnel);
  &:hover {
    color: red;
  }
`;

export const CartIcon = styled.div`
  cursor: pointer;
  position: relative;
  color: var(--orange);
  margin: 20px 25px;

  @media (max-width: 768px) {
    margin: 20px 10px;
  }
  &:hover {
    color: red;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -13px;
  right: -12px;
  background-color: transparent;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8em;
  text-align: center;
  font-weight: 900;
`;

export const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  color: var(--orange);
  z-index: 2000;

  @media (max-width: 768px) {
    display: block;
  }
`;
