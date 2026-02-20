import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
    title: z.string(),
    // localized slug is handled by file path/slug, but we might keep original url for reference
    // localized slug is handled by file path/slug, but we might keep original url for reference
    // slug property is reserved in Astro content collections
    originalSlug: z.string().optional(),
    locale: z.enum(['fr', 'he']),
    flamelinkId: z.string().optional(),
    date: z.string().optional(), // ISO date string
    updatedDate: z.string().optional(),
    author: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    thumbnail: z.string().optional().nullable(),
    tags: z.array(z.string()).optional(),
    videoUrl: z.string().optional().nullable(),
});

const cuisineCollection = defineCollection({
    type: 'content',
    schema: commonSchema.extend({
        foodType: z.array(z.string()).optional(),
        dishType: z.array(z.string()).optional(),
        events: z.array(z.string()).optional(),
    }),
});

const standardCollection = defineCollection({
    type: 'content',
    schema: commonSchema,
});

export const collections = {
    cuisine: cuisineCollection,
    halakha: standardCollection,
    hazanout: standardCollection,
    articles: standardCollection,
    pages: standardCollection,
    siddur: standardCollection,
    general: standardCollection,
};
