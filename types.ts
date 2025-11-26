export type Language = 'en' | 'cn';

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Direct';
  url?: string;
}

export interface ServiceItem {
  title: {
    en: string;
    cn: string;
  };
  description: {
    en: string;
    cn: string;
  };
  duration: string;
  price: string;
}