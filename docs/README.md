---
article: false
title: Zolliner的知识库
icon: note
---



![](http://tc.seoipo.com/2022-08-22-19-28-25.png?imageMogr2/thumbnail/!80p "笔记 + 文章 = LearnData 知识库")



## 🧱 笔记结构

- 置顶：日常习惯、健身、阅读；
- 代码：常用代码的学习使用笔记；
- 软件应用：常用应用、Chrome 扩展及相关教程；
- 页面开发：页面插件和框架生成工具；
- 网站部署：网站相关的平台、工具及知识收集；
- Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；
- 系统问题：Windows 系统优化和相关问题；
- 生活区：说明书，生活记录及小技巧；
- 博客区：聚合所有博客文章，并以分类、标签、时间轴等方式进行组合。



## 🔣 配置 LearnData

LearnData 的文章页面配置查看主目录下的 `samplepage.md`，文本保存路径和网站配置在 `docs` 文件夹。

`docs/.vuepress` 存放网站配置文件。`docs/_post` 存放博客文章。`docs/_temp` 默认不同步到 GitHub，需手动在本地建立 `_temp` 文件夹，用来存放草稿。你可以按范围或功能来新建文件夹存放笔记。

`docs/README.md` 是默认主页，`docs/blog.md` 配置博客页面，`docs/intro.md` 是你的个人介绍。

![](http://tc.seoipo.com/2022-08-22-18-04-08.png "docs 路径结构")

`docs/.vuepress` 路径下是网站的配置文件。`config.ts` 配置网站环境依赖和网站属性。`sidebar.ts` 配置侧边栏，替换文档中文件夹路径即可，后台自动抓取路径下的 md 文件来生成侧边栏。`navbar.ts` 配置导航栏，推荐放你常用的文档链接。`theme.ts` 对主题和插件进行设置。`templateBuild.html` 是网页模板，调整网站关键词和第三方统计代码。配置文件上我添加了详细注释，可以自由调整，或参考 [vuepress-theme-hope 配置案例](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress)。

注意：LearnData 默认使用了 algolia 全文搜索，如果你没设置 Docsearch 爬虫的话，需删除 `docs/.vuepress/config.ts` 中 plugins 下的 docsearchPlugin 区块。删除后，站点会将页面标题和小标题作为搜索索引。

## 🤔 常见问题

### 网页显示异常

网站只显示文字且不能正常显示网页，这是网站路径不正确而导致的页面样式错误。

检查 `docs/_posts/config.ts` 中 base 的设置，默认为 `/`。如果 GitHub Page 提示访问链接 `https://xxx.github.io/yyy`，则将 base 改为 `/yyy`。

### ERR_MODULE

生成静态网页时，报错 `Error [ERR_MODULE_NOT_FOUND]: Cannot find module`，检查是否有第三方插件或未正确配置环境依赖。

这是 pacakge.json 引发的环境依赖报错，默认配置已经固化依赖版本号，该报错出现几率极低，遇到的话请留言到 issue 或评论区。

### 静态文件名字总变

VuePress 默认使用 Vite，打包时会引入时间戳和 hash 对文件重命名，导致网站大部分的文件发生更改。即使你并没有更新文章，生成的静态文件也会改变。比如我的笔记网站用的 VuePress 默认配置，每次服务器部署需要 10 分钟，期间打开网站就会出错。

如果不想每次架构都重命名文件，可以复制「[nohashname](https://github.com/rockbenben/LearnData/tree/nohashname)」branch。我把 nohashname 分支的打包工具换成了 Webpack，并用 chainWebpack 设置文件命名规则，避免文件非必要重命名。

