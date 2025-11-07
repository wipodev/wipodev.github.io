import { defineCollection, z } from "astro:content";

const mods = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    description: z.string(),
    versions: z.array(z.string()),
    status: z.string(),
    model: z.string().optional(),
    link: z.string().url(),
    gallery: z.array(z.string().optional()),
    featured: z.boolean(),
    lang: z.enum(["es", "en"]),
  }),
});

export const collections = { mods };
