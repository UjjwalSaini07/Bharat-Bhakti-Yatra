import React from 'react';
import CommunitySection from '../components/sections/CommunitySection';
import FeatureCards from '../components/sections/FeatureCards';
import HeroSection from '../components/sections/HeroSection';
import SacredRitualsSection from '../components/sections/SacredRitualsSection';
import SacredVideosSection from '../components/sections/SacredVideosSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <SacredRitualsSection />
      <SacredVideosSection />
      <CommunitySection />
    </main>
  );
};

export default Home;