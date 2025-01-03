import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  tokenSesion: false,
  authorized: false,
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
      state.authorized = true;

      const userString = JSON.stringify(usuario);

      if (tokenSesion) {
        localStorage.setItem("tokenAuth", token);
        localStorage.setItem("user", userString);
      } else {
        sessionStorage.setItem("tokenAuth", token);
        sessionStorage.setItem("user", userString);
      }
    },
    logout(state) {
      state.token = null;
      state.tokenSesion = false;
      state.user = null;
      state.authorized = false;

      localStorage.removeItem("tokenAuth");
      localStorage.removeItem("user");
      sessionStorage.removeItem("tokenAuth");
      sessionStorage.removeItem("user");
    },
    setToken(state, action) {
      const { token } = action.payload;
      
      // Actualiza el estado del token
      state.token = token;

      // Guarda el nuevo token en el almacenamiento correspondiente
      if (state.tokenSesion) {
        localStorage.setItem("tokenAuth", token);
      } else {
        sessionStorage.setItem("tokenAuth", token);
      }
    },
    clearToken(state) {
      state.token = null; // Limpia el estado del token
    },
  },
});

export const { login, logout, setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
