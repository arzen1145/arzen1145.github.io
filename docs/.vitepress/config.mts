import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "arzen1145的个人网站",
  description: "点击输入文字",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '猎奇',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/3546949391223286' }
    ]
  }
})
