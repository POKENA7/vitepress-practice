import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
// GitHub Actions では GITHUB_ACTIONS=true が自動でセットされるため、
// CI 上のビルドは GitHub Pages 用の絶対パスを使用し、
// ローカルで file:// 直接開く場合は相対パス "./" を使用する。
const base = process.env.GITHUB_ACTIONS ? "/vitepress-practice/" : "./";

export default defineConfig({
  base,
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
