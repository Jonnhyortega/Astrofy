import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import { Purchase } from "../components/Purchase/Purchase";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { RegisterCode } from "../pages/RegisterCode/RegisterCode";
import { Orders } from "../pages/Orders/Orders";
import { ChangePasswordPage } from "../pages/ChangePasswordPage/ChangePasswordPage";
import MenuAccountPage from "../pages/MenuAccountPage/MenuAccountPage";
import AuthRoute from "./AuthRoutes";
import PublicRoute from "./PublicRoute";

const Routes = ({ isLoggedIn }) => {
  return (
    <ReactDomRoutes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Products />} />
      <Route path="*" element={<Home />} />
      <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AuthRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/register-code-user" element={<RegisterCode />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<MenuAccountPage />} />
      </Route>
    </ReactDomRoutes>
  );
};

export default Routes;
