import React, { useEffect, useState } from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroButton, Content } from './HeroStyles';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>

      <Content $isVisible={isVisible}>
        <HeroTitle>ASTROFY</HeroTitle>
        <HeroSubtitle>Explora tu estilo exterior</HeroSubtitle>
        <HeroButton to={"/products"}>Ver productos</HeroButton>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
