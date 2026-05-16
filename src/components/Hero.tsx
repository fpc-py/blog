
import { useParallax } from '@/hooks/useScrollAnimation';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const parallaxRef = useParallax(0.3);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.6'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              探索
              <br />
              <span className="text-gray-600 dark:text-gray-400">极简之美</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md"
            >
              分享设计与开发的思考，追求简约而不简单的数字体验。
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href="/articles"
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100"
              >
                浏览文章
              </a>
              <a
                href="/about"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white"
              >
                了解更多
              </a>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div
              ref={parallaxRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800"
                alt="Hero"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
