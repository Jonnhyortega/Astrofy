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
import { useDispatch } from "react-redux";
import { logout } from "./redux/auth/authSlice";

function App() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const validarToken = async () => {
    try {
      const response = await validateToken();
      console.log(response)
      console.log("si arriba hay null es porque no hay token")
      return response;
    } catch (error) {
      setModal(true);

      if (error.message === "Token expirado") {
        console.log("Token expirado, redirigiendo al login...");
      } else {
        console.log("Otro error: ", error);
      }

      return error;
    }
  };

  useEffect(() => {
    validarToken();
  }, [pathname]);

  return (
    <Layout>
      <GlobalStyles />
      <Navbar />
      <Routes />
      <Footer />
      <CallToAction />
      {modal && (
        <ModalAdvertising
          text={"Token expirado, por favor vuelva a iniciar sesión"}
          work={() => {
            dispatch(logout());
            navigate("/login");
            setModal(!modal);
          }}
          boolean={false}
        />
      )}
    </Layout>
  );
}

export default App;
