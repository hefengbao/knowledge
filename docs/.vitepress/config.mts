import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "知识库",
  description: "知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '看世界', link: '/world/', activeMatch: '/world/*', }
    ],
    sidebar: {
      '/world/': [
        {
          text: '亚洲',
          items: [
            {
              text: '东亚',
              items: [
                { text: '中国', link: '/world/asia/china' },
                { text: '日本', link: '/world/asia/japan' },
                { text: '韩国', link: '/world/asia/south-korea' },
                { text: '朝鲜', link: '/world/asia/north-korea' },
              ]
            },
            {
              text: '东南亚',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '南亚',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '西亚',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '中亚',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
          ]
        },
        {
          text: '欧洲',
          items: [
            {
              text: '东欧',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '西欧',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '南欧',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '北欧',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '中欧',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
          ]
        },
        {
          text: '非洲',
          items: [
            {
              text: '东非',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '西非',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '南非',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '北非',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
            {
              text: '中非',
              items: [
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            },
          ]
        },
        {
          text: '北美洲',
          items: [
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '南美洲',
          items: [
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: '大洋洲',
          items: [
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ],
    lastUpdated: {
      text: '更新时间：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 贺丰宝`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  }
})
