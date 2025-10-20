import React from 'react';
import HeroSection from './hero/HeroSection';
import { DailyPanchang } from './Panchang/DailyPanchang';
import { SpritualGods } from './SpritualEntities/spritualgods';
import { SacredTemples } from './temples/SacredTemples';
import { MantraCounter } from './chantings/MantraCounter';
import { LiveDarshan } from './liveDharshan/liveTempleDharshan';
import { Bhajans } from './bhajan/DivineBhajan';
import SacredVideosSection from './video/SacredVideosSection';
import { Festivals } from './festivalCalendar/festivalCalendar';
import { ScriptureLibrary } from './Scriptures/ScriptureLibrary';
import CommunitySection from './community/CommunitySection';

const HomeWrapper = () => {
  return (
    <main>
      <HeroSection />
      <DailyPanchang />
      <SpritualGods />
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