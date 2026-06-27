
---

## 🎯 核心功能

### 1. 文章管理

- ✅ 文章列表展示（卡片网格布局）

- ✅ 文章分类筛选

- ✅ 标签筛选

- ✅ 关键词搜索

- ✅ 文章详情页

- ✅ 相关文章推荐

### 2. 交互体验

- ✅ 滚动触发动画（GSAP ScrollTrigger）

- ✅ 鼠标视差效果

- ✅ 卡片悬浮动效

- ✅ 平滑页面过渡

- ✅ 骨架屏加载状态

### 3. 用户界面

- ✅ 响应式设计（移动端完美适配）

- ✅ 深色/浅色主题切换

- ✅ 粘性导航栏（磨砂玻璃效果）

- ✅ 优雅的排版系统

- ✅ 精致的圆角和阴影

### 4. 数据管理

- ✅ Supabase 后端集成

- ✅ 评论系统

- ✅ 留言功能

- ✅ 模拟数据回退（无配置也能运行）

---

## 🗄️ 数据库配置（可选）

本项目使用 **Supabase** 作为后端服务。如果您只是想体验前端效果，可以直接使用内置的模拟数据，无需配置数据库。

### 创建 Supabase 项目

1. 访问 [supabase.com](https://supabase.com) 注册账号

2. 创建新项目，等待数据库初始化

3. 在左侧菜单找到 **SQL Editor**

4. 执行 `supabase/schema.sql` 中的 SQL 语句创建数据表

### 配置环境变量
编辑 `.env` 文件：

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...

```

> 💡 如果不配置环境变量，项目会自动使用内置的模拟数据，所有功能仍可正常浏览。

---

## 🎨 设计规范

### 色彩系统

| 用途 | 浅色模式 | 深色模式 |
|------|----------|----------|
| 背景色 | `#FFFFFF` | `#0A0A0A` |
| 主文字 | `#111827` | `#F9FAFB` |
| 次文字 | `#6B7280` | `#9CA3AF` |
| 边框 | `#E5E7EB` | `#1F2937` |
| 强调色 | `#111827` | `#F9FAFB` |

### 字体系统

- 主字体：SF Pro / -apple-system / Segoe UI

- 字重层级：
  - 标题：`font-light` (300)
  - 正文：`font-normal` (400)
  - 强调：`font-medium` (500)

### 动画规范

- 缓动函数：`power3.out`

- 基础时长：`0.3s` - `0.8s`

- 触发时机：滚动到视口 85% 位置

---

## 🚀 部署上线

### Vercel 部署（推荐）

**一键部署：**

1. 将代码推送到 GitHub

2. 访问 [vercel.com](https://vercel.com)

3. 导入您的仓库

4. 配置环境变量（可选）

5. 点击 Deploy，等待 1-2 分钟

6. ✅ 上线成功！

### 其他部署方式

- **Netlify** - 导入 GitHub 仓库，自动构建

- **静态托管** - 上传 `dist` 目录到 OSS / COS / 七牛云

- **VPS** - 使用 Nginx 部署静态文件

详细部署说明请参考 [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18 | UI 框架 |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 3 | 样式框架 |
| GSAP | 3 | 动画库 |
| Zustand | 4 | 状态管理 |
| React Router | 6 | 路由管理 |
| Supabase | - | 后端服务 |
| Vite | 6 | 构建工具 |
| Lucide React | - | 图标库 |

---

## 📝 自定义指南

### 修改网站名称
编辑 `src/components/Navbar.tsx`：

```tsx
<Link to="/" className="text-2xl font-light tracking-tight">
  您的博客名称
</Link>

```

### 修改文章内容

- 开发/演示：编辑 `src/utils/mockData.ts`

- 生产环境：在 Supabase Dashboard 中管理

### 调整主题颜色
编辑 `tailwind.config.js` 或 `src/index.css`

### 添加新页面

1. 在 `src/pages/` 创建新页面组件

2. 在 `src/App.tsx` 中添加路由

3. 在 `src/components/Navbar.tsx` 中添加导航链接

---

## ❓ 常见问题

### Q: 为什么不配置 Supabase 也能运行？
A: 项目内置了模拟数据回退机制，没有配置环境变量时会自动使用 mock 数据，方便前端开发和演示。

### Q: 如何添加真实的文章数据？
A: 有两种方式：

1. 在 Supabase Dashboard 中手动插入

2. 修改 `src/utils/mockData.ts` 中的模拟数据

### Q: 移动端显示效果如何？
A: 项目采用响应式设计，从手机到桌面端都完美适配，已针对触摸交互进行优化。

### Q: 可以商用吗？
A: 可以，这是一个 MIT 协议的开源项目模板，您可以自由使用和修改。

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库

2. 创建特性分支

3. 提交更改

4. 发起 Pull Request

---

## 📄 开源协议

MIT License

---

## 💝 致谢

- 设计灵感来自 [Apple 官网](https://www.apple.com)

- 动画库 [GSAP](https://greensock.com/gsap/)

- 图标库 [Lucide](https://lucide.dev/)

- 所有开源贡献者

---

**如果这个项目对您有帮助，欢迎点个 ⭐ Star 支持一下！**
