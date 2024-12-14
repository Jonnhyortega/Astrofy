import React from "react";
import { OurStory } from "../../components/OurStory/OurStory";
import { Mission } from "../../components/Mission/Mission";
import { AboutUsWrapper } from "./AboutUsStyles";

export const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <OurStory />
      <Mission />
    </AboutUsWrapper>
  );
};

export default AboutUs;
