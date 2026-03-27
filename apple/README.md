# 山特维克集团 - 官方网站

这是山特维克集团的官方网站，参考了 sandvik.com 的设计风格，所有内容已翻译成中文。

## 网站特点

- **专业设计**: 参考山特维克官方网站的设计风格
- **响应式布局**: 完美适配桌面、平板和移动设备
- **简洁交互**: 平滑的滚动效果和悬停动画
- **无障碍访问**: 支持键盘导航和屏幕阅读器
- **性能优化**: 减少滚动事件触发频率，优化加载速度

## 页面结构

1. **导航栏**: 固定顶部导航，包含公司logo和主要导航链接
2. **Hero 区域**: 欢迎信息和主要行动号召
3. **年度报告**: 2025年年度报告展示
4. **新闻与事件**: 最新新闻和即将举行的活动
5. **关于我们**: 公司简介和相关链接
6. **特色链接**: 专业知识与创新、播客、职位空缺
7. **页脚**: 完整的网站导航和社交媒体链接

## 技术栈

- **HTML5** - 语义化标签
- **CSS3** - CSS变量、Flexbox、Grid、响应式设计
- **JavaScript** - ES6+、Intersection Observer API
- **字体** - Inter（Google Fonts）

## 本地运行

### 方法一：使用 Node.js（推荐）

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 访问 http://localhost:3000
```

### 方法二：使用 Python

```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000

# 访问 http://localhost:3000
```

### 方法三：使用 VS Code Live Server

安装 Live Server 插件，右键点击 index.html 选择 "Open with Live Server"

### 方法四：直接打开

直接用浏览器打开 index.html 文件（部分功能可能受限）

## 文件结构

```
sandvik/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # JavaScript 交互
├── package.json    # 项目配置
└── README.md       # 说明文档
```

## 浏览器支持

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 许可证

MIT License
