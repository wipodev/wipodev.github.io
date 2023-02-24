export default {
  title: "WipoDev",
  titleTemplate: "WipoDev | :title",
  description: "personal portfolio.",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.svg", type: "image/svg" }]],
  themeConfig: {
    siteTitle: "",
    logo: "/logo-main.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/wipodev" }],
    nav: [{ text: "Home", link: "/" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: 'Copyright © 2023-present <a href="https://github.com/wipodev">WipoDev</a>',
    },
  },
};
