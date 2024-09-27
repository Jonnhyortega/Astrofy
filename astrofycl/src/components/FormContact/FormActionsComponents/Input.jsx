import React from 'react'
import { InputSt, BoxInputSt, ErrorSt, LabelSt } from '../FormContactStyles'
import { ErrorMessage, Field } from "formik";

const Input = ({ name, label, type, isError }) => {
  return (
    <BoxInputSt>
        <LabelSt htmlFor={label}>{label}</LabelSt>
       <Field
        name={name}
        type={type}
        id={label}
        error={isError}
        as={InputSt}
      />
      <ErrorMessage name={name} component={ErrorSt}></ErrorMessage>
    </BoxInputSt>
  )
}

export default Input