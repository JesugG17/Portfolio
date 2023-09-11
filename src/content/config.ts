import { defineCollection, z } from 'astro:content';

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      logo: z.string(),
    })
  ),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      technologies: z.array(
        z.object({
          name: z.string(),
          img: z.string(),
        })
      ),
      img: z.string(),
      code: z.string(),
      deploy: z.string(),
    })
  ),
});

const socialMediaCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      link: z.string(),
      img: z.string(),
    })
  ),
});

export const collections = {
  skills: skillsCollection,
  projects: projectsCollection,
  'social-media': socialMediaCollection,
};
