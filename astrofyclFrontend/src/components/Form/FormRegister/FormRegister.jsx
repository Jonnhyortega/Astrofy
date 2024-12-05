import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../FormActionsComponents/Input";
import Submit from "../FormActionsComponents/Sumbit";
import { Form, FormBox, FormTitle, FormBoxInputs } from "./FormRegisterStyles";

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
});

const FormRegister = () => {
  return (
    <FormBox>
      <FormTitle>Crear cuenta</FormTitle>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          date: "",
          email: "",
          cellphone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const formattedDate = new Date().toLocaleString("es-ES");
          const submissionData = {
            ...values,
            date: formattedDate,
          };
          console.log(submissionData);
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
                label="Correo Electrónico"
                type="email"
                isError={touched.email && errors.email}
              />
              <Input
                name="cellphone"
                label="Telefono"
                type="number"
                isError={touched.cellphone && errors.cellphone}
              />
            </FormBoxInputs>
            <Submit text={"Crear cuenta"} />
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormRegister;
