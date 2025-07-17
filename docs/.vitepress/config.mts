import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "enhanced-site-links",
  description: " Vue components for enhanced link cards and link blocks for VitePress. ",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  ],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  themeConfig: {
    logo: '/favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github Repo', link: 'https://github.com/miletorix/vitepress-enhanced-site-links' }
    ],
    sidebar: [
      { text: 'Home', link: '/index' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/miletorix' }
    ]
  }
})
