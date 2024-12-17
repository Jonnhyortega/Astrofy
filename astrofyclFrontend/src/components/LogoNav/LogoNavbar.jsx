import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    ont-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 3px;
    cursor: pointer;
    text-transform: uppercase;
    background: linear-gradient(135deg, #ff9900, #ff6600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 10px;

    &:hover {
      background: linear-gradient(135deg, #007bff, #00d084);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  small {
    color: red;
    bottom: 13px;
    left: 35px;
    letter-spacing: 5px;
    font-size: 0.6em;
    font-weight: 900;
    background: linear-gradient(135deg, #007bff, #00d084);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 568px) {
      font-size: 0.4em;
      left: 20px;
      bottom: 7px;
    }
  }

  @media (max-width: 568px) {
    font-size: 1rem;
  }
`;

export const Small = styled.small``;

function LogoNavbar() {
  return (
    <Logo>
      <a href="/">ASTROFY</a>
      <small>imports</small>
    </Logo>
  );
}
export default LogoNavbar;
