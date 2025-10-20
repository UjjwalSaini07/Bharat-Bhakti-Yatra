import React from 'react';
import CommunitySection from './sections/CommunitySection';
import { SacredTemples } from './sections/SacredTemples';
import HeroSection from './sections/HeroSection';
import { MantraCounter } from './chantings/MantraCounter';
import { LiveDarshan } from './liveDharshan/liveTempleDharshan';
import SacredRitualsSection from './sections/SacredRitualsSection';
import SacredVideosSection from './sections/SacredVideosSection';

const HomeWrapper = () => {
  return (
    <main>
      <HeroSection />
      <SacredTemples />
      <MantraCounter/>
      <LiveDarshan/>
      <SacredRitualsSection />
      <SacredVideosSection />
      <CommunitySection />
    </main>
  );
};

export default HomeWrapper;