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
  },
  locales: {
    root: {
      label: "English",
      lan: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          {
            text: "Projects",
            items: [
              { text: "Mark for Chat", link: "https://wipodev.com/markforchat/" },
              { text: "Liquid Simulator", link: "https://www.wipodev.com/liquid-simulator-godot/" },
              { text: "VuePress Theme", link: "https://www.wipodev.com/vuepress-theme-ajwi/" },
            ],
          },
        ],
        footer: {
          message: "Released under the MIT License.",
          copyright: 'Copyright © 2023-present <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
    es: {
      label: "Spanish",
      lan: "es",
      link: "/es/",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/es/" },
          {
            text: "Proyectos",
            items: [
              { text: "Marcar para chatear", link: "https://wipodev.com/markforchat/es/" },
              { text: "Simulador de Líquidos", link: "https://www.wipodev.com/liquid-simulator-godot/es/" },
              { text: "Tema VuePress", link: "https://www.wipodev.com/vuepress-theme-ajwi/es/" },
            ],
          },
        ],
        footer: {
          message: "Publicado bajo la licencia MIT.",
          copyright: 'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
  },
};
