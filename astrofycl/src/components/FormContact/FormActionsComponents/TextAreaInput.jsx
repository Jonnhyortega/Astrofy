import { ErrorMessage, Field } from "formik";
import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../FormContactStyles";
import { TextArea, ErrorStyled } from "../FormContactStyles";

const TextAreaInput = ({ name, label, isError }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field name={name} id={label} error={isError} as={TextArea} />
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default TextAreaInput;
