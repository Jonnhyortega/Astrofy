import React, { useState, useEffect } from "react";
import { RegisterForm } from "./FormRegisterStyles";
import { registerUser } from "../../../axios/axios";
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
  const [showButton, setShowButton] = useState(false);
  const [succes, setSucces] = useState(null);
  const [userRegistered, setUserRegistered] = useState(null);
  const handleShowPw = () => setShowPw(!showPw);
  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword1 = (event) => setPassword1(event.target.value);
  const handlePassword2 = (event) => setPassword2(event.target.value);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      setError("Las contraseñas no coincidieron.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log(showButton);
      setError("Por favor, ingrese un correo válido.");

      return;
    }
    if (name === "" || email === "" || password1 === "" || password2 === "") {
      setError("Por favor complete todos los campos.");
      setShowButton(true);

      return;
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

      setSucces(response.msg);
      setShowButton(false);
      setError(null);
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 403) {
          setUserRegistered(error.response.data.msg);
          setShowButton(false);
        } else if (error.response.data && error.response.data.errors) {
          setError(error.response.data.errors.map((err) => err.msg).join(", "));
        } else {
          setError(
            error.response.data.msg || "Error desconocido al registrar usuario."
          );
        }
      } else if (error.request) {
        setError("No se pudo conectar con el servidor. Intente más tarde.");
      } else {
        setError("Error desconocido al registrar usuario.");
      }
    } finally {
      setLoading(false);
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
      <label className="label-password" htmlFor="password1">
        <input
          name="password1"
          type={showPw ? "text" : "password"}
          placeholder="Contraseña"
          onChange={handlePassword1}
          style={{ width: "70%" }}
        />
        <p
          style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
          onClick={handleShowPw}
        >
          {showPw ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </p>
      </label>
      <label className="label-password" htmlFor="password2">
        <input
          name="password2"
          type={showPw ? "text" : "password"}
          placeholder="Reingrese la contraseña"
          onChange={handlePassword2}
          style={{ width: "70%" }}
        />
        <p
          style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
          onClick={handleShowPw}
        >
          {showPw ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </p>
      </label>
      <button onClick={handleRegister}>
        {loading ? <Loader /> : "Crear cuenta"}
      </button>

      {error && (
        <ModalAdvertising
          work={() => {
            setShowButton(false);
            setError(null);
          }}
          text={error}
          boolean={showButton}
        />
      )}

      {succes && (
        <ModalAdvertising
          work={() => {
            navigate("/register-code-user");
          }}
          text={succes}
          boolean={showButton}
        />
      )}

      {userRegistered && (
        <ModalAdvertising
          work={() => {
            navigate("/register-code-user");
          }}
          text={userRegistered}
          boolean={showButton}
        />
      )}
    </RegisterForm>
  );
};

export default FormRegister;
