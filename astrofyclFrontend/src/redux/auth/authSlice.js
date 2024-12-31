import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  tokenSesion: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token, usuario, tokenSesion } = action.payload;

      state.token = token;
      state.tokenSesion = tokenSesion;
      state.user = usuario;

      const userString = JSON.stringify(usuario);

      if (tokenSesion) {
        localStorage.setItem("tokenAuth", token);
        localStorage.setItem("user", userString);
        console.log(`${usuario.email} y token guardados en localStorage`);
      } else {
        sessionStorage.setItem("tokenAuth", token);
        sessionStorage.setItem("user", userString);
        console.log(`${usuario.email} y token guardados en sessionStorage`);
      }
    },
    logout(state) {
      state.token = null;
      state.tokenSesion = false;
      state.user = null;

      localStorage.removeItem("tokenAuth");
      localStorage.removeItem("user");
      sessionStorage.removeItem("tokenAuth");
      sessionStorage.removeItem("user");

      console.log("Sesión cerrada y datos eliminados.");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
