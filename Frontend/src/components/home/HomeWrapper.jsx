import React from 'react';
import CommunitySection from './sections/CommunitySection';
import { SacredTemples } from './sections/SacredTemples';
import HeroSection from './sections/HeroSection';
import { MantraCounter } from './chantings/MantraCounter';
import { LiveDarshan } from './liveDharshan/liveTempleDharshan';
import { Bhajans } from './bhajan/DivineBhajan';
import { Festivals } from './festivalCalendar/festivalCalendar';
import { ScriptureLibrary } from './Scriptures/ScriptureLibrary';
import SacredVideosSection from './sections/SacredVideosSection';

const HomeWrapper = () => {
  return (
    <main>
      <HeroSection />
      <SacredTemples />
      <MantraCounter/>
      <LiveDarshan/>
      <Bhajans/>
      <SacredVideosSection />
      <Festivals />
      <ScriptureLibrary />
      <CommunitySection />
    </main>
  );
};

export default HomeWrapper;