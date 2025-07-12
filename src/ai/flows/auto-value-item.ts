'use server';

/**
 * @fileOverview This file defines a Genkit flow for automatically valuing an item based on its title and category.
 *
 * - autoValueItem - A function that takes item title and category and returns suggested redeem points.
 * - AutoValueItemInput - The input type for the autoValueItem function.
 * - AutoValueItemOutput - The return type for the autoValueItem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoValueItemInputSchema = z.object({
  title: z.string().describe('The title of the item to be valued.'),
  category: z.string().describe('The category of the item.'),
});
export type AutoValueItemInput = z.infer<typeof AutoValueItemInputSchema>;

const AutoValueItemOutputSchema = z.object({
  suggestedPoints: z
    .number()
    .describe('The suggested redeem points for the item.'),
  originalPrice: z.number().optional().describe('The original price of the item if found'),
});
export type AutoValueItemOutput = z.infer<typeof AutoValueItemOutputSchema>;

export async function autoValueItem(input: AutoValueItemInput): Promise<AutoValueItemOutput> {
  return autoValueItemFlow(input);
}

const autoValueItemPrompt = ai.definePrompt({
  name: 'autoValueItemPrompt',
  input: {schema: AutoValueItemInputSchema},
  output: {schema: AutoValueItemOutputSchema},
  prompt: `You are an expert in valuing used clothing items. Based on the title and category of the item, suggest a reasonable redeem points value for the item. The points should reflect approximately 50% of the original price if available. If you can, also determine the original price.

Title: {{{title}}}
Category: {{{category}}}`,
});

const autoValueItemFlow = ai.defineFlow(
  {
    name: 'autoValueItemFlow',
    inputSchema: AutoValueItemInputSchema,
    outputSchema: AutoValueItemOutputSchema,
  },
  async input => {
    const {output} = await autoValueItemPrompt(input);
    return output!;
  }
);
