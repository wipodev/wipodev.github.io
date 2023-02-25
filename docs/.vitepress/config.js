export default {
  title: "WipoDev",
  titleTemplate: "WipoDev | :title",
  description: "personal portfolio.",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/assets/img/favicon.svg", type: "image/svg" }]],
  themeConfig: {
    siteTitle: "",
    logo: "/assets/img/logo-main.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/wipodev" }],
  },
  locales: {
    root: {
      label: "English",
      lan: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Projects", link: "/projects/" },
          { text: "Skills", link: "/skills/" },
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
          { text: "Proyectos", link: "/es/projects/" },
          { text: "Habilidades", link: "/es/skills/" },
        ],
        footer: {
          message: "Publicado bajo la licencia MIT.",
          copyright: 'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
  },
};
