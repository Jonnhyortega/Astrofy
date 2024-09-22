import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import { MissionVision } from "../components/ContainerAboutUs/MissionVision";
import { OurStory } from "../components/ContainerAboutUs/OurStory";
import { AboutUsText } from "../components/ContainerAboutUs/AboutUsText";
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
    </ReactDomRoutes>
  );
};

export default Routes;
