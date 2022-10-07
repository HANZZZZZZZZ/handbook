export default {
  lang: "en-GB",
  title: "UAG Handbook",
  description: "A handy tome for the scholarly contractor.",
  lastUpdated: true,
  themeConfig: {
    logo: "/yeet21.png",
    siteLogo: false,
    editLink: {
      pattern: "https://github.com/uagpmc/handbook/edit/main/docs/:path",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/uagpmc/handbook" },
      { icon: "discord", link: "https://discord.gg/unnamed-group" },
    ],
    footer: {
      message: "Released under the Unlicense license.",
      copyright: "All copyright waived.",
    },
    nav: [
      { text: "About", link: "/about.md" },
      { text: "Conduct", link: "/conduct.md" },
      { text: "Setup", link: "/setup.md" },
    ],
    sidebar: [
      {
        text: "Fundamentals",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "About the Unit", link: "/about" },
          { text: "Code of Conduct", link: "/conduct" },
          { text: "Getting Started Guide", link: "/setup" },
        ],
      },
    ],
  },
};
