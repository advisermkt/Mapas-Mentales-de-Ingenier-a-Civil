import React from 'react';
import { pageData } from '../data';
import { Check } from 'lucide-react';

export function WhatYouGetSection() {
  const { whatYouGet } = pageData;
  return (
    <section className="bg-[#fcf5eb] py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-[#fae8e1] border border-[#f2cdb3] text-[#d9441a] font-black uppercase tracking-widest text-[10px] md:text-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
            {whatYouGet.tag}
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-[#2d201a] mb-4 md:mb-6">{whatYouGet.title}</h2>
          <p className="text-sm md:text-lg text-[#4a3a32] max-w-3xl mx-auto font-medium">{whatYouGet.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="rounded-2xl overflow-hidden drop-shadow-2xl bg-transparent">
              <img src={whatYouGet.image} alt="Product bundle" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="p-2">
              <h3 className="text-xl md:text-2xl font-black text-[#d9441a] mb-8 uppercase tracking-wide text-center lg:text-left">
                {whatYouGet.boxTitle}
              </h3>
              
              <ul className="space-y-4 mb-10">
                {whatYouGet.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white border border-[#f2cdb3] rounded-xl p-4 shadow-sm">
                    <div className="bg-[#fae8e1] rounded-full p-2 shrink-0">
                      <Check className="text-[#d9441a]" size={20} strokeWidth={3} />
                    </div>
                    <span className="text-[#2d201a] font-black text-base md:text-lg leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BonusesSection() {
  const { bonuses } = pageData;
  return (
    <section 
      className="bg-[#faf5f0] py-16 md:py-24 px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(217, 68, 26, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 68, 26, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black text-[#2d201a] mb-4 md:mb-6">
            {bonuses.title.split('incluidos')[0]}<span className="text-[#d9441a]">incluidos</span>
          </h2>
          <p className="text-sm md:text-xl text-[#4a3a32] max-w-3xl mx-auto font-medium">
            {bonuses.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16 pt-4">
          {bonuses.items.map((bonus, idx) => (
            <div key={idx} className="bg-white rounded-[24px] border border-[#f2cdb3] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col relative group">
              {bonus.tag && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#d9441a] to-[#ff6b4a] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-md z-10">
                  <span role="img" aria-label="fire" className="text-xs">🔥</span> {bonus.tag}
                </div>
              )}
              <div className="aspect-square bg-[#faf5f0] rounded-[16px] overflow-hidden relative mb-6 p-4 border border-[#fae8e1]">
                <img src={bonus.image} alt={bonus.title} className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-col flex-grow text-center">
                {bonus.title.includes(':') ? (
                  <>
                    <span className="inline-block bg-[#fff1e5] text-[#d9441a] text-xs font-black uppercase tracking-[0.15em] py-1 px-3 rounded-full mx-auto mb-3">
                      {bonus.title.split(':')[0]}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[#2d201a] mb-3 leading-snug">
                      {bonus.title.split(':').slice(1).join(':').trim()}
                    </h3>
                  </>
                ) : (
                  <h3 className="text-lg md:text-xl font-black text-[#2d201a] mb-3 leading-snug">{bonus.title}</h3>
                )}
                
                <p className="text-[#4a3a32] text-sm mb-6 flex-grow font-medium leading-relaxed">{bonus.description}</p>
                
                <div className="pt-4 border-t border-dashed border-[#f2cdb3]">
                  <p className="text-center text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span className="text-[#8c7a70] line-through font-bold">{bonus.value}</span>
                    <span className="text-[#d9441a] font-black uppercase tracking-wider bg-[#fff1e5] px-3 py-1 rounded-lg text-xs">
                      INCLUIDO GRATIS
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-dashed border-2 border-[#d9441a] rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto bg-white/50 backdrop-blur-sm">
          <p className="text-[#d9441a] font-black tracking-widest text-xs md:text-base uppercase mb-3">
            {bonuses.totalValueLabel}
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <span className="text-2xl md:text-5xl font-black text-[#4a3a32] line-through opacity-70">{bonuses.totalValueStrikethrough}</span>
            <span className="text-2xl md:text-4xl text-[#4a3a32]">→</span>
            <span className="text-3xl md:text-6xl font-black text-[#d9441a]">{bonuses.totalValueFree}</span>
          </div>
          <p className="text-[#4a3a32] font-medium text-sm md:text-lg">
            {bonuses.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
