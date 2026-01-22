import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

const serviceSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
	skills: z.array(z.string().nonempty()).nonempty(),
	category: z.string()
});

const experienceSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
	skills: z.array(z.string().nonempty()).nonempty(),
	companyName: z.string().nonempty(),
	companyLogo: z.string(),
	period: z.string().nonempty()
});


export default defineContentConfig({
	collections: {
		experiences_en: defineCollection({
			type: 'data',
			source: 'experiences/en/*.md',
			schema: experienceSchema
		}),
		experiences_de: defineCollection({
			type: 'data',
			source: 'experiences/de/*.md',
			schema: experienceSchema
		}),
		experiences_da: defineCollection({
			type: 'data',
			source: 'experiences/da/*.md',
			schema: experienceSchema
		}),
		services_en: defineCollection({
			type: 'data',
			source: 'services/en/*.md',
			schema: serviceSchema
		}),
		services_de: defineCollection({
			type: 'data',
			source: 'services/de/*.md',
			schema: serviceSchema
		}),
		services_da: defineCollection({
			type: 'data',
			source: 'services/da/*.md',
			schema: serviceSchema
		}),
		services: defineCollection({
			type: 'data',
			source: 'services/*.json',
			schema: z.object({
				en: serviceSchema,
				de: serviceSchema,
				da: serviceSchema
			})
		}),
		content: defineCollection({
			type: 'page',
			source: '/*.md'
		})

	}
});
