import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import { MissionVision } from "../components/ContainerAboutUs/Mission&Vission/MissionVision";
import { OurStory } from "../components/ContainerAboutUs/OurStory/OurStory";
import { AboutUsText } from "../components/ContainerAboutUs/AboutUsText/AboutUsText";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import { Purchase } from "../components/Purchase/Purchase";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us/" element={<AboutUs />}>
        <Route path="our-story" element={<OurStory />} />
        <Route path="mission-vision" element={<MissionVision />} />
        <Route path="about-us-text" element={<AboutUsText />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/purchase" element={<Purchase />} />
    </ReactDomRoutes>
  );
};

export default Routes;