import React, { useState } from 'react';
import { Language } from '../types';

interface ContactFormProps {
  language: Language;
}

const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const [submitted, setSubmitted] = useState(false);

  const t = {
    title: language === 'en' ? 'Begin Your Journey' : '开启您的旅程',
    subtitle: language === 'en' 
      ? 'Please fill out this intake survey. It helps us understand your needs before our first session.' 
      : '请填写此预约前问卷。这有助于我们在首次会谈前了解您的需求。',
    formTitle: language === 'en' ? 'Intake Survey' : '预约问卷',
    name: language === 'en' ? 'Name' : '姓名',
    namePH: language === 'en' ? 'Your Name' : '您的名字',
    concern: language === 'en' ? 'Brief Concern' : '简述困扰',
    concernPH: language === 'en' ? 'What brings you here today?' : '您今天想咨询的主要问题是什么？',
    type: language === 'en' ? 'Type of Session' : '咨询类型',
    individual: language === 'en' ? 'Individual' : '个人咨询',
    couple: language === 'en' ? 'Couple' : '伴侣咨询',
    consult: language === 'en' ? '30min Consultation' : '30分钟初步咨询',
    submit: language === 'en' ? 'Submit Survey' : '提交问卷',
    sent: language === 'en' ? 'Survey Sent' : '问卷已发送',
    thankYou: language === 'en' 
      ? 'Thank you for sharing. We will review your details and contact you shortly.' 
      : '感谢您的分享。我们会查阅您的信息并尽快与您联系。',
    locationTitle: language === 'en' ? 'Our Location' : '中心地址',
    address1: '123 Wellness Blvd, Suite 400',
    address2: 'San Francisco, CA 94103',
    directions: language === 'en' ? 'Get Directions' : '获取路线',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <h2 className="text-4xl font-serif text-olive-900 mb-4">{t.title}</h2>
           <div className="w-24 h-1 bg-olive-300 mx-auto rounded-full"></div>
           <p className="mt-4 text-stone-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Survey Form Column */}
          <div className="bg-olive-50 rounded-xl p-8 md:p-12 shadow-lg border border-olive-100 flex flex-col justify-center h-full">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-olive-200 rounded-full flex items-center justify-center mx-auto mb-6 text-olive-700 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-olive-900 mb-2">{t.sent}</h3>
                <p className="text-stone-600">{t.thankYou}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-olive-900 font-bold border-b border-olive-200 pb-2">{t.formTitle}</h3>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-olive-800 mb-2 tracking-wide uppercase text-xs">{t.name}</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-olive-200 focus:border-olive-500 focus:ring-1 focus:ring-olive-500 bg-white outline-none transition-all placeholder:text-olive-300" placeholder={t.namePH} />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-olive-800 mb-3 tracking-wide uppercase text-xs">{t.type}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className="cursor-pointer">
                      <input type="radio" name="type" value="individual" className="peer sr-only" required />
                      <div className="text-center px-4 py-3 rounded-lg border border-olive-200 bg-white text-stone-600 peer-checked:bg-olive-600 peer-checked:text-white peer-checked:border-olive-600 transition-all text-sm font-bold">
                        {t.individual}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="type" value="couple" className="peer sr-only" />
                      <div className="text-center px-4 py-3 rounded-lg border border-olive-200 bg-white text-stone-600 peer-checked:bg-olive-600 peer-checked:text-white peer-checked:border-olive-600 transition-all text-sm font-bold">
                        {t.couple}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="type" value="30min" className="peer sr-only" />
                      <div className="text-center px-4 py-3 rounded-lg border border-olive-200 bg-white text-stone-600 peer-checked:bg-olive-600 peer-checked:text-white peer-checked:border-olive-600 transition-all text-sm font-bold">
                        {t.consult}
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="concern" className="block text-sm font-bold text-olive-800 mb-2 tracking-wide uppercase text-xs">{t.concern}</label>
                  <textarea id="concern" rows={4} required className="w-full px-4 py-3 rounded-lg border border-olive-200 focus:border-olive-500 focus:ring-1 focus:ring-olive-500 bg-white outline-none transition-all placeholder:text-olive-300" placeholder={t.concernPH}></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-accent-orange text-white rounded-lg font-bold uppercase tracking-widest hover:bg-orange-400 transition-all shadow-md mt-4 transform hover:-translate-y-1">
                  {t.submit}
                </button>
              </form>
            )}
          </div>

          {/* Map / Location Widget Column */}
          <div className="bg-olive-900 rounded-xl overflow-hidden shadow-lg border border-olive-800 flex flex-col h-full min-h-[500px]">
            {/* Map Frame */}
            <div className="flex-grow relative w-full h-full min-h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709923485612!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                title="Google Maps Location"
              ></iframe>
            </div>

            {/* Location Info */}
            <div className="p-8 bg-olive-900 text-white">
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {t.locationTitle}
              </h3>
              <div className="space-y-2 text-olive-100 mb-6 pl-8 border-l border-olive-700">
                <p className="text-lg">{t.address1}</p>
                <p className="text-lg">{t.address2}</p>
              </div>
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block w-full text-center py-3 border border-olive-500 rounded-lg text-olive-100 hover:bg-olive-800 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold"
              >
                {t.directions}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;