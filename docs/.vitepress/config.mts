import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  head: [['link', { rel: 'icon', href: 'https://github.com/DidiDidi129/EmulationOniOS/raw/refs/heads/main/logo.ico' }]],
  title: "EmulationOniOS",
  cleanUrls: true,
  description: "A guide for all things iOS Emulation",
  lastUpdated: true,
  themeConfig: {
    logo: 'https://github.com/DidiDidi129/EmulationOniOS/blob/main/logo.png?raw=true',
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
          { text: 'Community Guides', link: '/community-guides' },
          { text: 'ROM Dumping Guides', link: '/dumping' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/kYBAgeM6SE' },
      { icon: 'reddit', link: 'https://reddit.com/r/EmulationOniOS' }
    ]
  }
})
