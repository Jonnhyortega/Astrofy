import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Input from "../FormContact/FormActionsComponents/Input";
import Submit from "./FormActionsComponents/Sumbit";
import TextAreaInput from "./FormActionsComponents/TextAreaInput";
import { Form, FormBox, FormTitle, FormBoxInputs } from "./FormContactStyles";

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo Requerido"),
  surname: Yup.string().trim().required("Campo Requerido"),
  email: Yup.string()
    .email("Correo electrónico inváilido")
    .required("Campo Requerido"),
  cellphone: Yup.string()
    .matches(phoneRegex, "Número de celular inválido")
    .required("Campo Requerido"),
  comments: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
});

const FormTurn = () => {
  return (
    <FormBox>
      <FormTitle>¡Contactanos!</FormTitle>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          date: "",
          age: "",
          email: "",
          cellphone: "",
          comments: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <FormBoxInputs>
               <Input
              name="name"
              label="Nombre"
              type="text"
              isError={touched.name && errors.name}
            />
            <Input
              name="surname"
              label="Apellido"
              type="text"
              isError={touched.surname && errors.surname}
            />
            <Input
              name="email"
              label="Correo Electronico"
              type="email"
              isError={touched.email && errors.email}
            />
            <Input
              name="cellphone"
              label="Telefono"
              type="text"
              isError={touched.cellphone && errors.cellphone}
            /> 
            </FormBoxInputs>        
            <TextAreaInput
              name="comments"
              label="Escriba su consulta por favor"
              isError={touched.comments && errors.comments}
            />
            <Submit/>
        </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormTurn;
