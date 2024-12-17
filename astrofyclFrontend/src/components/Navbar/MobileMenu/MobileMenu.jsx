import React from "react";
import { MobileMenuWrapper, MobileNavLink } from "./MobileMenuStyles";
import { motion } from "framer-motion";

export const MobileMenu = ({ closeModal }) => {
  return (
    <>
      <motion.div
        onClick={() => {
          closeModal();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1}}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      />
      <MobileMenuWrapper
        initial={{ translateX: 300 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: 300 }}
        transition={{ type: "tween", duration: 1 }}
      >
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
      </MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
