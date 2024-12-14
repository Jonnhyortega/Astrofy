import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  tokenSesion: false,
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token, tokenSesion, email } = action.payload;
      state.token = token;
      state.tokenSesion = tokenSesion;
      state.email = email;
      if (tokenSesion) {
        localStorage.setItem("tokenAuth", token);
        localStorage.setItem("user", email);
        console.log(`${email} y ${token} en local storage`)
      } else {
        sessionStorage.setItem("tokenAuth", token);
        console.log(`${email} y ${token} en sesion storage`)
        sessionStorage.setItem("user", email);
      }
    },
    logout(state) {
      state.token = null;
      state.tokenSesion = false;
      localStorage.removeItem("tokenAuth");
      sessionStorage.removeItem("tokenAuth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
