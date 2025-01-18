import React, { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [modalText, setModalText] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleShowPw = () => setShowPw(!showPw);
  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword1 = (event) => setPassword1(event.target.value);
  const handlePassword2 = (event) => setPassword2(event.target.value);
  const reset = () => {
    setShowModal(false);
    setModalText("");
    setLoading(false);
    setLoader(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password1 !== password2) {
      setShowModal(!showModal);
      setModalText("Las contraseñas no coinciden.");
      setShowButton(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setShowModal(true);
      setModalText("Por favor, ingrese un correo válido.");
      setShowButton(false);
      return;
    }
    if (!name || !email || !password1 || !password2) {
      setShowModal(true);
      setModalText("Por favor complete todos los campos.");
      setShowButton(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8}$/;

    if (!passwordRegex.test(password1)) {
      setShowModal(true);
      setModalText(
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número."
      );
      setShowButton(false);
      return;
    }

    try {
      const response = await registerUser({
        name,
        email,
        password: password1,
      });

      setShowModal(true);
      setModalText(response.msg);
      setShowButton(true);
      setLoader(true);
      
      setTimeout(() => {
        navigate("/register-code-user");
      }, 4000);
    } catch (error) {
      setShowModal(true);
      const msg = error.response.data.errors.map((err) => err.msg);

      if (
        msg.join("") ===
        `El correo ${email} no ha sido verificado. Se ha enviado nuevamente el código.`
      ) {
        setLoader(true);
        setShowButton(true);
        setModalText(
          msg.join("") + " Por favor verifique la cuenta a continuación"
        );

        setTimeout(() => {
          navigate("/register-code-user");
        }, 4000);
      } else if (msg.join("") == `El correo ${email} ya está registrado.`) {
        setShowButton(true);
        setModalText(
          msg.join("") + ". Será redirigido a la pagina de inicio de sesion."
        );
        setLoader(true);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
      setModalText(msg.join(""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterForm>
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
      <label className="label-password">
        <input
          type={showPw ? "text" : "password"}
          placeholder="Contraseña"
          onChange={handlePassword1}
        />
        <span
          style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
        >
          <FontAwesomeIcon
            icon={showPw ? faEyeSlash : faEye}
            onClick={handleShowPw}
          />
        </span>
      </label>
      <label className="label-password">
        <input
          type={showPw ? "text" : "password"}
          placeholder="Reingrese la contraseña"
          onChange={handlePassword2}
        />
        <span
          style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
        >
          <FontAwesomeIcon
            icon={showPw ? faEyeSlash : faEye}
            onClick={handleShowPw}
          />
        </span>

        <p></p>
      </label>
      <button onClick={handleRegister}>
        {loading ? <Loader /> : "Crear cuenta"}
      </button>

      {showModal && (
        <ModalAdvertising
          work={reset}
          text={modalText}
          boolean={showButton}
          loader={loader}
        />
      )}
    </RegisterForm>
  );
};

export default FormRegister;
