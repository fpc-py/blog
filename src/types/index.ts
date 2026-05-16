
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
}

export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}
