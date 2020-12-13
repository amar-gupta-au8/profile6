import React, { useState } from 'react';
import mountainBackground from './Stock-Mac-Wallpaper.jpg';
//  Style Components
import { BackgroundImg, Section, GlassSlider } from './styles';
// Components
import Header from '../../Components/Header';
import Content from '../../Components/Content';
import SocialMediaBtn from '../../Components/SocialMediaBtn';
import Navigation from '../../Components/Navigation';

const Homepage = () => {
  const [active, setActive] = useState(false);
  return (
    <Section>
      <Header active={active} setActive={setActive} />
      <GlassSlider active={active} />
      <Content active={active} />
      <BackgroundImg src={mountainBackground} alt='MountainBackground' />
      <SocialMediaBtn active={active} />
      <Navigation active={active} />
    </Section>
  );
};

export default Homepage;
