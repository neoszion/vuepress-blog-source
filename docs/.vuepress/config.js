const { description } = require('../../package')

module.exports = {
  // 这里要注意一下。
  base: '/',
  // dest: './src/.vuepress/dist',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '一个搜推全栈程序员的blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", {rel: "icon", href: '/public/images/icon.jpeg'}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }],
    
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '搜推',
        items: [
          {text: '概览', link: '/md/search/'},
          {text: '业务层', link: '/md/search/search-online/'},
          {text: '引擎', link: '/md/search/search-engine/'},
          {text: 'Dump', link: '/md/search/search-dump/'},
          {text: '模型', link: '/md/search/search-model/'}
        ]
      },
      {
        text: '技术学习',
         items: [
          {text: '计算机基础', items: [
            {text: '概述', link: '/md/technology/'},
            {text: '操作系统', link: '/md/technology/OS/'},
            {text: '网络', link: '/md/technology/network/'},
            {text: '数据结构', link: '/md/technology/data-struct/'},
            {text: '设计模式', link: '/md/technology/design-mode/'},
          ]},
          {text: '计算机语言', items: [
            {text: '概述', link: '/md/program-language/'},
            {text: 'C', link: '/md/program-language/c-language/'},
            {text: 'C++', link: '/md/program-language/cplusplus-language/'},
            {text: 'Java', link: '/md/program-language/java-language/'},
          ]},
          {text: '数据库', items: [
            {text: '概述', link: '/md/database/'},
          ]},
          {text: 'Spring', items: [
            {text: '概述', link: '/md/spring/'},
          ]},
          {text: '中间件', items: [
            {text: '概述', link: '/md/middleware/'},
          ]},
          {text: '分布式', items: [
            {text: '概述', link: '/md/distributed/'},
          ]},
         ]
      },
      {
        text: '刷题',
        items: [
          {text: '概述', link: '/md/algo/'},
          {text: '数组', link: '/md/algo/array/'},
          {text: '链表', link: '/md/algo/list/'},
          {text: '哈希表', link: '/md/algo/hash-table/'},
          {text: '字符串', link: '/md/algo/string/'},
          {text: '栈与队列', link: '/md/algo/stack-queue/'},
          {text: '树', link: '/md/algo/tree/'},
          {text: '回溯', link: '/md/algo/backtrack/'},
          {text: '贪心', link: '/md/algo/greedy/'},
          {text: '动态规划', link: '/md/algo/dp/'},
          {text: '图论', link: '/md/algo/graph/'},
        ]
      },
      {
        text: 'Github',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/md/search/': [
        {
          title: '搜推',
          collapsable: false,
          children: [
            '/md/search/',
            '/md/search/search-online/',
            '/md/search/search-engine/',
            '/md/search/search-dump/',
            '/md/search/search-model/',
          ]
        }
      ],
      '/md/program-language/': [
        {
          title: '计算机语言',
          collapsable: false,
          children: [
            '/md/program-language/',
            '/md/program-language/c-language/',
            '/md/program-language/cplusplus-language/',
            '/md/program-language/java-language/',
          ]
        }
      ],
      '/md/algo/': [
        {
          title: '刷题',
          collapsable: false,
          children: [
            '/md/algo/',
            '/md/algo/array/',
            '/md/algo/list/',
            '/md/algo/hash-table/',
            '/md/algo/string/',
            '/md/algo/stack-queue/',
            '/md/algo/tree/',
            '/md/algo/backtrack/',
            '/md/algo/dp/',
            '/md/algo/graph/',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
