import { Article } from '@/types';
import { articleService, messageService, commentService } from '@/lib/supabase';
import { articles as mockArticles, categories, tags } from '@/utils/mockData';

const USE_MOCK_DATA = !import.meta.env.VITE_SUPABASE_URL;

export const api = {
  articles: {
    getAll: async (): Promise<Article[]> => {
      if (USE_MOCK_DATA) {
        return mockArticles;
      }
      try {
        const data = await articleService.getAll();
        return data.map(item => ({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          content: item.content,
          coverImage: item.cover_image,
          category: item.category,
          tags: item.tags || [],
          publishDate: item.publish_date,
          readTime: item.read_time || ''
        }));
      } catch (error) {
        console.warn('Failed to fetch from Supabase, using mock data:', error);
        return mockArticles;
      }
    },

    getById: async (id: string): Promise<Article | null> => {
      if (USE_MOCK_DATA) {
        return mockArticles.find(a => a.id === id) || null;
      }
      try {
        const data = await articleService.getById(id);
        return {
          id: data.id,
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          coverImage: data.cover_image,
          category: data.category,
          tags: data.tags || [],
          publishDate: data.publish_date,
          readTime: data.read_time || ''
        };
      } catch (error) {
        console.warn('Failed to fetch article from Supabase, using mock data:', error);
        return mockArticles.find(a => a.id === id) || null;
      }
    },

    getByCategory: async (category: string): Promise<Article[]> => {
      if (USE_MOCK_DATA || category === '全部') {
        return mockArticles;
      }
      try {
        const data = await articleService.getByCategory(category);
        return data.map(item => ({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          content: item.content,
          coverImage: item.cover_image,
          category: item.category,
          tags: item.tags || [],
          publishDate: item.publish_date,
          readTime: item.read_time || ''
        }));
      } catch (error) {
        console.warn('Failed to fetch from Supabase, using mock data:', error);
        return mockArticles;
      }
    },

    search: async (query: string): Promise<Article[]> => {
      if (USE_MOCK_DATA) {
        const lowerQuery = query.toLowerCase();
        return mockArticles.filter(a => 
          a.title.toLowerCase().includes(lowerQuery) || 
          a.excerpt.toLowerCase().includes(lowerQuery)
        );
      }
      try {
        const data = await articleService.search(query);
        return data.map(item => ({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          content: item.content,
          coverImage: item.cover_image,
          category: item.category,
          tags: item.tags || [],
          publishDate: item.publish_date,
          readTime: item.read_time || ''
        }));
      } catch (error) {
        console.warn('Failed to search from Supabase, using mock data:', error);
        const lowerQuery = query.toLowerCase();
        return mockArticles.filter(a => 
          a.title.toLowerCase().includes(lowerQuery) || 
          a.excerpt.toLowerCase().includes(lowerQuery)
        );
      }
    }
  },

  messages: {
    create: async (message: { name: string; email: string; subject?: string; message: string }) => {
      if (USE_MOCK_DATA) {
        console.log('Mock: Message created', message);
        return { id: 'mock-id', ...message, created_at: new Date().toISOString() };
      }
      return await messageService.create(message);
    }
  },

  comments: {
    getByArticle: async (articleId: string) => {
      if (USE_MOCK_DATA) {
        return [];
      }
      try {
        return await commentService.getByArticle(articleId);
      } catch (error) {
        console.warn('Failed to fetch comments:', error);
        return [];
      }
    },

    create: async (comment: { article_id: string; author_name: string; author_email?: string; content: string }) => {
      if (USE_MOCK_DATA) {
        console.log('Mock: Comment created', comment);
        return { id: 'mock-id', ...comment, created_at: new Date().toISOString(), is_approved: false };
      }
      return await commentService.create(comment);
    }
  }
};

export { categories, tags };
