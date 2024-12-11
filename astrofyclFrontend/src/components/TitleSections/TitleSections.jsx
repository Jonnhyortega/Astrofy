import React from "react";
import styled from "styled-components";
const TitleWrapper = styled.h3`
  font-size: 2em;
  font-weight: bold;
  position: absolute;
  top: 50px;
  font-family: var(--ubuntu);
`;
export const TitleSections = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default TitleSections;
