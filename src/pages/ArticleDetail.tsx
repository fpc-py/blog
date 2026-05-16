
import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '@/utils/mockData';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  const relatedArticles = articles
    .filter((a) => a.id !== id && a.category === article?.category)
    .slice(0, 3);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-900 dark:text-white mb-4">文章不存在</h1>
          <Link
            to="/articles"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            返回文章列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <article>
        <div ref={heroRef} className="pt-24 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/articles"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>返回</span>
            </Link>

            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                <Calendar size={14} />
                <span>{article.publishDate}</span>
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
              {article.excerpt}
            </p>
          </div>
        </div>

        <div className="px-6 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div ref={contentRef} className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-8">
              相关文章
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/articles/${related.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.coverImage}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
