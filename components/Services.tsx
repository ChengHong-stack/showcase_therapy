import React from 'react';
import { SERVICES } from '../constants';
import { Language } from '../types';

interface ServicesProps {
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = {
    title: language === 'en' ? 'Therapeutic Offerings' : '专业服务项目',
    subtitle: language === 'en' 
      ? 'Tailored approaches for every stage of your relationship journey, designed to foster deep understanding and lasting change.'
      : '为您的关系旅程量身定制的方案，旨在促进深刻理解和持久改变。',
  };

  return (
    <section id="services" className="py-24 bg-olive-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-olive-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="group p-8 rounded-lg bg-white hover:bg-olive-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl border border-olive-100 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-serif font-bold text-olive-800 group-hover:text-white mb-4">{service.title[language]}</h3>
                <p className="text-stone-600 group-hover:text-olive-100 text-sm leading-relaxed mb-6">{service.description[language]}</p>
              </div>
              <div className="flex justify-between items-center border-t border-olive-100 group-hover:border-olive-500 pt-6 mt-auto">
                <span className="text-xs font-bold text-olive-600 group-hover:text-accent-orange uppercase tracking-widest">{service.duration}</span>
                <span className="text-lg font-serif font-semibold text-olive-800 group-hover:text-white">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;