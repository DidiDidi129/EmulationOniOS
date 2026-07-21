import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "EmulationOniOS",
  description: "A guide for all things iOS Emulation",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/DidiDidi129/EmulationOniOS/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  lastUpdated: {
    text: 'Updated at',
     formatOptions: {
      dateStyle: 'full',
      timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'TEst',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/kYBAgeM6SE' },
      { icon: 'reddit', link: 'https://reddit.com/r/EmulationOniOS' }
    ]
  }
})