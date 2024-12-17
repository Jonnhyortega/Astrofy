import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavbarContainer,
  ContainerLinks,
  CartIcon,
  CartCount,
  NavLink,
  MobileMenuButton,
  ProfileIcon,
} from "./NavbarStyles";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import Cart from "../Cart/CartComponent";
import { toggleHiddenCart } from "../../redux/cart/cartSlice";
import { getUserNameFromStorage } from "../../utils/userName";
import ModalUser from "../ModalUser/ModalUser";
import LogoNavbar from "../LogoNav/LogoNavbar";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  const searcherPath = useLocation();

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

  const userNameToRender = getUserNameFromStorage();
  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)
  );

  return (
    <NavbarContainer>
      <Cart />

      <AnimatePresence>
        {modalProfile && (
          <ModalUser
            closeModal={handleModalProfile}
            nameUser={userNameToRender}
          />
        )}
      </AnimatePresence>

      <LogoNavbar />

      <ContainerLinks>
        <NavLink
          style={{
            borderBottom:
              searcherPath.pathname == "/" ? "1px solid var(--orange)" : "none",
          }}
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          style={{
            borderBottom:
              searcherPath.pathname == "/shop"
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
              searcherPath.pathname == "/about-us"
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
              searcherPath.pathname == "/contact"
                ? "1px solid var(--orange)"
                : "none",
          }}
          to="/contact"
        >
          Contacto
        </NavLink>
      </ContainerLinks>

      <div className="container-icons">
        <ProfileIcon onClick={handleModalProfile}>
          <FontAwesomeIcon icon={faUser} />
        </ProfileIcon>
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
      </div>

      <MobileMenuButton onClick={toggleMenuMobile}>
        {isMenuOpen ? "✖" : "☰"}
      </MobileMenuButton>
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu closeModal={toggleMenuMobile} key="menu-mobile" />
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
