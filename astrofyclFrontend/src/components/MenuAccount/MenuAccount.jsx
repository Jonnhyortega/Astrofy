import React, { useState } from "react";
import { MenuWrapper } from "./MenuAccountStyles";
import { getUserDataFromStorage } from "../../utils/userName";
import img from "../../imgs/profile-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { motion } from "framer-motion";
import { URL_API_BASE, URL_CHANGE_NAME } from "../../utils/api";

export default function MenuAccount() {
  const userNameToRender = getUserDataFromStorage("name");
  const userEmail = getUserDataFromStorage("email");

  const [newName, setNewName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);

  const handleChangeName = async () => {
    const token =
      localStorage.getItem("tokenAuth") || sessionStorage.getItem("tokenAuth");
    const user =
      JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));

    try {
      const response = await axios.patch(
        `${URL_API_BASE}${URL_CHANGE_NAME}`,
        {
          email: userEmail,
          name: newName,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );
      user.name = newName
      localStorage.setItem("user", JSON.stringify(user))
      sessionStorage.setItem("user", JSON.stringify(user))
      console.log("Nombre modificado:", response.data);
      console.log("Nombre modificado de STORAGE:", user);
      setNewName("");
      setIsEditingName(false);
    } catch (error) {
      console.error("Error al modificar el nombre:", error);
    }
  };

  return (
    <MenuWrapper>
      <div className="name-container">
        <img src={img} alt="Imagen de perfil" />
        <h2>
          <FontAwesomeIcon icon={faGear} /> Hola {userNameToRender}
        </h2>
      </div>
      <div className="container-options">
        <div className="options">
          <article onClick={() => window.location.assign("/orders")}>
            <a href="/orders">Ver historial de compras</a>
          </article>
          <article onClick={() => setIsEditingName(!isEditingName)}>
            <a>{isEditingName ? "Cancelar" : "Modificar nombre"}</a>
          </article>
          {isEditingName && (
            <motion.div
              className="edit-name"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="new-name">Introduce el nuevo nombre:</label>
              <input
                type="text"
                id="new-name"
                value={newName}
                maxLength={16}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleChangeName}>Confirmar</button>
            </motion.div>
          )}
          <article onClick={() => window.location.assign("/change-password")}>
            <a href="/change-password">Modificar contraseña</a>
          </article>
        </div>
      </div>
    </MenuWrapper>
  );
}
