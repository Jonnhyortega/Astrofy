import React, { useEffect, useState } from "react";
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
  const [showButton, setShowButton]=useState(false)
  const redirect = useNavigate();

  const handleError = () => {
    setError(null);
    setLoading(false);
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
      setError(userVerify.data.msg);
      if (userVerify.data.msg === "Usuario verificado con éxito") {
        setTimeout(() => {
          redirect("/login");
        }, 2000); 
      }
    } catch (error) {
      setLoading(!loading);
      setError(error.response.data.msg);
      console.error(error.response.data.msg);
    } finally {
      setLoading(!loading);
    }
  };

  return (
    <ModalWrapper>
      <p>Verificar cuenta</p>
      <div className="inputs">
        <label htmlFor="email">
          Ingrese el correo
          <input name="email" onChange={handleEmail} type="email" />
        </label>
        <label htmlFor="code">
          Ingrese el codigo
          <input
            onChange={handleCode}
            minLength="6"
            maxLength="6"
            type="text"
          />
        </label>
      </div>
      <button className="button-verify" onClick={handleVerify}>
        {loading ? <Loader /> : "Verificar"}
      </button>
      {error && <ModalAdvertising text={error} work={handleError} boolean={showButton} />}
    </ModalWrapper>
  );
};
