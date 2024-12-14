import React from "react";
import { Wrapper } from "../Register/RegisterStyles";
import FormRegister from "../../components/Form/FormRegister/FormRegister";

export const Register = () => {
  return (
    <Wrapper>
      <FormRegister />
      <div>
        <span>¿Ya tenés cuenta?</span>
        <a href="/login">Iniciar sesión</a>
      </div>

  
    </Wrapper>
  );
};

export default Register;
