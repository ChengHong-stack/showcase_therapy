import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import Services from './components/Services';
import ReviewsSection from './components/ReviewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'cn' : 'en');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-olive-200 selection:text-olive-900">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Hero language={language} />
        <ProfileSection language={language} />
        <Services language={language} />
        <ReviewsSection language={language} />
        <ContactForm language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;