import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import Services from './components/Services';
import ReviewsSection from './components/ReviewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-sage-200 selection:text-sage-900">
      <Header />
      <main>
        <Hero />
        <ProfileSection />
        <Services />
        <ReviewsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;