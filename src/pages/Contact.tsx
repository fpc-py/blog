
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !formRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复您。');
  };

  const socialLinks = [
    { icon: Mail, name: '邮箱', url: 'mailto:hello@example.com', color: 'text-gray-600 dark:text-gray-400' },
    { icon: Github, name: 'GitHub', url: 'https://github.com', color: 'text-gray-600 dark:text-gray-400' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'text-gray-600 dark:text-gray-400' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com', color: 'text-gray-600 dark:text-gray-400' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            联系我
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto">
            有问题或想要合作？欢迎随时与我联系，我会尽快回复您。
          </p>
        </div>

        <div ref={formRef} className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">
              社交媒体
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              您也可以通过以下社交媒体平台找到我。
            </p>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                >
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors`}>
                    <social.icon size={20} className={social.color} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">
              发送消息
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300 dark:focus:border-gray-700"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300 dark:focus:border-gray-700"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300 dark:focus:border-gray-700"
                  placeholder="请输入消息主题"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  消息
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-300 dark:focus:border-gray-700 resize-none"
                  placeholder="请输入您的消息..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
