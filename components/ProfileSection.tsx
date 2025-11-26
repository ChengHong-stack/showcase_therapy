import React from 'react';
import { Language } from '../types';

interface ProfileSectionProps {
  language: Language;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ language }) => {
  const t = {
    badge: language === 'en' ? 'Meet Your Counsellor' : '认识您的咨询师',
    title: 'Jovena',
    role: language === 'en' ? 'LKM Certified Counsellor' : 'LKM 认证咨询师',
    bio: language === 'en' 
      ? 'Jovena believes that every relationship has the potential to heal and grow. With a specialized focus on Asian family dynamics and modern relationship challenges, she guides clients through a journey of self-discovery and reconnection.'
      : 'Jovena 相信每一段关系都有疗愈和成长的潜力。她专注于亚洲家庭动态和现代关系挑战，引导来访者踏上自我发现和重新连接的旅程。',
    quote: language === 'en'
      ? '"When relationships clear up, moods smooth out, and days become warmer. I am here to help you navigate the complexities of connection."'
      : '“关系通了，心情顺了，日子暖了。我在这里帮助您理清复杂的情感连结。”',
    direct: language === 'en' ? 'Direct Contact' : '直接联系',
    connect: language === 'en' ? 'Connect' : '社交媒体',
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5]">
               {/* Decorative Orange Circle Background */}
              <div className="absolute top-8 right-8 inset-0 bg-accent-orange rounded-[2rem] transform translate-x-4 translate-y-4 z-0 opacity-80"></div>
              
              <img 
                src="../img/profile/Jovena_Lim_Photo1.jpg" 
                alt="Jovena - Counsellor" 
                className="relative z-10 w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="mb-8">
              <div className="inline-block px-4 py-1.5 bg-olive-100 text-olive-800 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                {t.badge}
              </div>
              <h2 className="text-5xl lg:text-6xl font-serif text-olive-900 mb-2 tracking-tight">
                {t.title}
              </h2>
              <p className="text-accent-orange font-bold uppercase tracking-[0.2em] text-sm">{t.role}</p>
            </div>
            
            <div className="prose prose-lg text-stone-600 mb-8 leading-relaxed">
              <p>
                {t.bio}
              </p>
            </div>
            
            <blockquote className="text-xl lg:text-2xl font-serif text-olive-700 mb-10 leading-relaxed italic border-l-4 border-accent-orange pl-6 py-2">
              {t.quote}
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-olive-100">
              <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-lg hover:bg-olive-50 transition-colors">
                <div className="w-12 h-12 bg-olive-100 group-hover:bg-accent-orange transition-colors rounded-full flex items-center justify-center text-olive-600 group-hover:text-white shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">{t.direct}</p>
                  <a href="tel:+14155550123" className="text-lg font-serif font-bold text-olive-900 hover:text-accent-orange transition-colors">
                    (415) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center text-olive-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">{t.connect}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-olive-800 hover:text-accent-orange transition-colors" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-olive-800 hover:text-accent-orange transition-colors" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-olive-800 hover:text-accent-orange transition-colors" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;