
export enum Framework {
  REACT = 'React',
  FLUTTER = 'Flutter'
}

export interface ComparisonItem {
  concept: string;
  react: string;
  flutter: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
