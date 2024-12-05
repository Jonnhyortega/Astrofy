import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  @media (max-width: 768px) {
    margin-top: 30px;
    align-items: center;
    padding: 10px;

    button {
      padding: 3px 4px;
      font-size: 1.5em;
    }
  }


`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin: 0 15px;
`;

export const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-weight: 0;
  color: var(--greenFull1);
  font-size: 0.8em;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;

export const Name = styled.div`
  color: white;
  margin: 0;
  font-size: 1em;
`;

export const Price = styled.div`
  font-weight: 500;
  color: white;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin: 0 1em 0 0;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff9900;
  border-radius: 50px;
  height: 30px;
  padding-top: 6px;
  color: white;
`;
export const Quantity = styled.p`
  font-size: 1.1em;
  color: white;
  font-family: Roboto;
  align-self: center;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Button = styled.button`
  margin: 0 5px;
  font-size: 1.5rem;
  font-weight: 900;
  border: none;
  cursor: pointer;
  color: #ff9900;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  background: transparent;

  &:hover {
    color: grey;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 400px;
  background: black;
  border-radius: 8px;
  border: 2px solid #ff9900;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 16px;
    color: white;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;

  Button {
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 1s ease;

    &:first-child {
      background-color: #ff4d4d;
      color: white;
    }

    &:first-child:hover {
      background-color: #cc0000;
    }

    &:last-child {
      background-color: green;
    }

    &:last-child:hover {
      background-color: orange;
    }
  }
`;
