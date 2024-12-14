import React, { useState } from "react";
import { ModalWrapper } from "./RegisterStyles";
import { verifyUser } from "../../axios/axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import ModalAdvertising from "../../components/ModalAdvertising/ModalAdvertising";
import Loader from "../../components/Loader/Loader";

export const RegisterCode = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();

  const handleError = () => {
    setError(null);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const handleVerify = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingrese un correo válido.");
      return;
    }
    setLoading(true);

    try {
      const userVerify = await verifyUser({ email: email, code: code });
      alert(userVerify.data.msg);
      redirect("/perfil-data");
    } catch (error) {
      setError(error.response.data.msg);
      console.error(error.response.data.msg);
    } finally {
      setLoading(!loading);
    }
  };
  return (
    <ModalWrapper>
      <p>ingrese nuevamente el correo y el codigo que le enviamos al email</p>
      <div className="inputs">
        <input onChange={handleEmail} type="email" />
        <input onChange={handleCode} minLength="6" maxLength="6" type="text" />
      </div>
      <button onClick={handleVerify}>{loading ? <Loader /> : "Iniciar"}</button>
      {error && <ModalAdvertising text={error} work={handleError} />}
    </ModalWrapper>
  );
};
