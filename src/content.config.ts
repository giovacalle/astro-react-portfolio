import { defineCollection, z, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/experiences' }),
  schema: z.object({
    company: z.string(),
    type: z.enum(['scaleup', 'corporate', 'agency']),
    website: z.string().optional(),
    role: z.string(),
    freelance: z.boolean().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    summary: z.string()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      image: image(),
      name: z.string(),
      website: z.string(),
      summary: z.string(),
      date: z.date()
    })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      image: image(),
      title: z.string(),
      date: z.date(),
      readingTime: z.number(),
      summary: z.string()
    })
});

export const collections = {
  experiences,
  projects,
  posts
};
