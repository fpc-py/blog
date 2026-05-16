-- 博客数据库表结构

-- 1. 文章表 (articles)
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_image VARCHAR(500),
    category VARCHAR(50),
    tags TEXT[],
    publish_date DATE DEFAULT CURRENT_DATE,
    read_time VARCHAR(20),
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. 留言表 (messages)
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. 评论表 (comments)
CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(100),
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_publish_date ON articles(publish_date DESC);
CREATE INDEX IF NOT EXISTS idx_comments_article_id ON comments(article_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);

-- RLS 策略 (Row Level Security)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- 文章表权限
CREATE POLICY "Allow public read access to articles"
    ON articles FOR SELECT
    USING (is_published = true);

CREATE POLICY "Allow authenticated users to insert articles"
    ON articles FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update articles"
    ON articles FOR UPDATE
    USING (true);

CREATE POLICY "Allow authenticated users to delete articles"
    ON articles FOR DELETE
    USING (true);

-- 留言表权限
CREATE POLICY "Allow public read access to messages"
    ON messages FOR SELECT
    USING (true);

CREATE POLICY "Allow public insert messages"
    ON messages FOR INSERT
    WITH CHECK (true);

-- 评论表权限
CREATE POLICY "Allow public read approved comments"
    ON comments FOR SELECT
    USING (is_approved = true);

CREATE POLICY "Allow public insert comments"
    ON comments FOR INSERT
    WITH CHECK (true);

-- 初始数据
INSERT INTO articles (title, excerpt, content, cover_image, category, tags, read_time) VALUES
(
    '极简主义设计的艺术',
    '探索极简主义设计的核心理念，以及如何在现代产品设计中应用这些原则创造令人难忘的用户体验。',
    '<p>极简主义设计不仅仅是一种美学风格，更是一种哲学。它强调去除所有不必要的元素，只保留最核心的部分。在数字产品设计中，这种方法可以创造出更清晰、更专注、更优雅的用户体验。</p><p>在苹果公司的产品设计中，极简主义被发挥到了极致。从iPhone的界面到MacBook的外观，每一个细节都经过精心雕琢，去除所有冗余，只保留功能与美感的完美结合。</p><p>关键原则包括：充分利用留白空间，选择克制的色彩方案，使用优雅的无衬线字体，创造层次分明的视觉结构，以及确保每一个交互都流畅自然。</p>',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200',
    '设计',
    ARRAY['极简主义', '设计', '用户体验'],
    '5 分钟'
),
(
    '前端开发中的动画设计',
    '深入探讨如何使用现代动画技术提升用户体验，包括平滑过渡、微交互和滚动动画的最佳实践。',
    '<p>动画在现代网页设计中扮演着至关重要的角色。好的动画可以引导用户注意力，提供即时反馈，并创造愉悦的浏览体验。</p><p>GSAP是一个强大的动画库，它提供了比原生CSS动画更多的控制能力和性能优化。使用GSAP，我们可以创建复杂的时间线动画、滚动触发效果和流畅的页面转场。</p><p>关键技巧包括：使用缓动函数创造自然的运动感，控制动画的时序和节奏，以及确保动画在所有设备上都能流畅运行。</p>',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    '开发',
    ARRAY['前端', '动画', 'GSAP'],
    '8 分钟'
),
(
    '响应式设计的最佳实践',
    '学习如何构建完美适配各种设备的响应式网站，从移动设备到桌面设备的全方位优化策略。',
    '<p>响应式设计是现代网页开发的基石。一个好的响应式网站应该在任何设备上都能提供出色的用户体验。</p><p>移动优先的设计理念已经成为行业标准。这意味着我们首先为小屏幕设备设计，然后逐步增强大屏幕设备的体验。</p><p>核心技术包括：灵活的网格布局、响应式图片、媒体查询，以及触摸友好的交互设计。</p>',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    '开发',
    ARRAY['响应式', 'CSS', '前端'],
    '6 分钟'
);
