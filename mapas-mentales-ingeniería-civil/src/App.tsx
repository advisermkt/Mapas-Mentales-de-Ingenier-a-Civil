/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { InsideSection, PainPointsSection } from './components/SectionTwo';
import { RoutineSection } from './components/SectionThree';
import { WhatYouGetSection, BonusesSection } from './components/SectionFour';
import { TestimonialsSection, PricingSection } from './components/SectionFive';
import { FaqSection, Footer } from './components/SectionSix';
import PurchaseNotification from './components/PurchaseNotification';

export default function App() {
  return (
    <div className="antialiased selection:bg-[#d9441a] selection:text-white flex flex-col min-h-screen">
      <PurchaseNotification />
      <HeroSection />
      <InsideSection />
      <PainPointsSection />
      <RoutineSection />
      <WhatYouGetSection />
      <BonusesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
