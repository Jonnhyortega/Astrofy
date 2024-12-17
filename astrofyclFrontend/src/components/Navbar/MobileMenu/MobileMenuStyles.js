import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export const MobileMenuWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 67px;
  right: -10px;
  width: 250px;
  height: 100vh;
  background-color: black;
  z-index: 1001;
  border: 1px solid var(--orange);
  border-radius: 5px;
`;

export const MobileNavLink = styled(Link)`
  padding: 15px 20px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, filter 0.3s ease;
  font-weight: bold;
  font-family: var(--funnel);

  &:hover {
    color: #ff9900;
    filter: drop-shadow(2px 1px 5px #ff9900);
  }
`;
