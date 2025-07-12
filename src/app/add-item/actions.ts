'use server'

import { autoValueItem, type AutoValueItemInput, type AutoValueItemOutput } from '@/ai/flows/auto-value-item'
import { z } from 'zod'

const AutoValueItemInputSchema = z.object({
  title: z.string(),
  category: z.string(),
})

export async function getValuation(data: AutoValueItemInput): Promise<AutoValueItemOutput | { error: string }> {
  const parsed = AutoValueItemInputSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid input.' };
  }

  try {
    const result = await autoValueItem(parsed.data);
    return result;
  } catch (error) {
    console.error('Valuation error:', error);
    return { error: 'An unexpected error occurred during valuation.' };
  }
}
