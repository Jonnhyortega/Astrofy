import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalUserWrapper = styled(motion.div)`
  width: 300px;
  height: 150px;
  position: absolute;
  top: 90px;
  right: -2px;
  background-color: black;
  border: 1px solid var(--orange);
  border-radius: 5px;
  border-radius: 5px;

  @media (max-width: 568px) {
    width: 100%;
    height: 100vw;
    border-radius: 0;
  }

  span {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 25px;
    cursor: pointer;
    z-index: 10000;
  }
  ul {
    height: 100%;
  }
  li {
    list-style: none;
    font-family: var(--funnel);
    
    a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-weight: 100;

      &:hover {
        color: var(--orange);
      }
    }
  }
`;

export const NameUserTitle = styled.p`
  font-size: 1.5em;
  color: var(--orange);
  text-decoration: underline;
`;
