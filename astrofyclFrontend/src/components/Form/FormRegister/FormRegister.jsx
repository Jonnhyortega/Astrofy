import React, { useState } from "react";
import { RegisterForm } from "./FormRegisterStyles";
import { registerUser, verifyUser } from "../../../axios/axios";
import ModalAdvertising from "../../ModalAdvertising/ModalAdvertising";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";

export const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();

  const handleShowPw = () => setShowPw(!showPw);
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword1 = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const handleAuthModal = () => {
    navigate("/register-code-user");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      setError("Las contraseñas no coincidieron papito");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingrese un correo válido.");
      return;
    }
    if (name == "" || email == "" || password1 == "" || password2 == "") {
      setError("Por favor complete todos los campos");
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8}$/;
    if (!passwordRegex.test(password2)) {
      setError(
        "La contraseña debe tener exactamente 8 caracteres, una letra mayúscula y un número."
      );
      return;
    }
    setLoading(true);
    try {
      const response = await registerUser({
        name,
        email,
        password: password1,
      });
      console.log(response);
      handleAuthModal();
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      console.error("Error al registrar usuario:", error);
    } finally{
      setLoading(false)
    }
  };

  return (
    <RegisterForm id="form">
      <h3>Crear Cuenta</h3>
      <input
        type="text"
        placeholder="Nombre y apellido"
        onChange={handleName}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        onChange={handleEmail}
      />
      <label
        className="label-password"
        htmlFor="password1"
        style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
      >
        <input
          name="password1"
          type={showPw ? "text" : "password"}
          placeholder="Contraseña"
          onChange={handlePassword1}
          style={{ width: "70%" }}
        />
        <p onClick={handleShowPw}>
          {showPw ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </p>
      </label>
      <label
        className="label-password"
        htmlFor="password2"
        style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
      >
        <input
          name="password2"
          type={showPw ? "text" : "password"}
          placeholder="Contraseña"
          onChange={handlePassword2}
          style={{ width: "70%" }}
        />
        <p onClick={handleShowPw}>
          {showPw ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </p>
      </label>
      <button onClick={handleRegister}>
        {loading ? <Loader /> : "Iniciar"}
      </button>

      {error && (
        <ModalAdvertising
          work={() => {
            setError(null);
          }}
          text={error}
        />
      )}
      {/* {authModal && (
        <RedirectoToRegisterCode text={authMsgCode} work={handleAuthModal} />
      )} */}
    </RegisterForm>
  );
};

export default FormRegister;
