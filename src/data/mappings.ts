import { getCollection, type CollectionEntry } from 'astro:content';

export const getExperiences = async () => {
  const collection = (await getCollection('experiences')) as CollectionEntry<'experiences'>[];

  const experiences = collection
    .sort((a, b) => (a.data.startDate > b.data.startDate ? -1 : 1))
    .map(exp => ({
      ...exp,
      data: {
        ...exp.data,
        startDate: exp.data.startDate.toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric'
        }),
        endDate: exp.data.endDate
          ? exp.data.endDate.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })
          : 'Present'
      }
    }));

  return experiences;
};
