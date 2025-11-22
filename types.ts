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
  title: string;
  description: string;
  duration: string;
  price: string;
}

export interface AIReviewAnalysis {
  sentimentScore: number;
  summary: string[];
  keyThemes: Array<{ theme: string; count: number }>;
}