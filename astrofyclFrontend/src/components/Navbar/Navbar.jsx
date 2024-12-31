import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavbarContainer,
  ContainerLinks,
  CartIcon,
  CartCount,
  NavLink,
  MobileMenuButton,
  ProfileContainer,
} from "./NavbarStyles";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Cart from "../Cart/CartComponent";
import { toggleHiddenCart } from "../../redux/cart/cartSlice";
import { getUserDataFromStorage } from "../../utils/userName";
import LogoNavbar from "../LogoNav/LogoNavbar";
import { capitalizeFirstLetter } from "../../utils/UpperFirstLetter";
import { logout } from "../../redux/auth/authSlice";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isScrollEffectActive, setIsScrollEffectActive] = useState(true);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  const searcherPath = useLocation();
  const userNameToRender = getUserDataFromStorage("name");

  useEffect(() => {
    let lastScrollY = window.scrollY; // Guardar el scroll inicial
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (isScrollEffectActive) {
        if (currentScrollY > lastScrollY && currentScrollY > 0) {
          setScrolling(true);
        } else if (currentScrollY < lastScrollY) {
          setScrolling(false);
        }
      }
  
      lastScrollY = currentScrollY; 
    };
  
    const handleResize = () => {
      setIsScrollEffectActive(window.matchMedia("(min-width: 769px)").matches);
    };
  
    handleResize();
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isScrollEffectActive]);
  

  const handleModalProfile = () => {
    if (hiddenCart) {
      dispatch(toggleHiddenCart);
    }
    if (!hiddenCart && !modalProfile) {
      dispatch(toggleHiddenCart());
    }
    setIsMenuOpen(false);
    setModalProfile(!modalProfile);
  };

  const toggleMenuMobile = () => {
    setModalProfile(false);
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrolling && isScrollEffectActive ? -40 : 0 }}
        exit={{ y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ position: "fixed", width: "100%", zIndex: 1000 }}
      >
        <NavbarContainer>
          <Cart />
          <ProfileContainer onClick={handleModalProfile}>
            {userNameToRender ? (
              <a href="/account">
                <FontAwesomeIcon icon={faGear} />
                {capitalizeFirstLetter(userNameToRender)}
              </a>
            ) : (
              <a href="/login">Iniciar sesión</a>
            )}
            <span>|</span>
            {userNameToRender ? (
              <a
                onClick={() => {
                  dispatch(logout());
                  setTimeout(() => {
                    window.location.assign("/login")
                  }, 100)
                }}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Cerrar sesión
              </a>
            ) : (
              <a href="/register">Crear cuenta</a>
            )}
          </ProfileContainer>

          <LogoNavbar />

          <ContainerLinks>
            <NavLink
              style={{
                borderBottom:
                  searcherPath.pathname === "/"
                    ? "1px solid var(--orange)"
                    : "none",
              }}
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              style={{
                borderBottom:
                  searcherPath.pathname === "/shop"
                    ? "1px solid var(--orange)"
                    : "none",
              }}
              to="/shop"
            >
              Tienda
            </NavLink>
            <NavLink
              style={{
                borderBottom:
                  searcherPath.pathname === "/about-us"
                    ? "1px solid var(--orange)"
                    : "none",
              }}
              to="/about-us"
            >
              Nosotros
            </NavLink>
            <NavLink
              style={{
                borderBottom:
                  searcherPath.pathname === "/contact"
                    ? "1px solid var(--orange)"
                    : "none",
              }}
              to="/contact"
            >
              Contacto
            </NavLink>
          </ContainerLinks>

          <div className="container-icons">
            <CartIcon
              onClick={() => {
                setIsMenuOpen(false);
                setModalProfile(false);
                dispatch(toggleHiddenCart());
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <CartCount>{cartItemsCount}</CartCount>
            </CartIcon>
            <MobileMenuButton onClick={toggleMenuMobile}>
              {isMenuOpen ? "✖" : "☰"}
            </MobileMenuButton>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <MobileMenu closeModal={toggleMenuMobile} key="menu-mobile" />
            )}
          </AnimatePresence>
        </NavbarContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
