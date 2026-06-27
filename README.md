🍎 苹果风格个人博客
极简主义设计 · 流畅动画体验 · 苹果官网质感

React TypeScript Tailwind CSS GSAP Vite

✨ 项目亮点
🎨 设计美学
极简主义 - 大量留白、清晰排版、去掉一切多余装饰
苹果风格 - 完美复刻 Apple 官网的视觉语言和交互体验
磨砂玻璃 - 半透明毛玻璃效果，高级质感
深浅双主题 - 深色/浅色模式一键切换，平滑过渡
⚡ 动态效果
滚动视差 - GSAP 驱动的滚动触发动画
序列帧动画 - 元素依次淡入、位移、缩放
鼠标跟随 - Hero 区域视差偏移效果
悬浮交互 - 卡片上浮、阴影加深、微动效
📱 功能完整
🏠 首页 - Hero 大图 + 最新文章网格
📝 文章列表 - 分类、标签、搜索、分页
📖 文章详情 - 优雅排版、相关推荐
👤 关于页面 - 个人介绍、技能展示
📧 联系页面 - 留言表单、社交链接
🌙 深色模式 - 一键切换主题
🚀 快速开始
环境要求
Node.js >= 18
npm >= 7 或 pnpm >= 6
安装运行

Bash

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
# 1. 克隆项目
git clone <your-repo-url>
cd apple-blog

# 2. 安装依赖
npm install

# 3. 复制环境变量配置
cp .env.example .env
# 编辑 .env 填入您的 Supabase 配置（可选）

# 4. 启动开发服务器
npm run dev

# 5. 打开浏览器访问
# http://localhost:5173
生产构建

Bash

1
2
3
4
5
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
📁 项目结构

Plain Text

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
apple-blog/
├── src/                          # 前端源码
│   ├── components/               # 可复用组件
│   │   ├── Navbar.tsx           # 粘性导航栏
│   │   ├── ArticleCard.tsx      # 文章卡片
│   │   ├── Hero.tsx             # 首页 Hero 区域
│   │   └── ThemeToggle.tsx      # 主题切换按钮
│   ├── pages/                    # 页面组件
│   │   ├── Home.tsx             # 首页
│   │   ├── ArticleList.tsx      # 文章列表
│   │   ├── ArticleDetail.tsx    # 文章详情
│   │   ├── About.tsx            # 关于页
│   │   └── Contact.tsx          # 联系页
│   ├── hooks/                    # 自定义 Hooks
│   │   └── useScrollAnimation.ts # 滚动动画 Hook
│   ├── store/                    # 状态管理
│   │   └── useThemeStore.ts     # 主题状态
│   ├── services/                 # API 服务层
│   │   └── api.ts               # 统一 API 接口
│   ├── lib/                      # 第三方库封装
│   │   └── supabase.ts          # Supabase 客户端
│   ├── utils/                    # 工具函数
│   │   └── mockData.ts          # 模拟数据
│   ├── types/                    # TypeScript 类型
│   │   └── index.ts
│   ├── App.tsx                   # 应用入口
│   ├── main.tsx                  # 渲染入口
│   └── index.css                 # 全局样式
├── supabase/                     # 数据库相关
│   └── schema.sql                # 表结构 SQL
├── api/                          # 后端 API（可选）
│   └── server.ts                 # Express 服务
├── .env.example                  # 环境变量示例
├── vercel.json                   # Vercel 部署配置
├── tailwind.config.js            # Tailwind 配置
├── vite.config.ts                # Vite 配置
├── tsconfig.json                 # TypeScript 配置
└── package.json                  # 项目依赖
🎯 核心功能
1. 文章管理
✅ 文章列表展示（卡片网格布局）
✅ 文章分类筛选
✅ 标签筛选
✅ 关键词搜索
✅ 文章详情页
✅ 相关文章推荐
2. 交互体验
✅ 滚动触发动画（GSAP ScrollTrigger）
✅ 鼠标视差效果
✅ 卡片悬浮动效
✅ 平滑页面过渡
✅ 骨架屏加载状态
3. 用户界面
✅ 响应式设计（移动端完美适配）
✅ 深色/浅色主题切换
✅ 粘性导航栏（磨砂玻璃效果）
✅ 优雅的排版系统
✅ 精致的圆角和阴影
4. 数据管理
✅ Supabase 后端集成
✅ 评论系统
✅ 留言功能
✅ 模拟数据回退（无配置也能运行）
🗄️ 数据库配置（可选）
本项目使用 Supabase 作为后端服务。如果您只是想体验前端效果，可以直接使用内置的模拟数据，无需配置数据库。

