import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleHiddenCart } from '../../redux/cart/cartSlice'; 
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
} from './NavbarStyles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

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
        <Logo> <Link to="/">ASTROFY</Link></Logo>
        <Small>imports</Small>
        <ContainerLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/about-us">Acerca de nosotros</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </ContainerLinks>
        <CartIcon onClick={handleCartClick}> 
          🛒
          <CartCount>{cartItemsCount}</CartCount>
        </CartIcon>
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </MobileMenuButton>
      </NavbarContainer>

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
        <MobileNavLink to="/products" onClick={toggleMenu}>Shop</MobileNavLink>
        <MobileNavLink to="/about-us" onClick={toggleMenu}>About us</MobileNavLink>
        <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
