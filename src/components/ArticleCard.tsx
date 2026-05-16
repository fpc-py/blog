
import { Article } from '@/types';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  index: number;
  addToRefs: (el: HTMLElement | null) => void;
}

export const ArticleCard = ({ article, index, addToRefs }: ArticleCardProps) => {
  return (
    <Link
      to={`/articles/${article.id}`}
      ref={addToRefs}
      className="group block"
    >
      <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-full text-gray-700 dark:text-gray-300">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-light text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {article.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{article.publishDate}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
