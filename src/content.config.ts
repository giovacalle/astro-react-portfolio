import { defineCollection, reference, z, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/experiences' }),
  schema: z.object({
    // basic
    company: z.string(),
    type: z.enum(['scaleup', 'corporate', 'agency']),
    website: z.string().optional(),
    role: z.string(),
    freelance: z.boolean().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    summary: z.string(),
    // details
    relatedProjects: z.array(reference('projects')).optional()
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
      date: z.date(),
      stack: z.array(z.string())
    })
});

export const collections = {
  experiences,
  projects
};
