import React, { useEffect, useState } from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroButton, VideoBackground, Content } from './HeroStyles';
import videoBckg from '../../videos/videoBckg.mp4';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>
      <VideoBackground autoPlay loop muted>
        <source src={videoBckg} type="video/mp4" />
        Tu navegador no soporta el video.
      </VideoBackground>
      <Content $isVisible={isVisible}>
        <HeroTitle>ASTROFY</HeroTitle>
        <HeroSubtitle>Explora tu estilo exterior</HeroSubtitle>
        <HeroButton to={"/products"}>Ver productos</HeroButton>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
