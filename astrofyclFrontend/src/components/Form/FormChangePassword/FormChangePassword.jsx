import React, { useState } from "react";
import axios from "axios";
import { FormChangePasswordWrapper } from "./FormChangePasswordStyles";
import ModalAdvertising from "../../ModalAdvertising/ModalAdvertising";
import { CHANGE_PASSWORD, URL_API_BASE } from "../../../utils/api";
import { getUserDataFromStorage } from "../../../utils/userName";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { motion } from "framer-motion";

export default function FormChangePassword() {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showOldPw, setShowOldPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const token =
    localStorage.getItem("tokenAuth") ||
    sessionStorage.getItem("tokenAuth") ||
    "";

  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = getUserDataFromStorage("email");
    const currentPassword = e.target["old-pw"].value;
    const newPassword = e.target["new-pw1"].value;
    const confirmNewPassword = e.target["new-pw2"].value;

    if (newPassword !== confirmNewPassword) {
      setError("Las contraseñas nuevas no coinciden.");
      setLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8}$/;
    if (!passwordRegex.test(newPassword)) {
      setError(
        "La nueva contraseña debe tener exactamente 8 caracteres, una letra mayúscula y un número."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await axios.patch(
        `${URL_API_BASE}${CHANGE_PASSWORD}`,
        {
          email,
          password: currentPassword,
          newPassword,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setSuccessMessage("Contraseña cambiada con éxito.");
      setShowModal(true);
      setTimeout(() => {
        navigate("/");
        setShowButton(!showButton)
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : "Error interno del servidor";
      setModalText(errorMessage);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormChangePasswordWrapper>
      {showModal && (
        <ModalAdvertising
          text={modalText}
          work={() => setShowModal(false)}
          boolean={showButton}
        />
      )}
      {successMessage && (
        <ModalAdvertising
          text={successMessage}
          work={() => setSuccessMessage("")}
          boolean={!showButton}
        />
      )}
      {error && (
        <ModalAdvertising
          work={() => {
            setError(null);
          }}
          text={error}
          boolean={showButton}
        />
      )}
      <motion.form
        onSubmit={handleChangePassword}
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Cambiar contraseña</h3>

        <label htmlFor="old-pw">
          <input
            name="old-pw"
            type={showOldPw ? "text" : "password"}
            placeholder="Ingrese contraseña actual"
          />
          <span
            style={{
              color: showOldPw ? "var(--orange)" : "var(--orange-dark)",
            }}
            onClick={() => setShowOldPw(!showOldPw)}
          >
            <FontAwesomeIcon icon={showOldPw ? faEyeSlash : faEye} />
          </span>
        </label>
        <label htmlFor="new-pw1">
          <input
            name="new-pw1"
            type={showNewPw ? "text" : "password"}
            placeholder="Ingrese nueva contraseña"
          />
          <span
            style={{
              color: showNewPw ? "var(--orange)" : "var(--orange-dark)",
            }}
            onClick={() => setShowNewPw(!showNewPw)}
          >
            <FontAwesomeIcon icon={showNewPw ? faEyeSlash : faEye} />
          </span>
        </label>
        <label htmlFor="new-pw2">
          <input
            name="new-pw2"
            type={showNewPw ? "text" : "password"}
            placeholder="Reingrese la nueva contraseña"
          />
          <span
            style={{
              color: showNewPw ? "var(--orange)" : "var(--orange-dark)",
            }}
            onClick={() => setShowNewPw(!showNewPw)}
          >
            <FontAwesomeIcon icon={showNewPw ? faEyeSlash : faEye} />
          </span>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Cambiar"}
        </button>
      </motion.form>
    </FormChangePasswordWrapper>
  );
}