创建 Supabase 项目
访问 supabase.com 注册账号
创建新项目，等待数据库初始化
在左侧菜单找到 SQL Editor
执行 supabase/schema.sql 中的 SQL 语句创建数据表
配置环境变量
编辑 .env 文件：


env

1
2
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
💡 如果不配置环境变量，项目会自动使用内置的模拟数据，所有功能仍可正常浏览。

🎨 设计规范
色彩系统
用途	浅色模式	深色模式
背景色	#FFFFFF	#0A0A0A
主文字	#111827	#F9FAFB
次文字	#6B7280	#9CA3AF
边框	#E5E7EB	#1F2937
强调色	#111827	#F9FAFB
字体系统
主字体：SF Pro / -apple-system / Segoe UI
字重层级：
标题：font-light (300)
正文：font-normal (400)
强调：font-medium (500)
动画规范
缓动函数：power3.out
基础时长：0.3s - 0.8s
触发时机：滚动到视口 85% 位置
🚀 部署上线
Vercel 部署（推荐）
一键部署：

将代码推送到 GitHub
访问 vercel.com
导入您的仓库
配置环境变量（可选）
点击 Deploy，等待 1-2 分钟
✅ 上线成功！
其他部署方式
Netlify - 导入 GitHub 仓库，自动构建
静态托管 - 上传 dist 目录到 OSS / COS / 七牛云
VPS - 使用 Nginx 部署静态文件
详细部署说明请参考 DEPLOYMENT.md

🛠️ 技术栈
技术	版本	用途
React	18	UI 框架
TypeScript	5	类型安全
Tailwind CSS	3	样式框架
GSAP	3	动画库
Zustand	4	状态管理
React Router	6	路由管理
Supabase	-	后端服务
Vite	6	构建工具
Lucide React	-	图标库
📝 自定义指南
修改网站名称
编辑 src/components/Navbar.tsx：


TSX

1
2
3
<Link to="/" className="text-2xl font-light tracking-tight">
  您的博客名称
</Link>
修改文章内容
开发/演示：编辑 src/utils/mockData.ts
生产环境：在 Supabase Dashboard 中管理
调整主题颜色
编辑 tailwind.config.js 或 src/index.css

添加新页面
在 src/pages/ 创建新页面组件
在 src/App.tsx 中添加路由
在 src/components/Navbar.tsx 中添加导航链接
❓ 常见问题
Q: 为什么不配置 Supabase 也能运行？
A: 项目内置了模拟数据回退机制，没有配置环境变量时会自动使用 mock 数据，方便前端开发和演示。

Q: 如何添加真实的文章数据？
A: 有两种方式：

在 Supabase Dashboard 中手动插入
修改 src/utils/mockData.ts 中的模拟数据
Q: 移动端显示效果如何？
A: 项目采用响应式设计，从手机到桌面端都完美适配，已针对触摸交互进行优化。

Q: 可以商用吗？
A: 可以，这是一个 MIT 协议的开源项目模板，您可以自由使用和修改。

🤝 贡献指南
欢迎提交 Issue 和 Pull Request！

Fork 本仓库
创建特性分支
提交更改
发起 Pull Request
📄 开源协议
MIT License

💝 致谢
设计灵感来自 Apple 官网
动画库 GSAP
图标库 Lucide
所有开源贡献者
如果这个项目对您有帮助，欢迎点个 ⭐ Star 支持一下！
