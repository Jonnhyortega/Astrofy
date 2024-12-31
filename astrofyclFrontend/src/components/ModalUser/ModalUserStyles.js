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
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  
  // * {
  //   border: 1px solid red;
  // }

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
    z-index: 1000;

    &:hover{
    color:red;
    }
  }
  ul {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    .profile-name {
      position: absolute;
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
  }
`;

export const NameUserTitle = styled.div`
  position: absolute;
  top: -80px;
  left:0;
  font-size: 15px;
  color: green;
  display: flex;
  gap: 10px;
  align-items: center;
  
  
  p {
    margin: 0;
    color: var(--orange);
    font-size: 20px;
  }
`;
