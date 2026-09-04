import React from 'react';
import { pageData } from '../data';
import { X } from 'lucide-react';

export function InsideSection() {
  const { inside } = pageData;
  return (
    <section className="bg-[#f0dfc8] py-12 md:py-20 border-y border-[#e6d1b8] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 mb-10 md:mb-16">
        <p className="text-[#d9441a] font-black uppercase tracking-widest text-xs md:text-sm mb-4">{inside.eyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-black text-[#2d201a] mb-4 md:mb-6">{inside.title}</h2>
        <p className="text-sm md:text-lg text-[#4a3a32] max-w-3xl mx-auto font-medium">{inside.description}</p>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 pr-6 py-4">
          {[...inside.images, ...inside.images].map((img, idx) => (
            <div key={idx} className="bg-white p-2 md:p-3 shadow-xl w-[280px] md:w-[380px] shrink-0 rounded-3xl transform transition-transform duration-300 hover:scale-105 border border-[#e6d1b8]">
              <img src={img.url} alt={`Preview ${idx}`} className="w-full h-auto object-contain rounded-2xl drop-shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PainPointsSection() {
  const { painPoints } = pageData;
  return (
    <section className="bg-[#fcf5eb] py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-[#d9441a] text-center mb-4 md:mb-6">{painPoints.title}</h2>
        <p className="text-sm md:text-lg text-[#2d201a] text-center mb-8 md:mb-12 font-bold">{painPoints.subtitle}</p>

        <div className="space-y-4 mb-8 md:mb-12">
          {painPoints.points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 md:gap-4 p-2">
              <X className="text-[#d9441a] shrink-0 mt-0.5 md:mt-1" size={20} strokeWidth={3} />
              <p className="text-[#4a3a32] leading-relaxed text-sm md:text-lg font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <p className="text-[#d9441a] font-bold text-base md:text-xl">
            {painPoints.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
