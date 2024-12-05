import React from "react";
import { ButtonSubmitStyled } from "../FormLogin/FormLoginStyles";

const Submit = ({ text }) => {
  return <ButtonSubmitStyled type="submit">{text}</ButtonSubmitStyled>;
};

export default Submit;
