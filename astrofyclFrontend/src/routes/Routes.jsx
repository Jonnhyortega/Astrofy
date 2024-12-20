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
const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Products />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/register-code-user" element={<RegisterCode />} />
    </ReactDomRoutes>
  );
};

export default Routes;
