export interface Item {
  id: string;
  title: string;
  category: 'Tops' | 'Bottoms' | 'Dresses' | 'Outerwear' | 'Accessories' | 'Shoes';
  condition: 'New with tags' | 'Like new' | 'Good' | 'Fair';
  brand?: string;
  images: string[];
  uploaderName: string;
  points: number;
  originalPrice?: number;
  valuationStatus: 'auto' | 'manual' | 'unvalued';
  description: string;
}
