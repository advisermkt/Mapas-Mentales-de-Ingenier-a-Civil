import React, { useState } from 'react';
import { pageData } from '../data';
import { Plus, Minus } from 'lucide-react';

export function FaqSection() {
  const { faq } = pageData;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#fcf5eb] py-12 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-[#2d201a] mb-4 md:mb-6">{faq.title}</h2>
          <p className="text-sm md:text-lg text-[#4a3a32] font-medium">{faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#f2e7d9] rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#2d201a] text-sm md:text-base pr-4">{item.q}</span>
                {openIdx === idx ? (
                  <Minus className="text-[#d9441a] shrink-0" size={20} />
                ) : (
                  <Plus className="text-[#4a3a32] shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-[#4a3a32] text-sm md:text-base font-medium leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { footer } = pageData;
  return (
    <footer className="bg-[#1c212a] text-gray-400 py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Title & Description */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight">{footer.title}</h2>
          <p className="text-sm md:text-base text-gray-300 font-medium max-w-lg mx-auto">
            {footer.description}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 md:mb-10 w-full max-w-3xl">
          <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed border border-gray-700/50 bg-gray-800/30 p-4 md:p-6 rounded-xl">
            {footer.disclaimer}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 md:mb-12 text-xs md:text-sm font-medium">
          {footer.links.map((link: string, idx: number) => (
            <a key={idx} href="#" className="text-gray-400 hover:text-[#d9441a] transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 font-medium">
            {footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
