import React, { useState } from 'react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = {
    tagline1: language === 'en' ? 'Stay True' : '真实自我',
    tagline2: language === 'en' ? 'Live Fulfilled' : '圆满人生',
    badgeTitle: language === 'en' ? 'Mental Health' : '心理健康',
    badgeSubtitle: language === 'en' ? 'Screening' : '筛查评估',
    badgeDetail: language === 'en' ? 'Worth RM150 • New Customer Only' : '价值 RM150 • 仅限新客户',
    brandSubtitle: language === 'en' ? 'Relationship Counselling' : '关系辅导中心',
    s1: language === 'en' ? 'couple relationship' : '情侣关系',
    s2: language === 'en' ? 'corporate relation' : '职场关系',
    s3: language === 'en' ? 'personal growth' : '自我成长',
    s4: language === 'en' ? 'emotional management' : '情绪管理',
    s1_zh: '情侣关系',
    s2_zh: '职场关系',
    s3_zh: '自我成长',
    s4_zh: '情绪管理',
    circle1: language === 'en' ? 'Relationship' : '关系',
    circle2: language === 'en' ? 'Counselling' : '辅导',
  };

  // South East Asian-specific imagery
  const images = {
    default: "../img/main.jpg", // Happy SEA/Asian Family
    couple: "../img/couple consel.jpeg", 
    corporate: "../img/corpo counsel.jpeg", // Asian Corporate Meeting
    personal: "../img/indiv_consel.jpeg", // SEA Woman Portrait
    emotional: "../img/growth.jpeg" // Emotional/Pensive Asian Woman
  };

  const [bgImage, setBgImage] = useState(images.default);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0 transition-all duration-700">
      
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          key={bgImage} // Key forces re-render for transition if using animation libs, here helpful for React diffing
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out"
        />
        {/* Gradient Overlay: Transparent on left (show faces) -> Solid Olive on right (for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-olive-900/40 via-olive-900/80 to-olive-900 lg:bg-gradient-to-r lg:from-black/10 lg:via-olive-800/80 lg:to-olive-900 duration-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* Left Side - Vertical Text & Tagline */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[40vh] lg:min-h-screen lg:pr-12 pointer-events-none">
           <div className="text-white drop-shadow-lg">
              <div className="flex gap-4 items-start select-none justify-center lg:justify-start">
                 <div className="writing-vertical text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-widest leading-tight opacity-95">
                    无遗憾
                 </div>
                 <div className="writing-vertical text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-widest leading-tight opacity-95 mt-12 md:mt-20">
                    不委屈
                 </div>
              </div>
              <div className="mt-8 lg:ml-2 text-center lg:text-left">
                 <h3 className="inline-block text-lg md:text-xl font-sans font-bold leading-snug tracking-wide uppercase border-l-4 border-accent-orange pl-4 bg-black/20 lg:bg-transparent py-2 lg:py-0 pr-4 rounded-r-lg lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none">
                   {t.tagline1} <br/> & {t.tagline2}
                 </h3>
              </div>
           </div>
        </div>

        {/* Right Side - Brand Content & Services Grid */}
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center relative pb-16 lg:pb-0">
            

            <div className="w-full flex flex-col items-center lg:items-start">
                {/* Logo Area */}
                <div className="mb-12 border-b border-olive-500/50 pb-8 text-center lg:text-left w-full">
                    <h1 className="text-6xl lg:text-8xl font-serif tracking-tight mb-2 text-white">Relive</h1>
                    <p className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-olive-200">{t.brandSubtitle}</p>
                </div>

                {/* Services Icons Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 w-full max-w-lg mx-auto lg:mx-0">
                    {/* Item 1 - Couple */}
                    <div 
                        className="flex flex-col items-center text-center group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                        onMouseEnter={() => setBgImage(images.couple)}
                        onMouseLeave={() => setBgImage(images.default)}
                    >
                        <div className="mb-4 text-accent-orange group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-serif mb-1 tracking-wide group-hover:text-accent-orange transition-colors">{t.s1_zh}</h4>
                        <p className="text-xs text-olive-200 uppercase tracking-widest opacity-80">{t.s1}</p>
                    </div>

                    {/* Item 2 - Corporate */}
                    <div 
                        className="flex flex-col items-center text-center group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                        onMouseEnter={() => setBgImage(images.corporate)}
                        onMouseLeave={() => setBgImage(images.default)}
                    >
                        <div className="mb-4 text-accent-orange group-hover:text-white transition-colors duration-300">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                             </svg>
                        </div>
                        <h4 className="text-xl font-serif mb-1 tracking-wide group-hover:text-accent-orange transition-colors">{t.s2_zh}</h4>
                        <p className="text-xs text-olive-200 uppercase tracking-widest opacity-80">{t.s2}</p>
                    </div>

                    {/* Item 3 - Personal Growth */}
                    <div 
                        className="flex flex-col items-center text-center group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                        onMouseEnter={() => setBgImage(images.personal)}
                        onMouseLeave={() => setBgImage(images.default)}
                    >
                        <div className="mb-4 text-accent-orange group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                               <path strokeLinecap="round" strokeLinejoin="round" d="M18 12h.008v.008H18V12zm-3 0h.008v.008H15V12zm-3 0h.008v.008H12V12z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-serif mb-1 tracking-wide group-hover:text-accent-orange transition-colors">{t.s3_zh}</h4>
                        <p className="text-xs text-olive-200 uppercase tracking-widest opacity-80">{t.s3}</p>
                    </div>

                    {/* Item 4 - Emotional */}
                    <div 
                        className="flex flex-col items-center text-center group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                        onMouseEnter={() => setBgImage(images.emotional)}
                        onMouseLeave={() => setBgImage(images.default)}
                    >
                        <div className="mb-4 text-accent-orange group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-serif mb-1 tracking-wide group-hover:text-accent-orange transition-colors">{t.s4_zh}</h4>
                        <p className="text-xs text-olive-200 uppercase tracking-widest opacity-80">{t.s4}</p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;