import React from 'react';
import CommunitySection from './sections/CommunitySection';
import FeatureCards from './sections/FeatureCards';
import HeroSection from './sections/HeroSection';
import SacredRitualsSection from './sections/SacredRitualsSection';
import SacredVideosSection from './sections/SacredVideosSection';

const HomeWrapper = () => {
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

export default HomeWrapper;