import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../FormActionsComponents/Input";
import Submit from "../FormActionsComponents/Sumbit";
import { Form, FormBox, FormTitle, FormBoxInputs } from "./FormLoginStyles";

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inváilido")
    .required("Campo Requerido"),
  password: Yup.string().trim().required("Campo Requerido"),
});

const FormLogin = () => {
  const [seePw, setSeePw] = useState(false);
  const handleShowPW = () => {
    setSeePw(!seePw);
  };
  return (
    <FormBox>
      <FormTitle>Iniciar sesión</FormTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
          date: "",
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
                name="email"
                label="Correo Electrónico"
                type="email"
                isError={touched.email && errors.email}
              />
              <Input
                name="password"
                label="Contraseña"
                type={seePw ? "text" : "password"}
                isError={touched.password && errors.password}
              />
            </FormBoxInputs>
            <Submit text={"Iniciar sesion"} />
            <span className="showpw" onClick={handleShowPW}>
              {seePw ? "👤" : "👁️"}
            </span>
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormLogin;
