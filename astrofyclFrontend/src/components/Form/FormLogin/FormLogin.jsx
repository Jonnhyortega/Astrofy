import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/authSlice";
import { fetchLogin } from "../../../axios/axios";
import ModalAdvertising from "../../ModalAdvertising/ModalAdvertising";
import { LoginForm } from "./FormLoginStyles";
import Loader from "../../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenSesion, setTokenSesion] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPw, setShowPw] = useState(false);
  const dispatch = useDispatch();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleToken = (e) => setTokenSesion(e.target.checked);
  const handleShowPw = () => setShowPw(!showPw);
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingrese un correo válido.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetchLogin({ email, password });
      console.log("Inicio de sesión exitoso", response);
      dispatch(
        login({
          token: response.data.token,
          usuario: response.data.usuario,
          tokenSesion,
        })
      );
      navigate("/")

    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setError(error.response ? error.response.data.msg : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm>
      <h3>Iniciar sesión</h3>
      <input
        onChange={handleEmail}
        type="text"
        placeholder="Ingrese correo"
        value={email}
        aria-label="Correo electrónico"
      />
      <label
        className="label-password"
        htmlFor="password"
        style={{ color: showPw ? "var(--orange-dark)" : "var(--orange)" }}
      >
        <input
          name="password"
          onChange={handlePassword}
          type={showPw ? "text" : "password"}
          placeholder="Ingrese contraseña"
          value={password}
          aria-label="Contraseña"
        />
        <p onClick={handleShowPw}>
          {showPw ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </p>
      </label>
      <button onClick={handleLogin} type="submit" disabled={loading}>
        {loading ? <Loader /> : "Iniciar"}
      </button>
      <div className="checkbox">
        <label className="label-check" htmlFor="sesion-login">
          <input
            checked={tokenSesion}
            onChange={handleToken}
            id="sesion-login"
            name="sesion-login"
            type="checkbox"
            aria-label="Mantener sesión iniciada"
          />
          <span className="custom-checkbox"></span>
          Mantener la sesión iniciada
        </label>
      </div>

      {error && <ModalAdvertising text={error} work={() => setError(null)} />}
    </LoginForm>
  );
}
