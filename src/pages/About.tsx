
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Node.js', level: 75 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              关于我
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
              我是一名热爱设计与开发的全栈工程师，专注于创造简洁、优雅且实用的数字产品体验。
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              我相信好的设计能够改变世界，而技术是实现这一目标的工具。在我的工作中，我始终追求设计与技术的完美结合。
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-200 dark:bg-gray-800 rounded-full -z-10" />
          </div>
        </div>

        <div ref={contentRef} className="space-y-16">
          <section>
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
              技能专长
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-900 dark:bg-white rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
              工作经历
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: '2022 - 现在',
                  title: '高级前端工程师',
                  company: '科技公司',
                  description: '负责产品的前端架构设计与开发，带领团队完成多个重要项目。',
                },
                {
                  year: '2019 - 2022',
                  title: 'UI/UX 设计师',
                  company: '设计工作室',
                  description: '负责产品的用户界面设计和用户体验优化，与开发团队紧密合作。',
                },
                {
                  year: '2017 - 2019',
                  title: '初级前端开发',
                  company: '创业公司',
                  description: '参与多个Web项目的开发，积累了丰富的实战经验。',
                },
              ].map((exp, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-sm text-gray-500 dark:text-gray-400">
                    {exp.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-12">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6">
              一起工作
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              如果您对我的工作感兴趣，或者有项目想要合作，欢迎随时联系我。
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              联系我
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
