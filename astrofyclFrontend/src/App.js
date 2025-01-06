import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { CallToAction } from "./components/WhatSappCalltoAction/CallToAction";
import { GlobalStyles } from "./styles/GlobalStyles";
import ModalAdvertising from "./components/ModalAdvertising/ModalAdvertising";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validateToken } from "./axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, setToken } from "./redux/auth/authSlice";
import Cart from "./components/Cart/CartComponent";

function App() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const token =
    localStorage.getItem("tokenAuth") || sessionStorage.getItem("tokenAuth");

  const validarToken = async () => {
    try {
      const response = await validateToken();
      dispatch(setToken({ token }));
    } catch (error) {
      setModal(true);

      if (error.message === "Token expirado") {
        dispatch(logout());
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (token) {
      validarToken();
    }
  }, [pathname]);

  return (
    <Layout>
      <GlobalStyles />
      <Cart />
      <Navbar />
      <Routes isLoggedIn={!!token} />
      <Footer />
      <CallToAction />
      {modal && (
        <ModalAdvertising
          text={"Token expirado, por favor vuelva a iniciar sesión"}
          work={() => {
            dispatch(logout());
            navigate("/login");
            setModal(false);
          }}
          boolean={false}
        />
      )}
    </Layout>
  );
}

export default App;
