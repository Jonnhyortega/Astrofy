import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart } from "../../redux/cart/cartSlice";
import {
  NavbarContainer,
  Logo,
  Small,
  ContainerLinks,
  CartIcon,
  CartCount,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  ProfileIcon,
} from "./NavbarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const redirectTo = useNavigate();
  const searcherPath = useLocation();
  const { pathname: path } = searcherPath; // Corregido

  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    dispatch(toggleHiddenCart());
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <Link to="/">ASTROFY</Link>
        </Logo>
        <Small>imports</Small>
        <ContainerLinks>
          <NavLink
            style={{ borderBottom: path === "/" ? "1px solid var(--orange)" : "none" }}
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            style={{ borderBottom: path === "/shop" ? "1px solid var(--orange)" : "none" }}
            to="/shop"
          >
            Tienda
          </NavLink>
          <NavLink
            style={{
              borderBottom: path === "/about-us" ? "1px solid var(--orange)" : "none"
            }}
            to="/about-us"
          >
            Nosotros
          </NavLink>
          <NavLink
            style={{
              borderBottom: path === "/contact" ? "1px solid var(--orange)" : "none",
            }}
            to="/contact"
          >
            Contacto
          </NavLink>
        </ContainerLinks>
        <CartIcon onClick={handleCartClick}>
          <FontAwesomeIcon icon={faCartShopping} />
          <CartCount>{cartItemsCount}</CartCount>
        </CartIcon>
        <ProfileIcon
          onClick={() => {
            redirectTo("/login");
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </ProfileIcon>
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </MobileMenuButton>
      </NavbarContainer>

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavLink to="/" onClick={toggleMenu}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/products" onClick={toggleMenu}>
          Shop
        </MobileNavLink>
        <MobileNavLink to="/about-us" onClick={toggleMenu}>
          About us
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={toggleMenu}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;