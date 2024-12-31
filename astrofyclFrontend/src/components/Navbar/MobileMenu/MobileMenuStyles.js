import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MobileMenuWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  position: fixed;
  top: 67px;
  right: -10px;
  width: 300px;
  height: 90vh;
  background-color: black;
  z-index: 1001;
  border: 1px solid var(--orange);
  border-radius: 5px;

  
`;

export const MobileNavLink = styled(Link)`
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  text-align: left;
  width: 100px;
  transition: color 0.3s ease, filter 0.3s ease;
  font-weight: bold;
  font-family: var(--funnel);
  margin-left: 30px;
  margin-top: 20px;
  &:hover {
    color: #ff9900;
    filter: drop-shadow(2px 1px 5px #ff9900);
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  position: absolute;
  margin-bottom: 4px;
  bottom: 5px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  a:nth-child(1) {
    margin-left: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    &:hover {
      color: white;
      color: var(--orange);
    }
  }

  span:nth-child(2) {
    color: var(--orange);
  }

  a:nth-child(3) {
    cursor: pointer;
    text-decoration: none;
    color: white;
    display: flex;
    gap: 10px;
    align-items: center;
    &:hover {
      color: var(--orange);
    }
  }
`;
