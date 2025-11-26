import { Review, ServiceItem } from './types';

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah & James T.',
    rating: 5,
    text: 'We were on the brink of separation, but Dr. Vance at Relive helped us find our way back to each other. The communication tools we learned have saved our marriage.',
    date: '2 months ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Relive+Relationship+Counselling+San+Francisco'
  },
  {
    id: '2',
    author: 'Michael Chen',
    rating: 5,
    text: 'My partner and I were stuck in the same arguments for years. The sessions helped us break those cycles and understand each other\'s perspectives deeply.',
    date: '1 month ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Relive+Relationship+Counselling+San+Francisco'
  },
  {
    id: '3',
    author: 'Emily R.',
    rating: 4,
    text: 'We did pre-marital counseling here. It brought up important topics we hadn\'t discussed and made us feel so much more prepared for our future.',
    date: '3 months ago',
    source: 'Direct'
  },
  {
    id: '4',
    author: 'David K.',
    rating: 5,
    text: 'Compassionate and neutral. I never felt like sides were being taken, just that the relationship was being healed. Highly recommend.',
    date: '2 weeks ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Relive+Relationship+Counselling+San+Francisco'
  },
  {
    id: '5',
    author: 'Anita Patel',
    rating: 5,
    text: 'Helped me work through my own attachment issues which transformed how I relate to my spouse. Truly grateful for Relive.',
    date: '4 months ago',
    source: 'Google',
    url: 'https://www.google.com/maps/search/?api=1&query=Relive+Relationship+Counselling+San+Francisco'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: {
      en: 'Couple Relationship',
      cn: '情侣关系'
    },
    description: {
      en: 'Navigate conflict, deepen intimacy, and rebuild trust with expert guidance.',
      cn: '在专家指导下化解冲突、深化亲密关系并重建信任。'
    },
    duration: '75 mins',
    price: '$200'
  },
  {
    title: {
      en: 'Corporate Relation',
      cn: '职场关系'
    },
    description: {
      en: 'Navigate workplace dynamics, leadership challenges, and professional communication.',
      cn: '应对职场动态、领导力挑战和职业沟通难题。'
    },
    duration: '60 mins',
    price: '$180'
  },
  {
    title: {
      en: 'Personal Growth',
      cn: '自我成长'
    },
    description: {
      en: 'Discover your true self, overcome limiting beliefs, and unlock your potential.',
      cn: '发现真实的自我，克服限制性信念，释放潜能。'
    },
    duration: '50 mins',
    price: '$150'
  },
  {
    title: {
      en: 'Emotional Management',
      cn: '情绪管理'
    },
    description: {
      en: 'Learn to understand, regulate, and express your emotions healthily.',
      cn: '学习理解、调节并以健康的方式表达您的情绪。'
    },
    duration: '50 mins',
    price: '$150'
  }
];