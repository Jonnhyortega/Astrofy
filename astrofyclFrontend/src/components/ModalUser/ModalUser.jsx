import React, { useEffect, useState } from "react";
import { ModalUserWrapper, NameUserTitle } from "./ModalUserStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import { capitalizeFirstLetter } from "../../utils/UpperFirstLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function ModalUser({ nameUser, closeModal }) {
  const redirectTo = useNavigate();
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const handleLogout = () => {
    dispatch(logout());
    redirectTo("/login");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)"
              
            }}
          />

          <ModalUserWrapper
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 1000 }}
            transition={{ type: "spring", damping: 27, duration: 0.5 }}
          >
            {/* <span onClick={handleClose}>&times;</span> */}
            <ul>
              <div className="profile-name">
                {nameUser ? (
                  <NameUserTitle>
                    <FontAwesomeIcon icon={faUser} />
                    <p>{nameUser}</p>
                  </NameUserTitle>
                ) : null}
              </div>
              <li>{!nameUser && <a href="/login">Iniciar sesion</a>}</li>
              <li>{!nameUser && <a href="/register">Crear cuenta</a>}</li>
              <li>{nameUser ? <a href="/orders">Ver compras</a> : null}</li>
              <li>
                {nameUser ? (
                  <a href="/change-password">Cambiar contraseña</a>
                ) : null}
              </li>
              <li>
                {nameUser ? <a onClick={handleLogout}>Cerrar sesión</a> : null}
              </li>
            </ul>
          </ModalUserWrapper>
        </>
      )}
    </AnimatePresence>
  );
}

export default ModalUser;
