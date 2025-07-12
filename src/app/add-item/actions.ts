'use server'

import { autoValueItem, type AutoValueItemInput, type AutoValueItemOutput } from '@/ai/flows/auto-value-item'
import { z } from 'zod'
import { addItem } from '@/lib/firebase/firestore'
import type { Item } from '@/lib/types'
import { uploadImages } from '@/lib/firebase/storage';

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

const AddItemSchema = z.object({
  title: z.string().min(5),
  category: z.enum(['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Shoes']),
  condition: z.enum(['New with tags', 'Like new', 'Good', 'Fair']),
  brand: z.string().optional(),
  description: z.string().min(10),
  points: z.coerce.number().min(1),
  originalPrice: z.coerce.number().optional(),
  valuationStatus: z.enum(['auto', 'manual', 'unvalued']),
})

export async function createItem(formData: FormData, userId: string, userName: string) {
  const data = Object.fromEntries(formData.entries());
  
  const parsed = AddItemSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
    return { error: 'Invalid item data.' };
  }

  const images = formData.getAll('images') as File[];
  if (images.length === 0 || images[0].size === 0) {
      return { error: 'Please upload at least one image.' };
  }

  try {
    const imageUrls = await uploadImages(images, userId);

    const itemData: Omit<Item, 'id' | 'createdAt' | 'uploaderId' | 'status' | 'uploaderName'> = {
      ...parsed.data,
      images: imageUrls
    };

    const itemId = await addItem(itemData, userId, userName);
    return { success: true, itemId };
  } catch (error) {
    console.error('Failed to add item:', error);
    return { error: 'Failed to list your item. Please try again.' };
  }
}
