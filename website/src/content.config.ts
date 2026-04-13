import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../recipes' }),
  schema: z.object({
    name: z.string(),
    style: z.string(),
    batch_size_liters: z.number(),
    brew_date: z.union([z.string(), z.date().transform(d => d.toISOString().split('T')[0])]).default(''),
    bottle_date: z.union([z.string(), z.date().transform(d => d.toISOString().split('T')[0])]).optional().default(''),
    status: z.enum(['planned', 'fermenting', 'conditioning', 'ready', 'archived']),
    og: z.number().nullable(),
    fg: z.number().nullable(),
    abv: z.number().nullable(),
    ibu: z.number().nullable(),
    srm: z.number().nullable(),
    fermentation: z.object({
      temp_celsius: z.number().nullable(),
      duration_days: z.number().nullable(),
    }).optional(),
    ingredients: z.object({
      malts: z.array(z.object({ name: z.string(), weight_kg: z.number(), lovibond: z.number().optional() })),
      hops: z.array(z.object({
        name: z.string(),
        weight_g: z.number(),
        time_min: z.number(),
        use: z.string(),
        alpha_acid_pct: z.number().optional(),
      })),
      yeast: z.object({ name: z.string(), amount: z.string() }),
      other: z.array(z.any()).optional().default([]),
    }),
    process: z.object({
      mash_temp_celsius: z.number().nullable(),
      mash_duration_min: z.number().nullable(),
      strike_water_liters: z.number().nullable(),
      strike_water_temp_celsius: z.number().nullable(),
      sparge_water_liters: z.number().nullable(),
      sparge_water_temp_celsius: z.number().nullable(),
      boil_duration_min: z.number(),
      preboil_volume_liters: z.number().nullable(),
    }).optional(),
    cost: z.object({
      total_krw: z.number().nullable(),
      breakdown: z.array(z.object({ item: z.string(), cost_krw: z.number() })),
    }).optional(),
    gravity_readings: z.array(z.object({
      day: z.number(),
      date: z.union([z.string(), z.date().transform(d => d.toISOString().split('T')[0])]),
      sg: z.number(),
      note: z.string().optional(),
    })).optional().default([]),
    tasting_notes: z.string().optional().default(''),
    brew_notes: z.string().optional().default(''),
    collaborators: z.array(z.object({
      handle: z.string(),
      url: z.string().optional(),
    })).optional().default([]),
    collaborator_group: z.string().optional(),
    card_photo_position: z.string().optional(),
    photos: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()),
  }),
});

export const collections = { recipes };
