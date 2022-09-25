import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Fitness",
  "/Read",
  "/Work",
  {
    text: "🧰 软件应用",
    icon: "",
    prefix: "/apps/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🛖 生活",
    icon: "",
    prefix: "/family/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "📓 日记",
    icon: "",
    prefix: "/journal/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsable: true,
    children: "structure",
  },
]);
