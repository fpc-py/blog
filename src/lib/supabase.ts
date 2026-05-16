import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const articleService = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .order('publish_date', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  getByCategory: async (category: string) => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .eq('is_published', true)
      .order('publish_date', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  search: async (query: string) => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%`)
      .eq('is_published', true);
    
    if (error) throw error;
    return data;
  }
};

export const messageService = {
  create: async (message: { name: string; email: string; subject?: string; message: string }) => {
    const { data, error } = await supabase
      .from('messages')
      .insert([message])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  getAll: async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};

export const commentService = {
  getByArticle: async (articleId: string) => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('article_id', articleId)
      .eq('is_approved', true)
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  create: async (comment: { article_id: string; author_name: string; author_email?: string; content: string }) => {
    const { data, error } = await supabase
      .from('comments')
      .insert([comment])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};
