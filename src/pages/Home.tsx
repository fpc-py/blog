
import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { articles } from '@/utils/mockData';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { addToRefs } = useScrollAnimation();
  const latestArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-2">
                最新文章
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                探索设计与开发的最新思考
              </p>
            </div>
            <Link
              to="/articles"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                addToRefs={addToRefs}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6">
            关注我们
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            订阅最新文章，不错过任何精彩内容
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入邮箱地址"
              className="flex-1 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
            />
            <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
