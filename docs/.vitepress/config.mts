import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "EmulationOniOS",
  cleanUrls: true,
  description: "A guide for all things iOS Emulation",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/DidiDidi129/EmulationOniOS/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  lastUpdated: {
    text: 'Last updated at',
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
      { text: 'Available Emulators', link: '/emulators' }
    ],

    sidebar: [
      {
        text: 'Info',
        items: [
          { text: 'Available Emulators', link: '/emulators' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Available Emulators', link: '/emulators' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/kYBAgeM6SE' },
      { icon: 'reddit', link: 'https://reddit.com/r/EmulationOniOS' }
    ]
  }
})
