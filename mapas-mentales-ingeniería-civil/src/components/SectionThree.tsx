import React from 'react';
import { pageData } from '../data';
import { Check } from 'lucide-react';

export function IncludesSection() {
  const { includes } = pageData;
  return (
    <section className="bg-[#f3e8da] py-12 md:py-20 px-4 border-t border-[#ebd8c1]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black text-[#2d201a] mb-4 md:mb-6">{includes.title}</h2>
        <p className="text-sm md:text-lg text-[#4a3a32] font-medium max-w-3xl mx-auto mb-10 md:mb-16">{includes.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {includes.images.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white p-1 shadow-md mb-4 w-full aspect-[4/3] overflow-hidden">
                <img src={img.url} alt={img.label} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs font-bold text-[#4a3a32] uppercase tracking-wider text-center">{img.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoutineSection() {
  const { routine } = pageData;
  return (
    <section className="bg-[#f3e8da] py-12 md:py-20 px-4 border-y border-[#ebd8c1]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#d9441a] font-black uppercase tracking-widest text-xs md:text-sm mb-4">{routine.eyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-black text-[#2d201a] mb-4 md:mb-6">{routine.title}</h2>
          <p className="text-sm md:text-lg text-[#4a3a32] max-w-3xl mx-auto font-medium">{routine.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 mb-10 md:mb-16">
          {routine.points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 md:gap-4 p-2">
              <Check className="text-green-600 shrink-0 mt-0.5 md:mt-1" size={20} strokeWidth={3} />
              <p className="text-[#4a3a32] leading-relaxed text-sm md:text-base font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center">
          <a href="#pricing" className="inline-block bg-[#d9441a] hover:bg-[#bd3a15] text-white text-base md:text-xl font-black py-4 px-6 md:py-4 md:px-10 rounded-full shadow-[0_10px_25px_rgba(217,68,26,0.4)] transition-transform hover:scale-105 active:scale-95 mb-4 uppercase">
            {routine.ctaText}
          </a>
          <p className="text-[#2d201a] font-bold text-sm md:text-base">
            {routine.subCta}
          </p>
        </div>
      </div>
    </section>
  );
}
