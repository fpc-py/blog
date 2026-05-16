
## 1. Architecture Design
纯前端架构，使用React + TypeScript + Tailwind CSS + Vite构建，无需后端服务。

## 2. Technology Description
- 前端: React@18 + TypeScript + Tailwind CSS + Vite
- 初始化工具: vite-init
- 动画库: GSAP
- 状态管理: Zustand (用于主题状态)

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页 - Hero区域 + 最新文章 |
| /articles | 文章列表 - 分类、标签、搜索、分页 |
| /articles/:id | 文章详情 - 内容展示、目录、推荐 |
| /about | 关于页 - 个人介绍 |
| /contact | 留言页 - 留言表单 |

## 4. Data Structure
### 4.1 文章数据结构
```typescript
interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
}
```

### 4.2 主题状态
```typescript
interface ThemeState {
  isDark: boolean;
  toggleTheme: () =&gt; void;
}
```

## 5. Component Structure
```
src/
├── components/
│   ├── Navbar.tsx       # 粘性导航栏
│   ├── ArticleCard.tsx  # 文章卡片
│   ├── Hero.tsx         # 首页Hero区域
│   └── ThemeToggle.tsx  # 主题切换按钮
├── pages/
│   ├── Home.tsx         # 首页
│   ├── ArticleList.tsx  # 文章列表
│   ├── ArticleDetail.tsx # 文章详情
│   ├── About.tsx        # 关于页
│   └── Contact.tsx      # 留言页
├── hooks/
│   └── useScrollAnimation.ts # 滚动动画钩子
├── store/
│   └── useThemeStore.ts # 主题状态管理
├── types/
│   └── index.ts         # TypeScript类型定义
└── utils/
    └── mockData.ts      # 模拟数据
```
