
import { useState, useEffect } from 'react';
import { ArticleCard } from '@/components/ArticleCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { articles, categories, tags } from '@/utils/mockData';
import { Search } from 'lucide-react';

export const ArticleList = () => {
  const { addToRefs } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedTag, setSelectedTag] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    let result = [...articles];

    if (selectedCategory !== '全部') {
      result = result.filter((a) => a.category === selectedCategory);
    }

    if (selectedTag !== '全部') {
      result = result.filter((a) => a.tags.includes(selectedTag));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query)
      );
    }

    setFilteredArticles(result);
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            全部文章
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            共 {filteredArticles.length} 篇文章
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300 dark:focus:border-gray-700"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">分类</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-6">标签</h3>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 12).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                addToRefs={addToRefs}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">
              没有找到相关文章
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
