import { Review, ServiceItem } from './types';

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 5,
    text: 'Dr. Alistair has a wonderfully calming presence. After just three sessions, I felt more equipped to handle my anxiety than I have in years. The clinic atmosphere is so soothing.',
    date: '2 months ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Serenity+Space+Therapy+San+Francisco'
  },
  {
    id: '2',
    author: 'Michael Chen',
    rating: 5,
    text: 'I was skeptical about therapy, but the cognitive behavioral approach used here is practical and effective. Highly recommend for anyone dealing with work stress.',
    date: '1 month ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Serenity+Space+Therapy+San+Francisco'
  },
  {
    id: '3',
    author: 'Emily R.',
    rating: 4,
    text: 'Great experience. The scheduling is flexible and the office is very private and comfortable. Helped me through a difficult transition period.',
    date: '3 months ago',
    source: 'Direct'
  },
  {
    id: '4',
    author: 'David K.',
    rating: 5,
    text: 'Truly life-changing. The compassion and professional insight offered here are unmatched. I finally feel heard and understood.',
    date: '2 weeks ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Serenity+Space+Therapy+San+Francisco'
  },
  {
    id: '5',
    author: 'Anita Patel',
    rating: 5,
    text: 'A safe harbor in a storm. Thank you for the tools you have given me to rebuild my confidence.',
    date: '4 months ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Serenity+Space+Therapy+San+Francisco'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs, focusing on anxiety, depression, or personal growth.',
    duration: '50 mins',
    price: '$150'
  },
  {
    title: 'Couples Counseling',
    description: 'Guided sessions to improve communication, resolve conflict, and deepen connection.',
    duration: '60 mins',
    price: '$180'
  },
  {
    title: 'Mindfulness Coaching',
    description: 'Learn practical mindfulness techniques to reduce stress and increase presence in your daily life.',
    duration: '45 mins',
    price: '$120'
  }
];