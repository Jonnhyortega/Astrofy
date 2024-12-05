import React from "react";
import { WrapperLogin } from "./LoginStyles";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
export const Login = () => {
  return (
    <WrapperLogin>
      <FormLogin />
      <div>
        <span>¿No tiene cuenta?</span>
        <a href="/register">Crear cuenta</a>
      </div>
    </WrapperLogin>
  );
};

export default Login;
