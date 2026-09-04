import React, { useState, useEffect } from 'react';
import { pageData } from '../data';
import { Star, Lock, ShieldCheck, Zap } from 'lucide-react';

function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [todayStr, setTodayStr] = useState('');

  useEffect(() => {
    setTodayStr(new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }));
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="bg-[#d9441a] text-white text-xs md:text-sm font-bold py-2 px-4 w-full text-center uppercase tracking-widest mb-10">
      EL PRECIO DE OFERTA TERMINA HOY {todayStr} EN {timeString} MIN
    </div>
  );
}

export function HeroSection() {
  const { hero } = pageData;
  return (
    <section 
      className="flex flex-col items-center pb-12 md:pb-16 relative"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(217, 68, 26, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 68, 26, 0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Urgency Banner */}
      <UrgencyBanner />

      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
          {hero.eyebrow}
        </p>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#2d201a] leading-[1.1] mb-6 md:mb-8 whitespace-pre-line text-center">
          <span className="inline-block bg-[#fae8e1] border border-[#f5cbbd] text-[#d9441a] px-3 md:px-4 py-1 md:py-2 rounded-2xl mb-2">
            {hero.title.split('\n')[0]}
          </span>
          {'\n' + hero.title.split('\n').slice(1).join('\n')}
        </h1>

        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-10">
          <img src={hero.heroImage} alt="Mapas Mentales" className="w-full h-auto object-cover rounded-3xl shadow-2xl" />
        </div>

        <p className="text-sm md:text-lg text-[#4a3a32] leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10 font-medium">
          {hero.description}
        </p>

        <a href="#pricing" className="inline-block bg-[#d9441a] hover:bg-[#bd3a15] text-white text-base md:text-xl font-black py-4 px-6 md:py-5 md:px-10 rounded-full shadow-[0_10px_25px_rgba(217,68,26,0.4)] transition-transform hover:scale-105 active:scale-95 mb-8 uppercase whitespace-pre-line leading-tight text-center">
          {hero.ctaText}
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="flex text-yellow-400 gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <p className="text-xs md:text-sm text-[#4a3a32] font-bold">
            {hero.socialProof}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-xs md:text-sm text-[#4a3a32] font-bold">
          <span className="flex items-center gap-1.5"><Lock size={16} className="text-[#d9441a]" /> {hero.guaranteeItems[0]}</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#d9441a]" /> {hero.guaranteeItems[1]}</span>
          <span className="flex items-center gap-1.5"><Zap size={16} className="text-[#d9441a]" /> {hero.guaranteeItems[2]}</span>
        </div>
      </div>
    </section>
  );
}
