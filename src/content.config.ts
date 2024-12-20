import { defineCollection, z, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/experiences' }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      // basic
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

export const collections = {
  experiences
};
