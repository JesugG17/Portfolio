import { defineCollection, z } from 'astro:content';

const skillsCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        logo: z.string()
    })
});

export const collections = {
    "skills": skillsCollection
}