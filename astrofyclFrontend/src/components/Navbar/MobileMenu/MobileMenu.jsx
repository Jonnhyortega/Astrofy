import React from "react";
import {
  MobileMenuWrapper,
  MobileNavLink,
  ProfileContainer,
} from "./MobileMenuStyles";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { getUserDataFromStorage } from "../../../utils/userName";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";
import { capitalizeFirstLetter } from "../../../utils/UpperFirstLetter";

export const MobileMenu = ({ closeModal }) => {
  const userNameToRender = getUserDataFromStorage("name");
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      />
      <MobileMenuWrapper
        initial={{ translateX: 300 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: 300 }}
        transition={{ type: "tween", duration: .5 }}
      >
        {/* <p>x</p> */}
        <MobileNavLink
          onClick={() => {
            closeModal();
          }}
          to="/"
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          onClick={() => {
            closeModal();
          }}
          to="/shop"
        >
          Shop
        </MobileNavLink>
        <MobileNavLink
          onClick={() => {
            closeModal();
          }}
          to="/about-us"
        >
          About us
        </MobileNavLink>
        <MobileNavLink
          onClick={() => {
            closeModal();
          }}
          to="/contact"
        >
          Contact
        </MobileNavLink>
        <ProfileContainer>
          {userNameToRender ? (
            <a href="/account">
              <FontAwesomeIcon icon={faGear} />
              {capitalizeFirstLetter(userNameToRender)}
            </a>
          ) : (
            <a href="/login">
              <FontAwesomeIcon icon={faUser} />
              Iniciar sesión
            </a>
          )}
          <span>|</span>
          {userNameToRender ? (
            <a
              onClick={() => {
                closeModal();
                dispatch(logout());
                setTimeout(() => {
                  window.location.assign("/login");
                }, 100);
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Cerrar sesión
            </a>
          ) : (
            <a href="/register">
              <FontAwesomeIcon icon={faUser} />
              Crear cuenta
            </a>
          )}
        </ProfileContainer>
      </MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
