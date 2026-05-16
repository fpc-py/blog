
import { create } from 'zustand';
import { ThemeState } from '@/types';

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => {
    const newTheme = !state.isDark;
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { isDark: newTheme };
  }),
}));
