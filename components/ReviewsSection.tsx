import React, { useState, useEffect } from 'react';
import { MOCK_REVIEWS } from '../constants';
import { fetchGoogleReviews } from '../services/geminiService';
import { Review, Language } from '../types';

interface ReviewsSectionProps {
  language: Language;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [loading, setLoading] = useState(false);
  const [usingRealData, setUsingRealData] = useState(false);

  const t = {
    title: language === 'en' ? 'Patient Stories' : '来访者故事',
    subtitle: language === 'en' 
      ? 'Hear from those who have walked this path and found their way back to connection.'
      : '倾听那些走过这段旅程并找回情感连接的人们的心声。',
    subtitleReal: language === 'en'
      ? 'Authentic reviews sourced from Google Maps.'
      : '来自 Google Maps 的真实评价。',
    connecting: language === 'en' ? 'Connecting to reviews...' : '正在获取评价...',
    viewAll: language === 'en' ? 'View all reviews on Google Maps' : '在 Google Maps 上查看所有评价'
  };

  useEffect(() => {
    const initData = async () => {
      setLoading(true);
      try {
        // Try to fetch "real" reviews from Gemini/Google Maps
        const fetchedReviews = await fetchGoogleReviews();
        
        if (fetchedReviews.length > 0) {
          setReviews(fetchedReviews);
          setUsingRealData(true);
        }
      } catch (e) {
        console.error("Failed to initialize review data", e);
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, []);

  return (
    <section id="reviews" className="py-24 bg-stone-50 border-t border-olive-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-olive-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-olive-300 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 text-lg">
            {usingRealData ? t.subtitleReal : t.subtitle}
          </p>
        </div>

        {loading && !usingRealData ? (
           <div className="text-center mb-12 text-olive-500 animate-pulse font-serif italic">
             {t.connecting}
           </div>
        ) : null}

        {/* Individual Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => {
             const CardContent = (
                <>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex text-accent-orange text-sm">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.757.75.352 1.11l-4.192 3.821a.562.562 0 00-.172.544l1.233 5.378c.148.646-.554 1.15-1.043.88l-4.756-2.617a.562.562 0 00-.547 0l-4.756 2.617c-.49.27-1.192-.234-1.043-.88l1.233-5.378a.562.562 0 00-.172-.544l-4.192-3.821c-.405-.36-.193-1.066.352-1.11l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg>
                        ))}
                      </div>
                      {review.source === 'Google' && (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 opacity-40 grayscale group-hover:grayscale-0 transition-all" />
                      )}
                    </div>
                    <p className="text-stone-600 mb-6 italic leading-relaxed line-clamp-4 font-serif">"{review.text}"</p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-stone-100 pt-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center text-olive-700 font-bold font-serif shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">{review.author}</p>
                      <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">{review.date}</p>
                    </div>
                  </div>
                </>
             );

             if (review.url) {
                 return (
                     <a 
                        key={review.id} 
                        href={review.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100 flex flex-col justify-between group cursor-pointer h-full"
                     >
                        {CardContent}
                     </a>
                 )
             }
             
             return (
                <div key={review.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col justify-between h-full">
                    {CardContent}
                </div>
             )
          })}
        </div>
        
        <div className="mt-16 text-center">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-olive-200 rounded-full text-olive-700 hover:bg-olive-50 hover:border-olive-400 font-bold uppercase tracking-widest text-xs transition-all">
                {t.viewAll}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;