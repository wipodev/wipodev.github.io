# 🤩 Informe Técnico y Roadmap — WipoDev

## 🔧 Objetivo General
Consolidar *wipodev.com* como una plataforma centralizada de proyectos, documentación y recursos técnicos del ecosistema WipoDev. El sitio debe funcionar tanto como **portafolio visual** como **centro de desarrollo y conocimiento técnico** para mods, frameworks y herramientas propias.

---

## 1. Estado Actual

### ✅ Infraestructura
- **Framework:** Astro (v2+), con `astro:content` activo para colecciones Markdown.
- **Internacionalización:** i18n con `getLangFromUrl` y `useTranslatedPath`.
- **Diseño base:** Hero animado, secciones de mods, contacto, footer y selector de idioma.
- **Navbar dinámica:** transparente en Home, oscurecida con scroll.
- **Scripts globales:** manejo unificado de scroll suave y efectos visuales.
- **Estilo visual:** tema oscuro, color primario `#00ffcc`, tipografía *Orbitron*.

### 🔍 Diagnóstico
| Sección | Estado | Comentario |
|----------|---------|-------------|
| Home | ✅ | Completa y funcional |
| Mods | ✅ | Markdown estandarizado con `astro:content` |
| EverMod | ⚠️ | Requiere sección de documentación propia |
| Blog | ⚠️ | Aún no implementado |
| Apps | 💤 | Baja prioridad por ahora |
| i18n | ✅ | URLs limpias, selector funcional sin JS |
| Scripts globales | ✅ | Unificados y SPA-safe |
| Documentación técnica | ⚠️ | Pendiente para EverMod y proyectos grandes |

---

## 2. Estructura Recomendada

```
src/
├─ components/
│   ├─ Navbar.astro
│   ├─ Footer.astro
│   ├─ LangPicker.astro
│   └─ ...
├─ content/
│   ├─ mods/
│   ├─ blog/
│   └─ docs/
│       ├─ evermod/
│       │   ├─ getting-started.md
│       │   ├─ cli.md
│       │   └─ api-reference.md
│       └─ markforchat/
├─ layouts/
│   ├─ Layout.astro
│   └─ DocLayout.astro
├─ pages/
│   ├─ index.astro
│   ├─ mods/
│   ├─ blog/
│   ├─ evermod/
│   └─ apps/
└─ styles/
    └─ global.css
```

---

## 3. Contenido y Guías

### 📄 Blog
- Directorio: `src/content/blog/`
- Formato: Markdown con frontmatter (`title`, `date`, `tags`, `summary`)
- Propósito: publicar tutoriales y artículos técnicos (Forge, Gradle, CLI, etc.)

### 📘 EverMod Docs
- Directorio: `src/content/docs/evermod/`
- Secciones:
  1. **Getting Started** — Instalación y estructura del workspace.
  2. **Core Framework** — Arquitectura (EverBuffer, ChannelManager...).
  3. **CLI Reference** — Comandos y ejemplos.
  4. **Advanced Topics** — Compatibilidad multiversión, red, ATs.
- Layout sugerido: `DocLayout.astro` con sidebar + contenido Markdown.

---

## 4. Roadmap Estratégico

| Fase | Periodo | Objetivo | Entregables |
|------|----------|-----------|--------------|
| **1. Finalización base** | Semana 1 | Consolidar Home y Mods | Traducciones, Navbar final, SEO básico |
| **2. EverMod Docs** | Semanas 2-3 | Crear `/evermod/` con doc técnica modular | `DocLayout`, *Getting Started*, *CLI* |
| **3. Blog técnico** | Semana 4 | Activar `/blog/` con posts Markdown | Listado + plantillas de artículos |
| **4. Apps Section** | Mes siguiente | Preparar `/apps/` (oculto inicialmente) | Plantilla de proyectos futuros |
| **5. SEO & Deploy** | Continuo | Sitemap, social cards, astro-seo | Mejora de indexación |
| **6. Docs extendidas** | Futuro | MarkForChat, BloxBall, CLI, etc. | Nuevos subdirectorios en `/docs/` |

---

## 5. Consideraciones Futuras
- Subdominio `docs.wipodev.com` para documentación ampliada.
- Integrar changelogs automáticos desde GitHub.
- Feed RSS/JSON para blog.
- Comentarios técnicos con *Giscus* o *Utterances*.

---

## 📊 Conclusión
El sitio **WipoDev** ya cuenta con una base técnica sólida. Los próximos pasos deben centrarse en **documentación y contenido técnico** para reforzar la presencia profesional del ecosistema, con **EverMod** como pilar principal.

El enfoque *Astro-first* (HTML estático, i18n compilado, JS mínimo) asegura un sitio de **alto rendimiento, mantenible y alineado con la identidad WipoDev**.