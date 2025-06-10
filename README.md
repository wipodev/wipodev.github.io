# Portafolio Personal

Este proyecto utiliza [Astro](https://astro.build/) para generar un sitio estático con el que presento mis mods y otros trabajos de programación.

## Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Construcción y vista previa

```bash
npm run build
npm run preview
```

## Traducciones

Este proyecto utiliza [astro-i18next](https://github.com/yassinedoghri/astro-i18next) para gestionar los textos en distintos idiomas. Los archivos de traducción se encuentran en el directorio `locales` y cada idioma está representado por un archivo JSON (por ejemplo `es.json` o `en.json`).

Para añadir un nuevo idioma:

1. Crea un archivo `locales/<codigo>.json` con las cadenas traducidas.
2. Añade el código del idioma al arreglo `supportedLocales` en `astro.config.mjs`.

Dentro de los componentes se debe importar el hook de esta manera y llamarlo con `await` para obtener las funciones de traducción:

```js
import useTranslation from "astro-i18next";

const { t } = await useTranslation();
```

