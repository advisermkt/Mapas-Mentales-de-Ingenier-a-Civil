import React from 'react';
import { pageData } from '../data';
import { Star, Check, X } from 'lucide-react';

export function TestimonialsSection() {
  const { testimonials } = pageData;
  return (
    <section className="bg-[#fcf5eb] py-12 md:py-20 px-4 border-t border-[#f2e7d9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-[#2d201a] mb-4 md:mb-6">{testimonials.title}</h2>
          <p className="text-sm md:text-lg text-[#4a3a32] max-w-3xl mx-auto font-medium">{testimonials.subtitle}</p>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 pr-6 hover:![animation-play-state:paused]">
            {[...testimonials.items, ...testimonials.items].map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#f2cdb3] w-[320px] shrink-0 flex flex-col">
                <div className="flex text-[#d9441a] mb-4 gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-[#4a3a32] text-base mb-6 flex-grow font-medium leading-relaxed">"{t.text}"</p>
                <div className="border-t border-[#fae8e1] pt-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#f2cdb3]">
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[#2d201a] font-black text-sm">{t.author}</p>
                      <div className="bg-[#4caf50] rounded-full p-0.5" title="Compra verificada">
                        <Check className="text-white" size={10} strokeWidth={4} />
                      </div>
                    </div>
                    {t.degree && <p className="text-xs font-bold text-gray-500">{t.degree}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const { pricing } = pageData;
  
  return (
    <section id="pricing" className="bg-[#1c212a] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
        
        {/* Basic Plan */}
        <div className="bg-[#fcfaf7] rounded-3xl p-6 md:p-10 flex flex-col w-full md:w-1/2 relative shadow-xl">
          <div className="flex justify-center mb-8 md:mb-12">
            <span className="bg-[#fff1e5] border border-[#f2cdb3] text-[#2d201a] text-sm font-bold px-5 py-1.5 rounded-full">
              {pricing.basic.tag}
            </span>
          </div>

          <div className="w-full flex justify-center mb-6 md:mb-8">
            <div className="w-56 md:w-64 bg-transparent">
              <img src={pricing.basic.image} alt="Plan Básico" className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-[#2d201a] text-center mb-8 md:mb-12">{pricing.basic.title}</h3>
          
          <ul className="space-y-3 md:space-y-4 mb-10 md:mb-16 flex-grow">
            {pricing.basic.points.map((p: any, i: number) => (
              <li key={i} className="flex items-start gap-3">
                {p.included ? (
                  <Check className="text-[#d9441a] shrink-0 mt-0.5" size={20} strokeWidth={3} />
                ) : (
                  <X className="text-[#d9441a] shrink-0 mt-0.5 opacity-60" size={20} strokeWidth={3} />
                )}
                <span className={`text-base font-medium ${p.included ? 'text-[#4a3a32]' : 'text-gray-400'}`}>
                  {p.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#4a3a32] text-xs md:text-sm font-medium mb-2 md:mb-4">{pricing.basic.pricePrefix}</p>
            <p className="text-5xl md:text-6xl font-black text-[#1c212a] mb-2 md:mb-4">{pricing.basic.price}</p>
            <p className="text-[#4a3a32] text-xs md:text-sm font-medium">{pricing.basic.priceSuffix}</p>
          </div>

          <div className="mb-6">
            <button className="w-full bg-white border border-[#e6d9c8] hover:border-[#d9441a] text-[#1c212a] text-base md:text-lg font-black py-4 rounded-2xl shadow-sm transition-all text-center">
              {pricing.basic.ctaText}
            </button>
            <div className="mt-5 flex justify-center opacity-90">
              <img src="https://www.dropbox.com/scl/fi/h89xfn1oo842za7t6my1k/pago-seguro-300x73-1-1.png?rlkey=1dfj9cdrs7qmhigyln6bj84ul&st=hx5qv09d&raw=1" alt="Métodos de pago seguros" className="w-[85%] max-w-[280px] h-auto object-contain" />
            </div>
          </div>

          <div className="bg-white border border-[#f2cdb3] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#d9441a] text-white text-xs font-black px-2 py-0.5 rounded-full">
                {pricing.basic.upsell.badge}
              </span>
              <span className="text-[#1c212a] font-black text-sm">
                {pricing.basic.upsell.title}
              </span>
            </div>
            <p className="text-[#4a3a32] text-xs font-medium leading-relaxed mb-3">
              {pricing.basic.upsell.desc}
            </p>
            <p className="text-[#d9441a] font-bold text-sm">
              {pricing.basic.upsell.linkText}
            </p>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#faebd8] rounded-3xl border-4 border-[#d9441a] p-6 md:p-10 flex flex-col w-full md:w-1/2 relative shadow-2xl mt-8 md:mt-0">
          {/* MÁS ELEGIDO Tag */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d9441a] text-white text-sm font-black px-6 py-1.5 rounded-full flex items-center gap-2 shadow-md">
            <Star fill="currentColor" size={14} />
            {pricing.premium.tagMostChosen}
          </div>

          <div className="flex justify-center mb-6 mt-4">
            <span className="bg-white text-[#2d201a] text-sm font-bold px-5 py-1.5 rounded-full shadow-sm">
              {pricing.premium.tagComplete}
            </span>
          </div>

          <div className="w-full flex justify-center mb-6 md:mb-8">
            <div className="w-64 md:w-72 bg-transparent">
              <img src={pricing.premium.image} alt="Plan Premium" className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-[#4a3a32] text-sm md:text-base font-medium mb-1">{pricing.premium.pricePrefix}</p>
            <p className="text-5xl md:text-7xl font-black text-[#d9441a] mb-2">{pricing.premium.price}</p>
            <p className="text-[#4a3a32] text-xs md:text-sm font-medium">{pricing.premium.priceSuffix}</p>
          </div>
          
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-black text-[#2d201a]">{pricing.premium.title}</h3>
          </div>

          <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
            {pricing.premium.points.map((p: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-[#2d201a] text-sm md:text-base font-black leading-snug">
                <Check className="text-[#d9441a] shrink-0 mt-0.5" size={20} strokeWidth={4} />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span role="img" aria-label="gift">🎁</span>
              <span className="text-[#d9441a] font-black text-sm">{pricing.premium.bonusBox.title}</span>
            </div>
            <ul className="space-y-3">
              {pricing.premium.bonusBox.items.map((item: any, i: number) => (
                <li key={i} className="text-[#2d201a] text-sm">
                  <span className="font-black mr-1">{item.bold}</span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full mt-auto">
            <button className="w-full bg-[#cc3b14] hover:bg-[#a62f10] text-white text-base md:text-xl font-black py-4 md:py-5 px-6 rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95 text-center leading-snug">
              {pricing.premium.ctaText}
            </button>
            <div className="mt-5 flex justify-center">
              <img src="https://www.dropbox.com/scl/fi/h89xfn1oo842za7t6my1k/pago-seguro-300x73-1-1.png?rlkey=1dfj9cdrs7qmhigyln6bj84ul&st=hx5qv09d&raw=1" alt="Métodos de pago seguros" className="w-[85%] max-w-[300px] h-auto object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
